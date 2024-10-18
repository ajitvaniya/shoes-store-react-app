import React from 'react';

import logoIcon from '../assets/img/logo.png';
import bagIcon from '../assets/img/bag.png';
import menuIcon from '../assets/img/menuIcon.png';

const NavComponent = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-black text-white py-4 px-8  shadow-lg flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src={logoIcon} alt="Nike" className="w-[107px] h-[40px]" />
      </div>
      
      <ul className="flex space-x-8 text-sm">
        <li>
          <a href="#" className="hover:text-gray-400">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">Offers</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">Collections</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </li>
      </ul>

      <div className="flex items-center space-x-6">
        
        <div className="flex items-center bg-gray-700 rounded-full px-4 py-2">
          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.65 5.65a7.5 7.5 0 006.5 10.85z"></path>
          </svg>
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent outline-none text-sm text-white placeholder-gray-400 ml-2"
          />
        </div> 
        <div>
            <img src={bagIcon} alt="bagicon" className="w-[50px] h-[50px]" /> 
        </div>

        
        <div>
            <img src={menuIcon} alt="menuIcon" className="w-[50px] h-[50px]" /> 
        </div>
      </div>

    </nav>
  );
};

export default NavComponent;
