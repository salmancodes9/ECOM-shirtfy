import {
  Search,
  MapPin,
  User,
  Heart,
  ShoppingCart,
  Import,
} from "lucide-react";
import { Link } from "react-router-dom";
import MiniCart from "./MiniCart";
import MiniProfile from "./MiniProfile";

import { useLocation } from "react-router-dom"


import "./Navbar.css";
<link
  rel="stylesheeet"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
/>;



export default function Navbar() {
  const location = useLocation()

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

        <div className="CENTER">
          <img
            src="https://tss-static-images.gumlet.io/non-member-logo2.gif"
            alt="Logo"
            className="logo"
          />
        </div>

        <div className="END ">
          <div className="search-box  ">
            <Search size={15} />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="font-semibold text-black "
            />
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
              <MiniProfile/>
            </div>

            <Heart className="icon" />

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
