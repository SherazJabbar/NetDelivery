import logoImage from "../../../assets/net-delivery-logo.png";
import RightArrow from "../../../assets/right-arrow.svg";
import LeftArrow from "../../../assets/left-arrow.svg";
import { useNavigate } from "react-router-dom";

const PasswordLogin = () => {
  const navigate = useNavigate();
  const navigateToSignIn = () => {
    navigate("/signup");
  };
  return (
    <div>
      {/* Navbar */}
      <nav className="px-5 py-4 flex items-center justify-between">
        <img className="w-2/3 md:w-1/5" src={logoImage} alt="Logo" />
      </nav>

      {/* Auth Content */}
      <div className="flex items-center justify-center bg-gray-100">
        <div className="flex flex-col imtems-inheirt md:items-center justify-center w-full md:w-1/2 lg:w-1/4 xl:w-1/5 px-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-left">
            <h1 className="text-xl font-semibold mb-4">
              Welcome Back , <span>Tatelo !</span>
            </h1>
            <h1 className="emailId text-md underline font-bold text">
              Not You?
            </h1>
          </div>

          <form className="w-full">
            <div className="grid grid-cols-1">
              <input
                className="px-4 py-2 rounded border-none bg-gray my-4 w-full"
                placeholder="Enter your password"
                type="text"
              />
            </div>
          </form>

          <div className="w-full flex flex-col gap-3">
            <button className="w-max text-xs font-semibold bg-primary text-secondary float-left py-2 px-4 rounded-full ">
              More Options
            </button>

            <button className="w-max text-xs font-semibold bg-primary text-secondary float-left py-2 px-4 rounded-full">
              I forgot my password
            </button>
          </div>
          <div className="my-4 w-full flex justify-between">
            <button
              className="w-max bg-gray text-secondary text-xs font-semibold py-2 px-4 rounded-full my-4 flex items-center"
              onClick={navigateToSignIn}
            >
              <img src={LeftArrow} alt="Left Arrow" className="h-4 w-4 mr-2" />
            </button>

            <button className="w-max bg-primary text-secondary text-xs font-semibold py-2 px-4 rounded-full my-4 flex items-center opacity-50">
              <span className="mr-2">Next</span>
              <img src={RightArrow} alt="Right Arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordLogin;
