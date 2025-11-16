import { createContext, useContext, useState } from "react"; 
//createContext=makes a global storage 
//useContext → lets you access that storage
//useState → stores values inside the context


const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [isPageSpecific, setIsPageSpecific] = useState(false);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, allProducts, setAllProducts, isPageSpecific, setIsPageSpecific }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  console.log(createContext)
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

