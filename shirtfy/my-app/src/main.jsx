import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Login from "./pages/Login";
import App from "./App.jsx";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart.jsx";
import Navbar from "./components/Navbar.jsx";
import Otp from "./pages/OTP/Otp.jsx";
import TeeSection from "./pages/Tshirtcatlog/TeeSection.jsx";
// import { SearchContext } from "./context/SearchContext";
import { SearchProvider } from "./SearchContext.jsx";

function MainRoutes(){
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/Signup"]; 

  return(
    <>
         {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
         <Routes>
          <Route path="/" element={<App />} />
          <Route path="/TeeSection" element={<TeeSection />} />
          <Route path="/Login" element={< Login />} />
          
          <Route path="/Signup" element={< Signup />} />
          <Route path="/Cart" element={< Cart />} />
          <Route path="otp"  element={<Otp/>}/>

         </Routes>
</>
  )
}


createRoot(document.getElementById("root")).render(
  <StrictMode>
     <BrowserRouter>
       <SearchProvider>
        <MainRoutes/>
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>
);




