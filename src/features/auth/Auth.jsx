import logoImage from "../../assets/net-delivery-logo.png";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";
import facebook from "../../assets/facebook.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Auth = () => {
  const navigate = useNavigate();
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setinputValue(value);
  };

  const isNumericInput = !isNaN(inputValue) && inputValue !== "";

  const navigateToPasswordLogin = () => {
    if (isNumericInput) {
      navigate("/password-login");
    } else {
      navigate("/password-login");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="px-5 py-4 flex items-center justify-between">
        <img className="w-2/3 md:w-1/5" src={logoImage} alt="Logo" />
      </nav>

      {/* Auth Content */}
      <div className="flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 px-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-xl font-semibold mb-4">
            What's your phone number or email?
          </h1>

          <div>
            {isNumericInput ? (
              <div className="flex gap-x-4 mb-4">
                <select className="px-4 py-2 rounded border-none bg-gray">
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                </select>
                <input
                  className="px-4 py-2 rounded border-none bg-gray w-full"
                  type="text"
                  placeholder="Enter Phone Number or Email"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </div>
            ) : (
              <input
                className="px-6 py-2 rounded border-none bg-gray w-full"
                type="text"
                placeholder="Enter Phone Number"
                value={inputValue}
                onChange={handleInputChange}
              />
            )}
          </div>

          <button
            onClick={navigateToPasswordLogin}
            className={`w-full mt-3 bg-primary text-secondary py-2 rounded mb-4 ${
              inputValue === "" ? "disabled" : ""
            }`}
            disabled={inputValue === ""}
          >
            Continue
          </button>

          <div className="mb-4 flex items-center">
            <div className="flex-grow h-px bg-gray-300"></div>
            <p className="mx-2 text-gray-500">- Or -</p>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <div className="w-full">
            <button className="w-full bg-gray text-secondary py-2 rounded mb-2 px-4 flex items-center justify-center">
              <img className="w-4 h-4 mr-2" src={google} alt="Google" />
              Continue with Google
            </button>
            <button className="w-full bg-gray text-secondary py-2 rounded mb-2 px-4 flex  items-center justify-center">
              <img className="w-4 h-4 mr-2" src={apple} alt="Apple" />
              Continue with Apple
            </button>
            <button className="w-full bg-gray text-secondary py-2 rounded mb-4 px-4 flex items-center justify-center">
              <img className="w-4 h-4 mr-2" src={facebook} alt="Facebook" />
              Continue with Facebook
            </button>
          </div>

          <p className="text-left text-sm">
            By proceeding, you consent to get calls, Whatsapp or SMS messages,
            including by automated means, from NetDelivery and its affiliates to
            the number provided.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
