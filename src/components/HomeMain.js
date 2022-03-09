import React from 'react';
import {BiMicrophone, BiSearchAlt2} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import {useResult} from '../context/ResultContextProvider';

const HomeMain = () => {
  const navigate = useNavigate();
  const {searchTerm, setSearchTerm} = useResult();
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }
  const handleClick = () => {
    navigate('/search')
  }

  return (
    <div className="mt-28 sm:mt-72 px-6">
        <div>
          <img className="object-contain mx-auto mb-3 w-3/4 sm:w-80 " src="./img/logo.png" alt="logo" />
        </div>
        <div className="flex border border-yellow-100 shadow-md shadow-yellow-100 max-w-xl mx-auto items-center rounded-md">
          <input className="outline-none text-sm sm:text-[16px] w-full pl-10 caret-green-500 text-purple-600 font-medium placeholder:italic placeholder:text-purple-500" type="text" value={searchTerm} onChange={handleSearch} placeholder="Type a keyWord....."/>
          <div className="flex justify-end items-center gap-5">
            <BiMicrophone className="text-2xl text-yellow-400"/>
            <BiSearchAlt2 onClick={handleClick} className="bg-blue-500 text-4xl text-white p-2 rounded-r-md" />
          </div>
        </div>
    </div>
  )
}

export default HomeMain;