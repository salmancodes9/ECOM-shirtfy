import { Key, Section } from "lucide-react";
import React from "react";
// import { Link } from "react-router-dom";
import heroFashion from "../assets/hero-fashion.jpg";
import { BrandBanner } from "./BrandBanner.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Card from "./Card.jsx";
import NewArr from "./NewArr.jsx";
import CatSec from "./CatSec.jsx";
import OfClb from "./OfClb.jsx";
import Footer from "./Footer.jsx";

const HomeSection = () => {
  const products = [
    {
      image: heroFashion,
      Title: "pro 1",
      Description: "shirt",
      price: "852",
    },

    {
      image: heroFashion,
      Title: "pro 2",
      Description: "pant",
      price: "7412",
    },

    {
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1758532645_1790939.jpg?w=480&dpr=1.3",
      Title: "pro 2",
      Description: "pant",
      price: "7412",
    },

    {
      image: heroFashion,
      Title: "pro 2",
      Description: "pant",
      price: "7412",
    },

    {
      image: heroFashion,
      Title: "pro 2",
      Description: "pant",
      price: "7412",
    },

    {
      image: heroFashion,
      Title: "pro 2",
      Description: "pant",
      price: "7412",
    },
  ];
  const Products = [
    {
      key: 1,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/tshirts_Akc5X8g.jpg?w=480&dpr=1.3",
    },
    {
      key: 2,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/pants_1_JIJcfiD.jpg?w=480&dpr=1.3",
    },
    {
      key: 3,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/shirts_R3ynauB.jpg?w=480&dpr=1.3",
    },
    {
      key: 4,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/sneaker_w6lymZg.jpg?w=480&dpr=1.3",
    },

    {
      key: 5,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/sneaker_w6lymZg.jpg?w=480&dpr=1.3",
    },
    {
      key: 6,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/sneaker_w6lymZg.jpg?w=480&dpr=1.3",
    },
    {
      key: 7,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/sneaker_w6lymZg.jpg?w=480&dpr=1.3",
    },
    {
      key: 8,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/sneaker_w6lymZg.jpg?w=480&dpr=1.3",
    },
  ];
  const Collabprod = [
    {
      key: 1,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/harry_potter_puwTjZZ.jpg?w=480&dpr=1.3",
    },
    {
      key: 2,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Venom2.jpg?w=480&dpr=1.3",
    },
    {
      key: 3,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/dc-1.jpg?w=480&dpr=1.3",
    },
    {
      key: 4,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/naruto__copy.jpg?w=480&dpr=1.3",
    },
    {
      key: 5,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/naruto__copy.jpg?w=480&dpr=1.3",
    },
    {
      key: 6,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/naruto__copy.jpg?w=480&dpr=1.3",
    },
  ];

  const Article = [
    {
      Key: 1,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1758532645_1790939.jpg?w=480&dpr=1.3",
      Title: "High-Neck Sweater: Essence",
      description: "Oversized Pullover",
      price: "1999",
    },
    {
      key: 2,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1758531937_4171399.jpg?w=480&dpr=1.3",
      Title: "pro 2",
      description: "Oversized Pullover",
      price: "2199",
    },
    {
      key: 3,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1758364800_1199182.jpg?w=480&dpr=1.3",
      Title: "Hydros: Iron Man",
      description: "Men clogs",
      price: "1199",
    },
    {
      key: 4,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1758545195_5475645.jpg?w=480&dpr=1.3",
      Title: "Cotton Linen: Soft Black",
      description: "Coton Linen Shirts",
      price: "999",
    },
  ];
  const footerSections =[
    {
      key:1,
      title: "Need Help",
      links: [
      { name: "Contact Us", url: "#" },
      { name: "Track Order", url: "#" },
      { name: "Return & Refund", url: "#"},
      { name: "FAQs", url: "#"},

      
      ],
      
    },

     {
      key:1,
      title: "Company",
      links: [
      { name: "About Us", url: "#" },
      { name: "Careers", url: "#" },
      { name: "Gifts", url: "#"}

      
      ],
    },
     {
      key:1,
      title: "More Info",
      links: [
      { name: "T&C", url: "#" },
      { name: "Privacy&Policy", url: "#" },
      { name: "", url: "#"}

      
      ],
    },
     {
      key:1,
      title: "Store Near Me",
      links: [
      { name: "fgh", url: "#" },
      { name: "fgh", url: "#" },
      { name: "d", url: "#"}

      
      ],
    },
  ]

  return (
    <>
      <section className="flex  px-12 py-32 bg-gray-50 ">
        {/**left page */}
        <div className="max-w-lg py-16">
          {/**doubt */}
          <h1 className="text-5xl font-bold leading-tight">
            EXPRESS YOUR{" "}
            <span className="text-red-600 block text-[60px]"> SOUl</span>
          </h1>

          <p className="mt-4 text-gray-500 text-lg font-bold text-[16px]">
            Discover the latest in Indian street fashion. Premium quality
            clothing that speaks to your personality and style.
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
            Starting from{" "}
            <span className="text-red-600 font-bold text-[25px] block ">
              ₹399
            </span>
          </span>
        </div>
      </section>
      <section className=" -mt-16">
        <BrandBanner className=" relative bottom-12 " />
      </section>
      <div className="flex items-center justify-center p-6  ">
        <h1 className=" text-2xl font-bold ">NEW ARRIVALS </h1>
      </div>

      <div className="card_container">
        {Article.map((item) => (
          <NewArr
            image={item.image}
            title={item.Title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
      <div className="flex items-center justify-center p-6  ">
        <h1 className=" text-2xl font-bold ">CATEGORIES </h1>
      </div>

      <div className="card_container">
        {Products.map((item) => (
          <CatSec image={item.image} />
        ))}
      </div>

      <div className="flex items-center justify-center p-6  ">
        <h1 className=" text-2xl font-bold ">OFFICIAL COLLABS</h1>
      </div>

      <div className="card_container flex flex-row space-x-6 justify-center">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
           slidesPerGroup={3}

          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          {Collabprod.map((item) => (
            <SwiperSlide key={item.key}>
              <OfClb image={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      <div className="card_container pl-8 gap-6 pb-16 pt-6">
        {products.map((item) => (
          <Card image={item.image} Title={item.Title} price={item.price} />
        ))}
      </div>

<footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {footerSections.map((section) => (
          <Footer title={section.title} links={section.links}/>
        ))}
      </div>
      </footer>
    </>
  );
};

export default HomeSection;
