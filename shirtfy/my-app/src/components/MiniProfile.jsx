import { Link } from "react-router-dom";

// import { LogIn } from "../pages/Login"

export default function MiniProfile({}) {
  return (
    // <div className=" relative">
      
      <div
        className="absolute right-2   mt-7 w-64 rounded-xl shadow-lg bg-white border border-gray-00 
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 cursor-auto"
      >
        <div className="pt-4 pl-4 text-gray-600 font-bold" >Welcome</div>
        <p className="text-sm pb-4 pl-4 font-poppins text-gray-500 "> To access account and orders</p>
        <Link to="/Login">
          <button className="  border border-transparent hover:border-red-500 px-4 py-2  rounded transition-colors duration-300 ml-3  ">LOGIN/SIGNUP</button>
        </Link>

      <div className="flex flex-col text-sm p-4 gap-3 text-gray-700">
        <span className=" font-normal text-gray-600 hover:font-bold hover:text-gray-900 transition-colors duration-300 cursor-pointer">Order </span>
        <span className="font-normal text-gray-600  hover:font-bold hover:text-gray-900 transition-colors duration-300 cursor-pointer"> Whishlist</span>
        <span className="font-normal text-gray-600  hover:font-bold hover:text-gray-900 transition-colors duration-300 cursor-pointer">Gift Cards</span>
        <span className="font-normal text-gray-600  hover:font-bold hover:text-gray-900 transition-colors duration-300 cursor-pointer">Contact Us</span>
      </div>


      </div>




    // </div>
  );
}
