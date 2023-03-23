import React, { memo } from 'react';

const Modal = memo(({ modalData, modalRef, setIsComponentVisible }) => {
  return (
    <>
      <div className={'modal-wrapper'} />

      <div className={'modal'} ref={modalRef}>
        <img
          className={'close'}
          src={require('../../../assets/images/close.png')}
          onClick={() => setIsComponentVisible(false)}
        />
        <div className={'modal-left'}>
          <img
            src={require(`../../../assets/images/${
              (modalData.gender === 'male' && 'male') ||
              (modalData.gender === 'female' && 'female') ||
              (modalData.gender !== ('male' || 'female') && 'gender')
            }.png`)}
            alt={'img'}
          />
          <div className={'card-bottom modal-left-bottom'}>
            {modalData.gender !== 'unknown' && (
              <span
                style={{
                  background:
                    (modalData.gender === 'female' && '#C956FF') ||
                    (modalData.gender === 'hermaphrodite' && '#F5DB13') ||
                    ((modalData.gender === 'n/a' || modalData.gender === 'none') && '#bab8b3') ||
                    (modalData.gender === 'hermaphrodite' && '#F5DB13') ||
                    (modalData.gender === 'male' && '#73D677'),
                }}
              >
                {modalData.gender}
              </span>
            )}
            {modalData.birth_year !== 'unknown' && (
              <span style={{ background: '#07D6F2' }}>{modalData.birth_year}</span>
            )}
          </div>
        </div>
        <div className={'modal-right'}>
          <span className={'modal-right-name'}>{modalData.name}</span>
          <div className={'modal-right-parameters'}>
            <div className={'parameters-text'}>
              <span>hair color : {modalData.hair_color} </span>
              <span>skin color : {modalData.skin_color} </span>
              <span>year color : {modalData.eye_color} </span>
            </div>
          </div>
          <div className={'card-parameters   '}>
            {modalData.height !== 'unknown' && (
              <div className={'parameters-block modal-parameters-bottom '}>
                <span>{modalData.height}</span>
                <p>height</p>
              </div>
            )}
            {modalData.mass !== 'unknown' && (
              <div className={'parameters-block modal-parameters-bottom '}>
                <span>{modalData.mass}</span>
                <p>mass</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
});

export default Modal;
