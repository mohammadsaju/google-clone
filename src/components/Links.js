import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcSearch } from "react-icons/fc";
import {
  BiImages,
  BiVideo,
  BiNews,
} from "react-icons/bi";
import { useLocation } from 'react-router-dom';

const Links = () => {
  const location = useLocation();

  const activeClass = 'flex items-center gap-1 text-sm sm:text-lg font-medium text-green-500  cursor-pointer text-green-500 border-b-2 sm:border-b-4 border-green-500'
  const noneActive = 'flex items-center gap-1 text-sm sm:text-lg font-medium text-teal-500  cursor-pointer'

  return (
    <div className="flex gap-3 sm:gap-14 justify-center items-center mt-1 sm:mt-6">
          <Link to='/search' className={location.pathname === '/search' ? activeClass : noneActive}>
            <FcSearch /> All
          </Link>
          <Link to='/images' className={location.pathname === '/images' ? activeClass : noneActive}>
            <BiImages />
            Images
          </Link>
          <Link to='/videos' className={location.pathname === '/videos' ? activeClass : noneActive}>
            <BiVideo />
            Videos
          </Link>
          <Link to='/news' className={location.pathname === '/news' ? activeClass : noneActive}>
            <BiNews />
            News
          </Link>
    </div>
  )
}

export default Links