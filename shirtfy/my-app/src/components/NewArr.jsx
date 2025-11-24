import React from 'react'
import { useTheme } from "../ThemeContext"; 

const NewArr = ( {image , title , description , price}) => {
   
  return (
<div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
  <img
    src={image}
    alt={title}
    className="w-full h-70 object-cover rounded-t-lg"
  />
  
  <div className="p-3">
    <h2 className="text-xl font-semibold text-gray-800 truncate">
      {title}
    </h2>
    <h6>{description}</h6>
    <p className="mt-2 text-gray-600 text-sm">
      ₹{price}
    </p>
  </div>
</div>
  );
};

export default NewArr
