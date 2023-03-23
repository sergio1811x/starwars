import React, { memo } from 'react';

const Card = memo(({ currentPageData, setIsComponentVisible, setModalData }) => {
  return (
    <>
      {currentPageData?.map((el, index) => {
        return (
          <div
            className={'card'}
            key={index}
            onClick={() => {
              setIsComponentVisible(true);
              setModalData(el);
            }}
          >
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
    </>
  );
});

export default Card;
