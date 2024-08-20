import React from 'react';
import { FaXmark } from "react-icons/fa6";


const Widget = ({ widget, onRemove }) => (
  <div className="p-4 border rounded-lg shadow-md bg-white h-36">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-base font-semibold">{widget.name}</h3>
      <button onClick={onRemove} className="text-red-500"><FaXmark/></button>
    </div>
    <p className='text-sm justify-center text-center'>{widget.text}</p>
    <p style={{ backgroundColor: widget.color }} className='text-center text-base font-semibold w-7/12 h-2 m-auto mt-2 '>{}</p>
    
  </div>
);

export default Widget;
