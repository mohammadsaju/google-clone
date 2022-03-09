import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { BiMicrophone, BiSearchAlt2 } from "react-icons/bi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import Links from './Links';
import imge from '../images/google.gif';
import { useResult } from '../context/ResultContextProvider';
import { useDebounce } from 'use-debounce';

const HeaderResult = () => {
  const {setSearchTerm} = useResult();
  const [text, setText] = useState('');
  const [debounceValue] = useDebounce(text, 2000);

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/');
  }
  const handleSearch = (e) => {
    setText(e.target.value)
  }

  useEffect(() => {
    if(debounceValue) {
      return setSearchTerm(text)
    }
  }, [debounceValue]);
  
  return (
    <header className="border-b-2 border-green-100 shadow-md shadow-green-100 pb-6 sm:pb-4 fixed top-0 left-0 right-0 z-20 bg-white">
        {/* header top */}
        <div className="md:flex justify-evenly py-4 px-3 sm:px-6 md:px-10">
          <div onClick={handleRedirect} className="hidden md:block">
            <img className="h-11" src="./img/logo.png" alt="logo" />
          </div>
          <div onClick={handleRedirect} className="md:hidden">
            <img className="h-12 mx-auto" src={imge} alt="google" />
          </div>
          <div className="flex grow border border-green-100 shadow-md shadow-green-100 max-w-xl items-center rounded-md mx-auto md:mx-0">
            <input
              className="outline-none w-full pl-10 caret-green-500 text-purple-600 font-medium"
              type="text" value={text} onChange={handleSearch}
            />
            <div className="flex justify-end items-center gap-5">
              <BiMicrophone className="text-2xl text-teal-400 cursor-pointer" />
              <BiSearchAlt2 className="bg-green-500 text-4xl text-white p-2 rounded-r-md cursor-pointer" />
            </div>
          </div>
          <div className="md:flex gap-10 items-center hidden md:block">
            <AiOutlineSetting className="text-2xl text-slate-400 cursor-pointer" />
            <BsGrid3X3Gap className="text-2xl text-slate-400 cursor-pointer" />
            <img
              className="w-11 h-11 rounded-full cursor-pointer"
              src="./img/user.jpg"
              alt="user"
            />
          </div>
        </div>
        {/* header bottom */}
        <Links/>
    </header>
  )
}

export default HeaderResult;