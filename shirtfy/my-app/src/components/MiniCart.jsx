import React from "react"  
  
  export default function MiniCart(){
    return(
         <div className="relative group inline-block">
      {/* Cart Icon */}
      {/* <button className="relative p-2 text-2xl">
        
      </button> */}

      {/* Mini Cart Dropdown */}
      <div className="absolute right-0 mt-2 w-64 rounded-xl shadow-lg bg-white border border-gray-200 
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="p-4 text-center text-gray-600">
          Your cart is empty
        </div>
      </div>
    </div>
    )
}

