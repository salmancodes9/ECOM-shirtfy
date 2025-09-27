import React from 'react'

const NewArr = ( {image , title , description , price}) => {
  return (
        <div className='p-3 inline-block '>
  <div  className="w-80  bg-white border border-gray-00 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 mx-4 inline-block   ">
        
        <img
          src={image }
          alt={{}}
          className="w-full  h-70 object-cover rounded-t-lg"
        />
        
        {/* Content */}
        <div className="p-3">
          <h2 className="text-xl font-semibold text-gray-800 truncate">
            {title}
           
          </h2>
          <h6> {description}</h6>

          <p className="mt-2 text-gray-600 text-sm">
            ₹{price}
          </p>
          {/* <button className="mt-3 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
            Add to Cart
          </button> */}
        </div>
      </div>
      </div>
     
     
  )
}

export default NewArr
