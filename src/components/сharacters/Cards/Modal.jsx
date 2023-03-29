import React, { memo } from 'react';

const Modal = memo(({ modalData, modalRef, setIsComponentVisible }) => {
  return (
    <>
      <div className={'modal__wrapper'} />

      <div className={'modal'} ref={modalRef}>
        <img
          className={'close'}
          src={require('../../../assets/images/close.png')}
          onClick={() => setIsComponentVisible(false)}
        />
        <div className={'modal__left'}>
          <img src={modalData.image} alt={'img'} />
          <div className={'card__bottom modal__left_bottom'}>
            {modalData.gender && (
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
            {modalData.birth_year && (
              <span style={{ background: '#07D6F2' }}>{modalData.birth_year}</span>
            )}
          </div>
        </div>
        <div className={'modal__right'}>
          <span className={'modal__right_name'}>{modalData.name}</span>
          <div className={'modal__right_parameters'}>
            <div className={'parameters__text'}>
              <span>hair color : {modalData.hairColor} </span>
              <span>skin color : {modalData.skinColor} </span>
              <span>year color : {modalData.eyeColor} </span>
            </div>
          </div>
          <div className={'card__parameters'}>
            {modalData.height && (
              <div className={'parameters__block modal__parameters_bottom '}>
                <span>{modalData.height}</span>
                <p>height</p>
              </div>
            )}
            {modalData.mass && (
              <div className={'parameters__block modal__parameters_bottom '}>
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
