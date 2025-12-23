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

// import Card from "./Card.jsx";
import NewArr from "./NewArr.jsx";
import CatSec from "./CatSec.jsx";
import OfClb from "./OfClb.jsx";
import Footer from "./Footer.jsx";
import ApiTest from "../pages/ApiTest.jsx";
import {useSearch } from "../SearchContext.jsx";


const HomeSection = () => {
const {searchTerm, setAllProducts} = useSearch();

  const products = [
    {
      image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1758532645_1790939.jpg?w=480&dpr=1.3",
      Title: "Classic Black Crew Neck",
      Description: "Premium Cotton T-Shirt",
      price: "699",
      Discount:"200",
    },

    {
      image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1758531937_4171399.jpg?w=480&dpr=1.3",
      Title: "Oversized Comfort Fit",
      Description: "Casual Pullover",
      price: "899",
    },

    {
      image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1758364800_1199182.jpg?w=480&dpr=1.3",
      Title: "Premium Denim Jeans",
      Description: "Slim Fit Blue Denim",
      price: "1299",
    },

    {
      image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1758545195_5475645.jpg?w=480&dpr=1.3",
      Title: "Cotton Linen Blend Shirt",
      Description: "Soft White Casual Shirt",
      price: "999",
    },

    {
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=480&h=480&fit=crop",
      Title: "Urban Street Hoodie",
      Description: "Cozy Fleece Hoodie",
      price: "1199",
    },

   
  ];
  const Products = [
    {
      key: 1,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/tshirts_Akc5X8g.jpg?w=480&dpr=1.3",
      to: "/TeeSection",
    },
    {
      key: 2,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/pants_1_JIJcfiD.jpg?w=480&dpr=1.3",
      to: "/pants",
    },
    {
      key: 3,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/shirts_R3ynauB.jpg?w=480&dpr=1.3",
      to: "/shirts",
    },
    {
      key: 4,
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/sneaker_w6lymZg.jpg?w=480&dpr=1.3",
      to: "/sneakers",
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
      { name: "Srinagar", url: "#" },
      { name: "Jammu", url: "#" },
      { name: "Delhi", url: "#"}

      
      ],
    },
  ]
  
  // Combine all products for search
  const allSearchableProducts = [...products, ...Article];

  // Update products in context for search dropdown
  React.useEffect(() => {
    setAllProducts(allSearchableProducts);
    console.log(setAllProducts);
  }, [setAllProducts]);

  const filtered = allSearchableProducts.filter((item) =>
  item.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    
      <section className="flex  px-12 py-32 bg-gray-50 dark:bg-gray-900 ">
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
      <section className=" -mt-16 dark:bg-gray-900 ">
        <BrandBanner className=" relative bottom-12 " />
      </section>
      <div className="flex items-center justify-center p-6 bg-white dark:bg-gray-950">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">NEW ARRIVALS </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-12 py-8 bg-white dark:bg-gray-950">
        {Article.map((item, index) => (
          <div   key={index} id={`product-${item.Title}`}>
            <NewArr
              image={item.image}
              title={item.Title}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">CATEGORIES </h1>
      </div>

      <div className="card_container bg-gray-50 dark:bg-gray-900">
        {Products.map((item) => (
          <CatSec key={item.key} image={item.image} to={item.to} />
        ))}
      </div>

      <div className="flex items-center justify-center p-6 bg-white dark:bg-gray-950">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">OFFICIAL COLLABS</h1>
      </div>

      <div className="card_container flex flex-row space-x-6 justify-center bg-white dark:bg-gray-950">
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

      <div className="flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">FEATURED PRODUCTS </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-12 py-8 bg-gray-50 dark:bg-gray-900">
        {products.map((item, index) => (
          <div key={index} id={`product-${item.Title}`}>
            <NewArr
              image={item.image}
              title={item.Title}
              description={item.Description}
              price={item.price}
            />
          </div>
        ))}
      </div>

      {/* Footer */}
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
