import React from 'react';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20vh',
      }}
    >
      <img style={{ width: '20vw' }} src={require('../assets/images/star-wars-star.gif')} />
      <h1 style={{ fontSize: '4hv', marginTop: '5hv', color: '#444242' }}>
        Ожидание данных с сервера...
      </h1>
    </div>
  );
};

export default Loading;
