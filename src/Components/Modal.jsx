import React from 'react';
import { FaXmark } from "react-icons/fa6";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-red-500 hover:text-red-600"
        >
          <FaXmark/>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
