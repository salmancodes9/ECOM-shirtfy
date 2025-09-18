import { Section } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import heroFashion from "../assets/hero-fashion.jpg";
import { BrandBanner } from "./BrandBanner";


const HomeSection = () => {
  return (
    <>
    <section className="flex  px-12 py-32 bg-gray-50 ">
      {/**left page */}
      <div className="max-w-lg py-16">
        {/**doubt */}
        <h1 className="text-5xl font-bold leading-tight">
          EXPRESS YOUR <span className="text-red-600 block text-[60px]"> SOUl</span>
        </h1>
        
        <p className="mt-4 text-gray-500 text-lg font-bold text-[16px]">
          Discover the latest in Indian street fashion. Premium quality clothing
          that speaks to your personality and style.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="bg-red-600 text-white px-6 py-2 rounded">
            Shop Men
          </button>
          <button className="border border-red-600 text-red-600 px-6 py-2 rounded">
            Shop Women
          </button>
          
        </div>
        
      </div>
      
      <div className="relative t-4 mt-18  ml-28 p-4 ">
        <img
          src={heroFashion}
          alt="Fashion Kids"
          className="rounded-xl shadow-lg w-[650px] h-[450px] object-cover ml-24 mt-3 mr-4 mb-3"
        />
        <span className="absolute top-0.5 right-0.5 ml-3 bg-red-600 text-white px-4 py-3 rounded-full text-md">
          New Collection
        </span>
        <span className="absolute  h-16  bottom-0.5 left-14 bg-white px-4 py-2 rounded shadow text-md">
          Starting from <span className="text-red-600 font-bold text-[25px] block ">₹399</span>
        </span> 
        
      </div>
      
    </section> 
    <section className=" -mt-16">
      <BrandBanner className=" relative bottom-12"/>
       </section>
      <div>
        <div className="flex grid grid-cols-4 gap-6 p-6" >
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Web_JmH9jq1.jpg?w=480&dpr=1.3" alt="" className="border border-black p-4" />

          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Web_JmH9jq1.jpg?w=480&dpr=1.3" alt="" className="border border-black p-4"  />
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Web_JmH9jq1.jpg?w=480&dpr=1.3" alt="" className="border border-black p-4"  />
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Web_JmH9jq1.jpg?w=480&dpr=1.3" alt="" className="border border-black p-4"  />



        </div>
      </div>
   
    </>
 
  );
   


};

export default HomeSection;
