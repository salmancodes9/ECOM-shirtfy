import React from "react";
import { useSearch } from "../../SearchContext";

const TeeSection = () => {
  const { setAllProducts, setIsPageSpecific } = useSearch();

  const products = [
    {
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1756476946_4773055.jpg?w=300&dpr=2",
      Title: "Midnight Drift Tee",
      Description: "shirt",
      price: "852",
      
    },
    {
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1756476946_4773055.jpg?w=300&dpr=2",
      Title: "Urban Pulse Classic",
      Description: "shirt",
      price: "852",
    },
    {
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1756476946_4773055.jpg?w=300&dpr=2",
      Title: "Lunar Shade Edition",
      Description: "shirt",
      price: "852",
    },
    {
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1756476946_4773055.jpg?w=300&dpr=2",
      Title: "Static Wave Tee",
      Description: "shirt",
      price: "852",
    },
    {
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1756476946_4773055.jpg?w=300&dpr=2",
      Title: "Frostbite Graphic",
      Description: "shirt",
      price: "852",
    },
    {
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1756476946_4773055.jpg?w=300&dpr=2",
      Title: "Emberline Streetwear",
      Description: "shirt",
      price: "852",
    },
    {
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1756476946_4773055.jpg?w=300&dpr=2",
      Title: "GhostLayer Oversize",
      Description: "shirt",
      price: "852",
    },
    {
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1756476946_4773055.jpg?w=300&dpr=2",
      Title: "Neon Mirage Tee",
      Description: "shirt",
      price: "852",
    },
    {
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1756476946_4773055.jpg?w=300&dpr=2",
      Title: "CloudCut Comfort Fit",
      Description: "shirt",
      price: "852",
    },
    {
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1756476946_4773055.jpg?w=300&dpr=2",
      Title: "DarkMode Essentials",
      Description: "shirt",
      price: "852",
    },
    {
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1756476946_4773055.jpg?w=300&dpr=2",
      Title: "PixelStorm Tee",
      Description: "shirt",
      price: "852",
    },
    {
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1756476946_4773055.jpg?w=300&dpr=2",
      Title: "Skyline Minimal",
      Description: "shirt",
      price: "852",
    },
    {
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1756476946_4773055.jpg?w=300&dpr=2",
      Title: "RetroChrome Classic",
      Description: "shirt",
      price: "852",
    },
    {
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1756476946_4773055.jpg?w=300&dpr=2",
      Title: "ThunderFade Tee",
      Description: "shirt",
      price: "852",
    },
  ];

  // Set TeeSection products in context for search
  React.useEffect(() => {
    setAllProducts(products);
    setIsPageSpecific(true);
    return () => setIsPageSpecific(false);
  }, [setAllProducts, setIsPageSpecific]);

  return (
    <>
      <div className="px-12 py-8">
        <h1 className="text-3xl font-bold mb-8">T-Shirts Collection</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-12 py-8">
        {products.map((item, index) => (
          <div
            key={index}
            id={`product-${item.Title}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.Title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{item.Title}</h3>
              <p className="text-gray-600">{item.Description}</p>
              <span className="text-xl font-bold text-blue-600">
                ₹{item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeeSection;
