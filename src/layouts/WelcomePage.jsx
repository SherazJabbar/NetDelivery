import "../styles/App.css";
import React, { useState } from "react";
import logoImage from "../assets/net-delivery-logo.png";
import appleStore from "../assets/apple-store.png";
import googlePlay from "../assets/google-play.png";
import appGallery from "../assets/appgallery.png";
import instagramIcon from "../assets/instagram-icon.png";
import twitterIcon from "../assets/twitter-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import RestaurantPartner from "../assets/restaurant-partner.png";
import CourierPartner from "../assets/courier-partner.png";
import SignInIcon from "../assets/sign-in-icon.png";
import SignUpIcon from "../assets/sign-up-icon.png";
import MenuIcon from "../assets/menu-icon.png";

export const WelcomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuClick = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Stop background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Enable background scroll
  };

  return (
    <div>
      <div>
        <div className="bg-[url('./assets/home-page-bg.png')] bg-cover bg-initial md:bg-center h-screen flex flex-col">
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
                <span className="hidden md:inline-block text-white">
                  Sign Up
                </span>
              </button>
              <button
                className="bg-primary text-secondary px-4 py-3 rounded-full flex items-center text-sm font-bold"
                onClick={handleMenuClick}
              >
                <img
                  className="mr-2 h-auto md:h-4 xl:h-5"
                  src={MenuIcon}
                  alt="Menu"
                />
                <span className="hidden md:inline-block text-white">Menu</span>
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
              <button className="bg-primary text-secondary font-medium px-4 py-2 w-full lg:w-auto">
                Order Now
              </button>
            </div>
            <div className="mt-4 text-secondary font-bold text-xl">
              <span className="text-primary">Sign in</span> for your recent
              addresses
            </div>
          </div>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 gap-8 py-24 xl:py-44 justify-items-center px-3 md:px-16">
          <div className="w-11/12 max-w-xl cardHeight p-6 relative rounded-2xl overflow-hidden flex flex-col justify-end">
            <div className="absolute inset-0">
              <img
                src={RestaurantPartner}
                className="w-full h-full object-cover"
                alt="Background"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" />
            </div>
            <div className="relative z-10 mb-5">
              <h5 className="mb-2 text-2xl xl:text-3xl font-medium tracking-tight text-white text-left">
                Become our
                <span className="block">Restaurant partner</span>
              </h5>
              <p className="mb-3 text-white text-left text-md xl:text-xl font-medium w-1/2">
                You do the cooking and we will deliver
              </p>
              <a
                href="#"
                className="inline-flex items-center px-5 py-4 float-left text-sm font-medium text-secondary bg-white  rounded-full"
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
            <div className="relative z-10 mb-5">
              <h5 className="mb-2  text-2xl xl:text-3xl font-medium tracking-tight text-white text-left">
                Become our
                <span className="block">Courier partner</span>
              </h5>
              <p className="mb-3 text-white text-left text-md xl:text-xl font-medium w-1/2">
                You do the cooking and we will deliver
              </p>
              <a
                href="#"
                className="inline-flex items-center px-5 py-4 float-left text-sm font-medium text-secondary bg-white  rounded-full"
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
            <h5 className="text-4xl xl:text-5xl font-extrabold mb-0 leading-tight">
              Cities and Suburbs we do
            </h5>
            <h5 className="text-4xl xl:text-5xl font-extrabold leading-tight">
              deliver to
            </h5>
            <div className="grid grid-cols-1 gap-y-2">
              <div className="py-5 mt-4 font-bold text-3xl">Johannesburg</div>
              <div className="py-3 text-base xl:text-xl">Midrand</div>
              <div className="py-3  text-base xl:text-xl">Tembisa</div>
            </div>
          </div>
        </div>
        <footer className="px-16 mt-24 footer-height bg-gray flex flex-col">
          <div>
            <img
              className="w-44 xl:w-56 pt-5 xl:pt-20 pb-5 xl:pb-0"
              src={logoImage}
              alt="Logo Icon"
            />
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
                <p className="mb-4 footer-content">
                  Signup as a courier partner
                </p>
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

          <div className="py-10">
            <p className="text-md xl:text-xl font-medium">
              {" "}
              © 2022 NetDelivery (Pty) Ltd{" "}
            </p>
          </div>
        </footer>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-end w-full">
          <div className="bg-gray p-10 w-full sm:w-1/2 lg:w-1/4 h-full flex flex-col justify-between">
            {/* Modal content */}
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center justify-center">
                <button className="bg-darkgray text-secondary font-medium px-4 py-3.5 rounded w-full flex items-center">
                  <img
                    className="mr-2 h-auto md:h-4 xl:h-5"
                    src={SignInIcon}
                    alt="Sign In"
                  />
                  <span className="inline-block w-full">Sign In</span>
                </button>
              </div>

              <div className="flex items-center justify-center">
                <button className="bg-primary text-white font-medium px-4 py-3.5 rounded w-full flex items-center">
                  <img
                    className="mr-2 h-auto md:h-4 xl:h-5"
                    src={SignUpIcon}
                    alt="Sign Up"
                  />
                  <span className="inline-block w-full">Sign Up</span>
                </button>
              </div>

              <div className="text-md font-medium py-8">
                <p className="py-1">Sign up as a Restaurant partner</p>
                <p className="py-1">Sign up as a Courier partner</p>
              </div>
            </div>

            <div className="text-lg font-semibold mb-4">
              Download our app below
              <div>
                <div className="flex py-2">
                  <img className="w-1/2" src={appleStore} alt="applestore" />
                  <img className="w-1/2" src={googlePlay} alt="googleplay" />
                </div>
                <div className="flex justify-center">
                  <img className="w-1/2" src={appGallery} alt="appgallery" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center justify-between"></div>
              <div className="flex items-center"></div>
            </div>
            <button
              className="absolute top-0 right-0 m-4 text-primary"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
