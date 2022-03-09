import React from 'react';
import {Rings} from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-green-50'>
        <img src="./img/loading.gif" alt="loading" />
        {/* <Rings color="#00BFFF" height={80} width={80}/> */}
    </div>
  )
}

export default Loading;