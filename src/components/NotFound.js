import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen relative'> 
      <div className='absolute top-[20%]'>
        <img className='w-32 sm:w-48 object-contain' src="./img/404.png" alt="404" />
      </div>
      <img src="./img/notfound.gif" alt="notfound" />
      <div className='text-center absolute bottom-[16%] sm:bottom-[18%] px-2'>
        <h2 className='text-xl sm:text-2xl text-slate-600 font-medium italic tracking-wider'>Look like you're lost</h2>
        <p className='text-slate-500 pt-1 text-xs sm:text-base'>the page you are looking for not aviaible</p>
        <Link to='/' className='px-8 py-1 mt-5 inline-block bg-green-500 text-white font-medium italic'>Go to Home</Link>
      </div>
    </div>
  )
}

export default NotFound;