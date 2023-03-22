import React, { memo, useEffect, useState } from 'react';
import './index.css';
import ReactPaginate from 'react-paginate';

const Cards = memo(({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [width, setWidth] = useState(window.screen.width);

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
  const currentPageData = data?.slice(offset, offset + size);
  const pageCount = Math.ceil(data?.length / size);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };
  return (
    <>
      <div className={'card-block'}>
        {currentPageData.map((el, index) => {
          return (
            <div className={'card'} key={index}>
              <div className={'card-items'}>
                <div className={'card-name'}>{el.name}</div>
                <div className={'card-parameters'}>
                  {el.height !== 'unknown' && (
                    <div className={'parameters-block'}>
                      <span>{el.height}</span>
                      <p>height</p>
                    </div>
                  )}
                  {el.mass !== 'unknown' && (
                    <div className={'parameters-block'}>
                      <span>{el.mass}</span>
                      <p>mass</p>
                    </div>
                  )}
                </div>

                <div className={'card-bottom'}>
                  {el.gender !== 'unknown' && (
                    <span
                      style={{
                        background:
                          (el.gender === 'female' && '#C956FF') ||
                          (el.gender === 'hermaphrodite' && '#F5DB13') ||
                          ((el.gender === 'n/a' || el.gender === 'none') && '#bab8b3') ||
                          (el.gender === 'hermaphrodite' && '#F5DB13') ||
                          (el.gender === 'male' && '#73D677'),
                      }}
                    >
                      {el.gender}
                    </span>
                  )}
                  {el.birth_year !== 'unknown' && (
                    <span style={{ background: '#07D6F2' }}>{el.birth_year}</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={'pagination-block'}>
        <ReactPaginate
          nextLabel="next >"
          previousLabel="< prev"
          onPageChange={handlePageClick}
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
