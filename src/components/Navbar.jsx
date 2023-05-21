import logoImage from "../assets/net-delivery-logo.png";
import locationIcon from "../assets/location-pin.png";
import CartIcon from "../assets/shopping-cart.png";
import SignInIcon from "../assets/sign-in-icon.png";
import SignUpIcon from "../assets/sign-up-icon.png";
import MenuIcon from "../assets/menu-icon.png";
import { useLocation } from "react-router-dom";
export const Navbar = () => {
  const location = useLocation();
  const isPickupRoute = location.pathname === "/pickup";
  const isOrdersRoute = location.pathname === "/orders";
const showSearch = location.pathname === "/favourites" || location.pathname === "/orders" || location.pathname === "/pickup";

const showLocation = location.pathname === "/favourites" || location.pathname === "/orders";


  return (
    <div className="flex justify-between px-16 py-10 items-center">
      <div className="flex items-center">
        <img src={logoImage} alt="Logo" className="w-56 mr-2" />
      </div>

      {showLocation && (
        <div>
          <form>
            <div className="relative mx-4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img
                  src={locationIcon}
                  alt="Location Icon"
                  className="w-4 h-4"
                />
              </div>

              <input
                type="text"
                id="default-location"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border-none bg-gray border-gray-300 rounded-full focus:border-none"
                defaultValue="539, Bluegum street"
                required
              />
            </div>
          </form>
        </div>
      )}

      {showSearch && (
          <div className="flex-grow">
            <form>
              <div className="relative mx-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>

                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border-none bg-gray border-gray-300 rounded-full focus:border-none"
                  placeholder=" Food, Restaurants, Drinks "
                  required
                ></input>
              </div>
            </form>
          </div>
        )}
      <div className="flex space-x-4 items-center">
        {isPickupRoute && (
          <div className="flex items-center">
            <img src={CartIcon} alt="Add to Cart" className="w-8 mr-2" />
          </div>
        )}

        {isPickupRoute && (
          <button className="bg-primary text-white px-4 py-3 rounded-full flex items-center text-sm font-bold">
            <img
              className="mr-2 h-auto md:h-4 xl:h-5 navbar-icon-color"
              src={SignInIcon}
              alt="Sign In"
            />
            <span className="hidden md:inline-block">Sign In</span>
          </button>
        )}
        {isPickupRoute && (
          <button className="bg-primary text-white px-4 py-3 rounded-full flex items-center text-sm font-bold">
            <img
              className="mr-2 h-auto md:h-4 xl:h-5 navbar-icon-color"
              src={SignUpIcon}
              alt="Sign Up"
            />
            <span className="hidden md:inline-block">Sign Up</span>
          </button>
        )}

        {!showLocation && (
          <button className="bg-primary text-white px-4 py-3 rounded-full flex items-center text-sm font-bold">
            <img
              className="mr-2 h-auto md:h-4 xl:h-5 navbar-icon-color"
              src={MenuIcon}
              alt="Menu"
            />
            <span className="hidden md:inline-block">Menu</span>
          </button>
        )}

        {showLocation && (
          <button className="bg-primary text-white px-4 py-3 rounded-full flex items-center text-sm font-bold">
            <img
              className="mr-2 h-4 xl:h-5 navbar-icon-color"
              src={CartIcon}
              alt="Cart"
            />
            <span className="hidden md:inline-block">
              <span>0 </span>
              <span>Carts</span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
