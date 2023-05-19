import React from "react";
import "../src/App.css";
import logoImage from "./assets/net-delivery-logo.png";
import appleStore from "./assets/apple-store.png";
import googlePlay from "./assets/google-play.png";
import appGallery from "./assets/appgallery.png";
import instagramIcon from "./assets/instagram-icon.png";
import twitterIcon from "./assets/twitter-icon.png";
import facebookIcon from "./assets/facebook-icon.png";
import RestaurantPartner from "./assets/restaurant-partner.png";
import CourierPartner from "./assets/courier-partner.png";
import SignInIcon from "./assets/sign-in-icon.png";
import SignUpIcon from "./assets/sign-up-icon.png";
import MenuIcon from "./assets/menu-icon.png";

function App() {
  return (
    <div>
      <div className="bg-[url('./assets/home-page-bg.png')] bg-cover bg-center h-screen flex flex-col">
        <div className="flex justify-between px-16 py-10 items-center">
          <div className="flex items-center">
            <img src={logoImage} alt="Logo" className="w-56 mr-2" />
          </div>
          <div className="flex space-x-4">
            <button className="bg-primary text-secondary px-4 py-3 rounded-full flex items-center text-sm font-bold">
              <img
                className="mr-2 h-auto md:h-5"
                src={SignInIcon}
                alt="Sign In"
              />
              <span className="hidden md:inline-block">Sign In</span>
            </button>
            <button className="bg-white text-secondary px-4 py-3 rounded-full flex items-center text-sm font-bold">
              <img
                className="mr-2 h-auto md:h-5"
                src={SignUpIcon}
                alt="Sign Up"
              />
              <span className="hidden md:inline-block">Sign Up</span>
            </button>
            <button className="bg-white text-secondary px-4 py-3 rounded-full flex items-center text-sm font-bold">
              <img className="mr-2 h-auto md:h-5" src={MenuIcon} alt="Menu" />
              <span className="hidden md:inline-block">Menu</span>
            </button>
          </div>
        </div>
        <div className="sm:w-full md:w-6/12 flex flex-col items-start justify-center px-16 flex-grow">
          <div className="text-primary text-left mb-4">
            <h2 className="text-2xl font-bold">
              Order from the comfort of <br />
              <span className="block">your fingertips</span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-x-4 items-start w-full">
            <input
              type="text"
              placeholder="Enter your address"
              className="px-4 py-2 w-full  lg:w-2/3 mb-6 lg:mb-0 border-none"
            />
            <button className="bg-primary text-secondary px-4 py-2 w-full lg:w-auto">
              Order Now
            </button>
          </div>
          <div className="mt-4 text-secondary font-bold text-xl">
            <span className="text-primary">Sign in</span> for your recent
            addresses
          </div>
        </div>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 gap-8 py-44 justify-items-center px-3 md:px-16">
        <div className="w-11/12 max-w-xl cardHeight p-6 relative rounded-2xl overflow-hidden flex flex-col justify-end">
          <div className="absolute inset-0">
            <img
              src={RestaurantPartner}
              className="w-full h-full object-cover"
              alt="Background"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="relative z-10">
            <h5 className="mb-2 text-3xl font-medium tracking-tight text-white text-left">
              Become our
              <span className="block">Restaurant partner</span>
            </h5>
            <p className="mb-3 text-white text-left">
              Join our delivery network
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 float-left text-sm font-medium text-secondary bg-white  rounded-full"
            >
              Get started
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="w-11/12 max-w-xl cardHeight p-6 relative rounded-2xl overflow-hidden flex flex-col justify-end">
          <div className="absolute inset-0">
            <img
              src={CourierPartner}
              className="w-full h-full object-cover"
              alt="Background"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="relative z-10">
            <h5 className="mb-2 text-3xl font-medium tracking-tight text-white text-left">
              Become our
              <span className="block">Courier partner</span>
            </h5>
            <p className="mb-3 text-white text-left">
              Join our delivery network
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 float-left text-sm font-medium text-secondary bg-white  rounded-full"
            >
              Get started
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-8 px-16  px-3 md:px-16">
        <div>
          <h5 className="text-2xl  font-black mb-0">
            Cities and Suburbs we do
          </h5>
          <h5 className="text-2xl  font-black">deliver to</h5>
          <div className="grid grid-cols-1 gap-y-2">
            <div className="py-5 mt-4 font-black text-2xl">Johannesburg</div>
            <div className="py-3 text-base xl:text-xl">Midrand</div>
            <div className="py-3  text-base xl:text-xl">Tembisa</div>
          </div>
        </div>
      </div>
      <footer className="px-16 mt-24 footer-height bg-gray flex flex-col">
        <div>
          <img className="w-56 pt-16" src={logoImage} alt="Logo Icon" />
        </div>

        <div className="flex flex-col justify-center flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-10">
            <div className="grid grid-cols-1 gap-y-2 inline-grid justify-evenly justify-items-start">
              <img className="w-1/2" src={appleStore} alt="applestore" />
              <img className="w-1/2" src={googlePlay} alt="googleplay" />
              <img className="w-1/2" src={appGallery} alt="appgallery" />
            </div>
            <div className="flex flex-col">
              <p className="mb-4 footer-content">
                Signup as a restaurant partner
              </p>
              <p className="mb-4 footer-content">Signup as a courier partner</p>
              <p className="mb-4 footer-content">Contact Us</p>
            </div>
            <div className="flex flex-col">
              <p className="mb-4 footer-content">Privacy Policy</p>
              <p className="mb-4 footer-content">Help</p>
            </div>
            <div className="flex justify-start md:justify-around">
              <img
                className="w-12 h-12 mr-3 md:mr-0"
                src={instagramIcon}
                alt="Instagram"
              />
              <img
                className="w-12 h-12 mr-3 md:mr-0"
                src={twitterIcon}
                alt="Twitter"
              />
              <img
                className="w-12 h-12 mr-3 md:mr-0"
                src={facebookIcon}
                alt="Facebook"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
