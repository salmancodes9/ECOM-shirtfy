import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; 

export default function PasswordInput({ placeholder, userPassword,name,onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full px-3 py-2 mt-3 border rounded-md focus:outline-none focus:ring-2 focus:border[#58595b] placeholder:text-sm"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none pt-2"
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
}
