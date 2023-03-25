import React, { memo, useEffect, useRef, useState } from 'react';
import '../index.css';
import ReactPaginate from 'react-paginate';
import Modal from './Modal';
import { useComponentVisible } from '../../../hook/useComponentVisible';
import Card from './Card';

const Cards = memo(({ newData }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [width, setWidth] = useState(window.screen.width);
  const [modalData, setModalData] = useState([]);

  const { ref: modalRef, isComponentVisible, setIsComponentVisible } = useComponentVisible();

  useEffect(() => {
    // считаю ширину экрана, чтоб выводить 9 или 10 карточек взависимости от значения
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const size = width > 767 ? 9 : 10;
  const offset = currentPage * size;
  const currentPageData = newData?.slice(offset, offset + size);
  const pageCount = Math.ceil(newData?.length / size);

  const handlePagePaginateClick = (event) => {
    setCurrentPage(event.selected);
  };
  return (
    <>
      <div className={'card-block'}>
        <Card
          currentPageData={currentPageData}
          setIsComponentVisible={setIsComponentVisible}
          setModalData={setModalData}
        />
        {/*Модальное окно*/}
        {isComponentVisible && (
          <Modal
            modalRef={modalRef}
            modalData={modalData}
            setIsComponentVisible={setIsComponentVisible}
          />
        )}
      </div>
      <div className={'pagination-block'}>
        {/*Пагинация*/}
        <ReactPaginate
          nextLabel="next >"
          previousLabel="< prev"
          onPageChange={handlePagePaginateClick}
          pageRangeDisplayed={10}
          pageCount={pageCount}
          containerClassName={'pagination'}
          previousLinkClassName={'pagination__link'}
          nextLinkClassName={'pagination__link'}
          disabledClassName={'pagination__link--disabled'}
          activeClassName={'pagination__link--active'}
        />
      </div>
    </>
  );
});

export default Cards;
