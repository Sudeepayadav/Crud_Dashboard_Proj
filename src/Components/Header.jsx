import React,{useState} from 'react';
import { FaHome, FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const [clickedItem, setClickedItem] = useState('home');

    const handleClick = (item) => {
      setClickedItem(item);
    };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-sm border-b">
     
      <div className="flex items-center space-x-2 text-gray-600">
        <FaHome />
        <span
          onClick={() => handleClick('home')}
          className={`cursor-pointer font-semibold ${clickedItem === 'home' ? 'text-indigo-600' : 'text-gray-600'}`}
        >
          Home
        </span>
        <span className="text-gray-400">{'>'}</span>
        <span
          onClick={() => handleClick('dashboard')}
          className={`cursor-pointer font-semibold ${clickedItem === 'dashboard' ? 'text-indigo-600' : 'text-gray-600'}`}
        >
          Dashboard V2
        </span>
      </div>

     
      <div className="flex-grow flex justify-center">
        <div className="relative w-6/12">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-100"
          />
        </div>
      </div>

     
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-400" />
        <FaUserCircle className="text-gray-400" />
      </div>
    </div>
  );
};

export default Header;
