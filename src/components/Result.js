import React, { useEffect } from "react";
import Footer from "./Footer";
import HeaderResult from "./HeaderResult";
import {useResult} from '../context/ResultContextProvider';
import Loading from "./Loading";
import { useLocation } from "react-router-dom";


const Result = () => {
  const {result, getResult, searchTerm, loading} = useResult();
  const location = useLocation();

  useEffect(() => {
    getResult(`${location.pathname}/q=${searchTerm}`);
  },[location.pathname, searchTerm]);
  console.log(result);

  //if loading
  if(loading) {
    return <Loading/>
  }

  switch(location.pathname) {
    case '/search': 
      return (
        <div>
        <HeaderResult/>
        <div className="flex justify-center px-6 mt-6 sm:mt-10 pt-40 pb-28 sm:pb-40 relative">
          <div className="max-w-lg space-y-4 sm:space-y-6">
            {result?.results?.map((value,key) => (
              <div key={key}>
                <a href={value.link} target='_blank'>
                  <p className="font-medium text-teal-400">{value.link.length > 30 ? value.link.substring(0, 30) : value.link}</p>
                  <p className="text-[17px] sm:text-xl text-blue-400 hover:underline break-words">
                    {value.title}
                  </p>
                </a>
            </div>
            ))}
          </div>
        </div>
        <Footer/>
      </div>
      )
      case '/images': 
      return (
        <div>
        <HeaderResult/>
          <div className="flex gap-4 flex-wrap px-5 sm:px-12 justify-center items-center pt-52 pb-32 sm:pb-40">
            {result?.image_results?.map(({image, link: {href}},key) => (
              <div key={key} className='shadow-md shadow-yellow-100 hover:scale-105 transition ease-out hover:shadow-xl hover:shadow-yellow-200 cursor-pointer'>
                <img className="rounded-md" src={image.src} alt="img" />
              </div>
            ))}
            </div>
        <Footer/>
      </div>
      )

      case '/videos': 
      return (
        <div>
        <HeaderResult/>
        <div className="flex justify-center px-6 mt-6 sm:mt-10 pt-40 pb-26 sm:pb-40 relative">
          <div className="max-w-lg space-y-4 sm:space-y-6">
            {result?.results?.map((value,key) => (
              <div key={key}>
                <a href={value.link} target='_blank'>
                  <p className="font-medium text-teal-400">{value.link.length > 30 ? value.link.substring(0, 30) : value.link}</p>
                  <p className="text-[17px] sm:text-xl text-blue-400 hover:underline break-words">
                    {value.title}
                  </p>
                </a>
            </div>
            ))}
          </div>
        </div>
        <Footer/>
      </div>
      )

      case '/news': 
      return (
        <div>
        <HeaderResult/>
        <div className="flex justify-center px-6 mt-6 sm:mt-10 pt-40 pb-26 sm:pb-40 relative">
          <div className="max-w-lg space-y-4 sm:space-y-6">
            {result?.results?.map((value,key) => (
              <div key={key}>
                <a href={value.link} target='_blank'>
                  <p className="font-medium text-teal-400">{value.link.length > 30 ? value.link.substring(0, 30) : value.link}</p>
                  <p className="text-[17px] sm:text-xl text-blue-400 hover:underline break-words">
                    {value.title}
                  </p>
                </a>
            </div>
            ))}
          </div>
        </div>
        <Footer/>
      </div>
      )

    default: 
      return 'Error!'
  }
};

export default Result;
