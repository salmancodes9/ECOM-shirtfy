import { Link } from "react-router-dom";
import { ArrowLeft, Type } from "lucide-react";
import PasswordInput from "../components/PasswordInput";

import React from "react";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      {/*full page div here*/}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 border border-gray-300">
        {/*The center of the page where the login section is*/}
        <Link
          to="/Login"
          className="inline-flex items-center text-muted-foreground hover:text-brand transition-base mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back To Login
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
          Register with The Souled Store
        </p>
        {/* Form input here */}
        <form className="space-y-4">
          <div className="flex gap-2 border-black">
            {/* <p className="block text-sm font-medium mb-1">Email Address</p> */}
            <input
              type="text"
              placeholder="First Name *"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border[#58595b] placeholder:text-sm"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border[#58595b] placeholder:text-sm"
            />
          </div>

          <div>
            {/* <label className="block text-sm font-medium mb-1">Password</label> */}
            <input
              type="email"
              placeholder="Enter your email *"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border[#58595b] placeholder:text-sm "
            />

              {/* password section */}
               <PasswordInput placeholder="Choose New Password *" name="password" />

               <PasswordInput placeholder="Confirm Password *" name="password" />
                
           
            
            <input
              type="date"
              placeholder="date *"
              className="appearance-none w-full px-3 py-1 mt-3 border rounded-md focus:outline-none focus:ring-2 focus:border[#58595b] placeholder:text-sm "
            />
            <p className="text-sm text-gray-500 mb-1 px-3 pb-3 pt-1">
                    (Avail 10% Birthday discount as a member)
                             </p>

            <div className="flex items-center w-full mt-2 border rounded-md focus-within:ring-2 focus-within:ring-[#58595b]">
              <span className="px-3 text-gray-600 font-medium">+91</span>
              <input
                type="tel"
                placeholder="Mobile Number(For order status updates)"
                className="w-full px-3 py-2 outline-none rounded-r-md text-sm "
              />
            </div>

            {/* <div className="text-right mt-1">
              <a href="#" className="text-sm text-red-500 hover:underline">
                Forgot Password?
              </a>
            </div> */}
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Register
          </button>

          <button
            type="button"
            className="w-full border border-red-400 text-red-500 py-2 rounded-md hover:bg-red-50 transition"
          >
            Continue with Google
          </button>
        </form>
        {/* Signup link here*/}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?
          <Link
            to="/Login"
            className="text-red-500 font-medium hover:underline"
          >
            Login
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

export default Signup;
