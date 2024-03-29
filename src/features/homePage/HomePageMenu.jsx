import appleStore from "../../assets/apple-store.png";
import googlePlay from "../../assets/google-play.png";
import appGallery from "../../assets/appgallery.png";
import Orders from "../../assets/orders.svg";
import FavoritesIcon from "../../assets/favorites.svg";
import PaymentsIcon from "../../assets/payments.svg";
import PromotionsIcon from "../../assets/promotions.svg";
import NetAccessIcon from "../../assets/netaccess.svg";
import HelpIcon from "../../assets/help.svg";
import LogoutIcon from "../../assets/logout.svg";
import CrossIcon from "../../assets/cross-icon.svg";
import SignInIcon from "../../assets/sign-in.svg";
import SignUpIcon from "../../assets/sign-up.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../store";
import { NavLink } from "react-router-dom";
import Promotions from "../../layouts/Promotions";
import { useState } from "react";
const HomePageMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal);
  const isSignedIn = useSelector((state) => state.auth);
  const [isPromoOpen, setIsPromoOpen] = useState(false);

  const closeHomePageMenu = () => {
    dispatch(hideModal());
  };
  const navigateToSignUp = () => {
    navigate("/signup");
  };
  const navigateToSignIn = () => {
    navigate("/signup");
  };

  const handlePromotions = () => {
    setIsPromoOpen(!isPromoOpen);
  };
  return (
    <div>
      {/* <div>
        <button className="bg-primary text-white px-4 py-2" onClick={openModal}>
          Open Modal
        </button>
      </div> */}

      {/* Modal */}
      {isModalOpen && isSignedIn ? (
        <div className="fixed top-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-end w-full side-modals">
          <div className="bg-white p-10 w-full sm:w-1/2 lg:w-1/4 h-full flex flex-col justify-between overflow-y-scroll">
            {/* Modal content */}
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-300">
                  {/* Placeholder image */}
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-bold">Trotric Mabuso</h2>
                  <p className="text-sm text-gray-500">
                    trotrictetelo@gmail.com
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-y-6">
                <NavLink to="/orders">
                  <div className="flex items-center cursor">
                    <img
                      className="w-6 h-6 mr-5"
                      src={Orders}
                      alt="Orders Icon"
                    />
                    <span className="font-medium">Orders</span>
                  </div>
                </NavLink>
                <NavLink to="/favourites">
                  <div className="flex items-center cursor">
                    <img
                      className="w-6 h-6 mr-5"
                      src={FavoritesIcon}
                      alt="Favorites Icon"
                    />
                    <span className="font-medium">Favorites</span>
                  </div>
                </NavLink>
                <NavLink to="/payment-methods">
                  <div className="flex items-center cursor">
                    <img
                      className="w-6 h-6 mr-5"
                      src={PaymentsIcon}
                      alt="Payments Icon"
                    />
                    <span className="font-medium">Payments</span>
                  </div>
                </NavLink>

                <div
                  className="flex items-center cursor"
                  onClick={handlePromotions}
                >
                  <img
                    className="w-6 h-6 mr-5"
                    src={PromotionsIcon}
                    alt="Promotions Icon"
                  />
                  <span className="font-medium cursor">Promotions</span>
                </div>

                <NavLink to="/netaccess">
                  <div className="flex items-center">
                    <img
                      className="w-6 h-6 mr-5"
                      src={NetAccessIcon}
                      alt="NetAccess Icon"
                    />
                    <span className="font-medium cursor">NetAccess</span>
                  </div>
                </NavLink>

                <div className="flex items-center cursor">
                  <img
                    className="w-6 h-6 mr-5"
                    src={HelpIcon}
                    alt="Help Icon"
                  />
                  <span className="font-medium">Help</span>
                </div>

                <div className="flex items-center cursor">
                  <img
                    className="w-6 h-6 mr-5"
                    src={LogoutIcon}
                    alt="Logout Icon"
                  />
                  <span className="font-medium">Logout</span>
                </div>
              </div>
              <div>
                {/* Rest of the modal content */}
                <div className="text-lg font-medium py-8">
                  <p className="py-1">Sign up as a Restaurant partner</p>
                  <p className="py-1">Sign up as a Courier partner</p>
                </div>
                <div className="text-lg font-semibold mb-4">
                  Download our app below
                  <div>
                    <div className="flex py-2">
                      <img
                        className="w-1/2"
                        src={appleStore}
                        alt="applestore"
                      />
                      <img
                        className="w-1/2"
                        src={googlePlay}
                        alt="googleplay"
                      />
                    </div>
                    <div className="flex justify-center">
                      <img
                        className="w-1/2"
                        src={appGallery}
                        alt="appgallery"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="absolute top-0 right-0 m-4 text-primary"
              onClick={closeHomePageMenu}
            >
              <img src={CrossIcon} className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="fixed top-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-end w-full side-modals">
          <div className="bg-white p-10 w-full sm:w-1/2 lg:w-1/4 h-full flex flex-col justify-between">
            {/* Modal content */}
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center justify-center">
                <button
                  onClick={navigateToSignIn}
                  className="bg-darkgray text-secondary font-medium px-4 py-3.5 rounded w-full flex items-center"
                >
                  <img
                    className="mr-2 h-4 w-4"
                    src={SignInIcon}
                    alt="Sign In"
                  />
                  <span className="inline-block w-full">Sign In</span>
                </button>
              </div>

              <div className="flex items-center justify-center">
                <button
                  onClick={navigateToSignUp}
                  className="bg-primary text-white font-medium px-4 py-3.5 rounded w-full flex items-center"
                >
                  <img
                    className="mr-2 h-4 w-4"
                    src={SignUpIcon}
                    alt="Sign Up"
                  />
                  <span className="inline-block w-full">Sign Up</span>
                </button>
              </div>

              <div className="text-lg font-medium py-8">
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
              onClick={closeHomePageMenu}
            >
              <img src={CrossIcon} className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      <Promotions toggle={handlePromotions} show={isPromoOpen} />
    </div>
  );
};
export default HomePageMenu;
