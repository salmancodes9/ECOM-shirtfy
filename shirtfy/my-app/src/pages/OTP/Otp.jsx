import React, { useState } from "react";

const Otp = () => {
  const [isOtpSent, setIsOtp] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "",""]);

  const handleSendOrSubmit = (e) => {
    e.preventDefault()
    if (!isOtpSent) {
      if (phone.length === 10) setIsOtp(true);
      else alert("Enter valid number");
    } else {
      alert("OTP submitted: " + otp.join(""));
    }
  };

  const handleOtpChange = (e, i) => {
    const newOtp = [...otp];
    newOtp[i] = e.target.value.slice(-1);
    setOtp(newOtp);

    if(e.target.value && e.target.nextSibling){
      e.target.nextSibling.focus();
    }
};

const handleKeyDown = (e, i) => {
  if (e.key === "Backspace" && !otp[i] && e.target.previousSibling) {
    e.target.previousSibling.focus();
  }
  
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 border border-gray-300">
        <div className="flex justify-center mb-4">
          <img
            src="https://tss-static-images.gumlet.io/non-member-logo2.gif"
            className="h-12"
            alt="logo"
          />
        </div>

        <h2 className="text-2xl font-bold text-center mb-2">Welcome</h2>
        <p className="text-center text-gray-500 mb-6">
          Sign in to your account to continue shopping
        </p>

        <form className="space-y-4">
          <div>
            {!isOtpSent ? (
              <input
                type="tel"
                placeholder="Enter your number"
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 mt-3 border rounded-md focus:outline-none focus:ring-2 focus:border-[#58595b] placeholder:text-sm"
              />
            ) : (
              <div className="flex justify-center">
                {otp.map((val, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    value={val}
                    onChange={(e) => handleOtpChange(e, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}

                    style={styles.otpBox}
                  />
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handleSendOrSubmit}
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            {isOtpSent ? "Submit" : "Send OTP"}
          </button>
        </form>

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

const styles = {
  otpBox: {
    width: "2.5rem",
    height: "2.5rem",
    margin: "0.25rem",
    textAlign: "center",
    fontSize: "1.25rem",
    border: "1px solid #ccc",
    borderRadius: "0.25rem",
  },
};

export default Otp;
