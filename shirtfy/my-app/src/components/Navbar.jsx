import {
  Search,
  MapPin,
  User,
  Heart,
  ShoppingCart,
  Import,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import MiniCart from "./MiniCart";
import MiniProfile from "./MiniProfile";
import { useLocation } from "react-router-dom";
import { useSearch } from "../SearchContext";
import SearchDropdown from "./SearchDropdown";
import  {useTheme}  from "../ThemeContext";
import Switch from "./switch";
import ApiTest from "../pages/ApiTest";



import "./Navbar.css";

export default function Navbar({ products = [] }) {
  const location = useLocation();
  const { searchTerm, setSearchTerm, setAllProducts, allProducts } = useSearch();

  React.useEffect(() => {
    if (products.length > 0) {
      setAllProducts(products);
    }
  }, [products, setAllProducts]);

  const { theme, setTheme } = useTheme();
  
  return (  
    <>
      <nav className="navbar">
        <div className="START ">
          <a href="#" className="font-sans    text-[20px]">
            MEN
          </a>
          <a href="#" className="font-sans text-[20px]">
            WOMEN
          </a>
          <a href="#" className="font-sans text-[20px]">
            SNEAKERS
          </a>
        </div>

        <div className="CENTER ">
          <img
            src="https://tss-static-images.gumlet.io/non-member-logo2.gif"
            alt="Logo"
            className="logo"
          />
        </div>
 {/* Theme Toggle Button */}
            {/* <button 
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-2xl cursor-pointer hover:scale-110 transition"
            >
              
              {theme === "light" ? "🌙" : "☀️"}
            </button> */}

            <Switch
            checked={theme === "dark"}
            onCheckedChange={(value) => setTheme(value ? "dark" : "light")}
            />
        <div className="END">
          <div className="search-box relative">
            <Search size={15} />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="What are you looking for?"
              className="font-semibold text-black "
            />
            <SearchDropdown allProducts={allProducts} />
          </div>
          <div className="icon-bar">
            <MapPin className="icon" />
            
           

            {/**user button */}
            <div className="relative group">
              <Link to="/login">
                <User className="icon" />
                <span className="absolute left-0 right-0 -bottom-6 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
              <div className=" absolute right-0 mt-2 hidden group-hover:block" />
              <MiniProfile />
            </div>
            <div>
              <Link to="/ApiTest">
            <Heart className="icon" />
            </Link>
</div>
            {/**here is our work */}
            {location.pathname !== "/cart" && (
              <div className="relative group ">
                {/**cart button */}
                <Link to="/cart">
                  <ShoppingCart className="icon " />
                  <span className="absolute left-0 right-0 -bottom-6 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>

                {/**dropdown */}
                <div className=" absolute right-0 mt-2 hidden group-hover:block">
                  <MiniCart />
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

