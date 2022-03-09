import React from 'react';
import {BsGrid3X3Gap} from 'react-icons/bs';

const HeaderHome = () => {
  return (
    <header className="flex gap-4 sm:gap-5 justify-end items-center py-6 px-6 sm:px-10 border-b-2 border-blue-200 sm:border-none shadow-md shadow-blue-300 sm:shadow-none">
        <h5 className="text-sm sm:text-lg font-medium tracking-wider text-slate-600 italic">Gmail</h5>
        <h5 className="text-sm sm:text-lg font-medium tracking-wider text-slate-600 italic">Images</h5>
        <BsGrid3X3Gap className="text-xl sm:text-2xl text-slate-600"/>
        <button className="bg-blue-500 px-4 sm:px-8 py-1 rounded-sm text-sm sm:text-lg text-white font-medium tracking-wider italic">Sign In</button>
    </header>
  )
}

export default HeaderHome;