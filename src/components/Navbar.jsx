import logoImage from "../assets/net-delivery-logo.png";
import SignInIcon from "../assets/sign-in-icon.png";
import SignUpIcon from "../assets/sign-up-icon.png";
import MenuIcon from "../assets/menu-icon.png";
export const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between px-16 py-10 items-center">
        <div className="flex items-center">
          <img src={logoImage} alt="Logo" className="w-56 mr-2" />
        </div>
        <div className="flex space-x-4">
          <button className="bg-white text-secondary px-4 py-3 rounded-full flex items-center text-sm font-bold">
            <img
              className="mr-2 h-auto md:h-4 xl:h-5"
              src={SignInIcon}
              alt="Sign In"
            />
            <span className="hidden md:inline-block text-secondary">
              Sign In
            </span>
          </button>
          <button className="bg-primary text-secondary px-4 py-3 rounded-full flex items-center text-sm font-bold">
            <img
              className="mr-2 h-auto md:h-4 xl:h-5"
              src={SignUpIcon}
              alt="Sign Up"
            />
            <span className="hidden md:inline-block text-white">Sign Up</span>
          </button>
          <button className="bg-primary text-secondary px-4 py-3 rounded-full flex items-center text-sm font-bold">
            <img
              className="mr-2 h-auto md:h-4 xl:h-5"
              src={MenuIcon}
              alt="Menu"
            />
            <span className="hidden md:inline-block text-white">Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;