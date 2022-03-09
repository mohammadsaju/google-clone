import React from 'react';
import imge from '../images/haha.gif';

const Footer = () => {
  return (
      <footer className="text-center bg-teal-50 px-6 py-4 sm:py-10 mt-5 sm:mt-8 fixed bottom-0 left-0 right-0">
          <p className="sm:text-xl font-medium italic text-teal-400 flex justify-center items-center">@Created By Mohammad Saju <img className="w-10" src={imge} alt="" /></p>
      </footer>
  )
}

export default Footer;