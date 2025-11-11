import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import Otp from "./OTP/Otp";


function ButtonA({width, padding, border, color = "yellow", title, isDesaibled = false }){
  return(
    <>
    <button disabled={isDesaibled} style={{width:width, padding:padding, borderRadius:border, backgroundColor:color}}>

      {title}
    </button>
    </>
  )
}

const Login = () => {
  return (
  
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
    

      {/* <ButtonA width={"100px"} padding={"50px"} border={"99px"} color={"blue"} title={"I am a kdjflsjf"} isDesaibled={true}/> */}
     
      {/*full page div here*/}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 border border-gray-300">
        
        {/*The center of the page where the login section is*/}
        <Link
          to="/"
          className="inline-flex items-center text-muted-foreground hover:text-brand transition-base mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back To Home
          {/* <ButtonA title={"i am a new button"} color={"red"}/> */}
        </Link>
        <div className="flex justify-center mb-4">
          {" "}
          {/* Logo */}
          <img
          src="https://tss-static-images.gumlet.io/non-member-logo2.gif"
            className="h-12"
          />
        </div>
        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-6">
          Sign in to your account to continue shopping
        </p>
        {/* Form input here */}
        <form className="space-y-4">
          <div>
            <p className="block text-sm font-medium mb-1">Email Address</p>
            <input
              type="email"
              placeholder="Enter your email"
            className="w-full px-3 py-2 mt-3 border rounded-md focus:outline-none focus:ring-2 focus:border[#58595b] placeholder:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <PasswordInput placeholder="Enter your Password" name="password" />
            

            <div className="text-right mt-1">
              <a href="#" className="text-sm text-red-500 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Sign In
          </button>
<Link  to="/Otp"
className="bg-black"
>
          <button
            type="button"
            className="w-full border border-red-400 text-red-500 py-2 rounded-md hover:bg-red-50 transition"
          >
            Login with OTP
          </button>
</Link>

        </form>
        {/* Signup link here*/}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don&apos;t have an account?{" "}
          <Link to="/Signup" className="text-red-500 font-medium hover:underline">
            Sign up
          </Link>
        </p>
        {/* Footer text */}
        <div className="mt-6 text-center text-xs text-gray-400">
          <p>Trusted by 6+ Million Happy Customers</p>
          <div className="flex justify-center gap-4 mt-1">
            <span>🔒 Secure Login</span>
            <span>⭐ Premium Quality</span>
            <span>⚡ Fast Delivery</span>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Login;
