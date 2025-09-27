import React from "react";

const Card = ({ image, Title, Description, price }) => {
  return (
    
    <div className="w-64 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 mx-4 inline-block">
     
      
      <img
        src={image }
        alt={Description}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      
      {/* Content */}
      <div className="p-3">
        <h2 className="text-xl font-semibold text-gray-800 truncate">
          {Title}
        </h2>
        <p className="mt-2 text-gray-600 text-sm">
          ₹{price}
        </p>
        <button className="mt-3 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;