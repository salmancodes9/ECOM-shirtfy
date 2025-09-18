import { Import } from "lucide-react";
import React from "react";
import Navbar from "../components/Navbar";
import { BrandBanner } from "../components/BrandBanner";

const Cart = () => {
  return (
    <>
      
      <div className="flex justify-between  items-center flex-col ">
        <img
          src="https://tss-static-images.gumlet.io/emptyCart.png"
          alt="logo"
          className="h-36 mt-20"
        />

        <p className="text-2xl font-bold text-gray-800">Your cart is empty</p>
        <p className=" font-normal text-gray-500 mt-0.5">
          Please add some something soon, carts have feelings too.
        </p>
      </div>

      {/**popular categories option */}

           <div>
      <div className="flex justify-center mt-14">

      <h3 className=" text-sm font-bold  ">Popular Categories</h3>
        </div>
        <div className=" text-gray-500 flex flex-wrap justify-center  gap-3 cursor-pointer max-w-[400px]  mx-auto text-[11px]">
      <span className="px-4 py-2 border rounded-md " >Men’s T-shirts</span>
      <span className="px-4 py-2 border rounded-md">Women’s T-Shirts</span>
      <span className="px-4 py-2 border rounded-md">Joggers</span>
      <span className="px-4 py-2 border rounded-md">Shorts</span>
      <span className="px-4 py-2 border rounded-md">Tops</span>
      <span className="px-4 py-2 border rounded-md">Full Sleeve T-Shirt</span>
      <span className="px-4 py-2 border rounded-md">Polos</span>
    </div>
    <div className="flex justify-center  ">
          <button className="text-[13px] mt-6 border-2 rounded-md border-teal-600 text-teal-600 font-bold p-1 ">CONTINUE SHOPPING</button>
    </div>
        </div>
        <BrandBanner/>
    </>
    
  );
};

export default Cart;
