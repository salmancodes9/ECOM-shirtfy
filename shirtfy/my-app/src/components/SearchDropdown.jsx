import React from "react";
import { useSearch } from "../SearchContext";

const SearchDropdown = ({ allProducts = [] }) => {
  const { searchTerm, setSearchTerm } = useSearch();

  const filteredResults = allProducts.filter((item) =>
    item.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleResultClick = (product) => {
    // Scroll to the product or navigate
    const element = document.getElementById(`product-${product.Title}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setSearchTerm(""); // Clear search after selection
  };

  if (!searchTerm) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
      {filteredResults.length > 0 ? (
        <div className="p-2">
          {filteredResults.map((item, index) => (
            <div
              key={index}
              onClick={() => handleResultClick(item)}
              className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer rounded-md transition"
            >
              <img
                src={item.image}
                alt={item.Title}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="flex-1">
                <p className="font-semibold text-sm">{item.Title}</p>
                <p className="text-xs text-gray-600">{item.Description}</p>
                <p className="text-red-600 font-bold text-sm">₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-4 text-center text-gray-600">
          No products found for "{searchTerm}"
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
