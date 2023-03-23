import React, { memo } from 'react';

const Modal = memo(({ modalData, modalRef, setIsComponentVisible }) => {
  console.log(modalData);
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
