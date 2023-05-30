import Navbar from "../../components/Navbar";
import Food1 from "../../assets/food-1.jpg";
import LocationIcon from "../../assets/location-pin.png";
import ManIcon from "../../assets/man.svg";
import PromoIcon from "../../assets/promo-code.svg";
import ProfileIcon from "../../assets/profile.svg";
import BusinessIcon from "../../assets/business.svg";
import { useState } from "react";

export const Checkout = () => {
  const [activeDeliveryTab, setActiveDeliveryTab] = useState("delivery");
  const [activeProfileTab, setActiveProfileTab] = useState("profile");

  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeliveryTabClick = (tab) => {
    setActiveDeliveryTab(tab);
  };

  const handleProfileTabClick = (tab) => {
    setActiveProfileTab(tab);
  };

  return (
    <div>
      <Navbar />
      <div className="px-16">
        <div className="w-full md:w-3/4 mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={Food1}
                    alt="Item"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-lg font-medium ml-2">KFC, New Road</h2>
              </div>

              <div className="bg-white p-4 mt-4 rounded-lg shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <h2 className="text-md font-semibold">Delivery Details</h2>
                  <div className="flex items-center rounded-full bg-gray p-1">
                    <button
                      className={`${
                        activeDeliveryTab === "delivery"
                          ? "bg-primary text-white"
                          : "bg-gray text-black"
                      } px-3 py-1 rounded-full text-xs font-medium`}
                      onClick={() => handleDeliveryTabClick("delivery")}
                    >
                      Delivery
                    </button>
                    <button
                      className={`${
                        activeDeliveryTab === "pickup"
                          ? "bg-primary text-white"
                          : "bg-gray text-black"
                      } px-3 py-1 rounded-full text-xs font-medium`}
                      onClick={() => handleDeliveryTabClick("pickup")}
                    >
                      Pickup
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 my-2">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center">
                      <img
                        src={LocationIcon}
                        alt="Location"
                        className="w-4 h-4 mr-2"
                      />
                      <div className="flex flex-col w-4/5">
                        <h2 className="text-sm font-medium">Umthunzi Views</h2>
                        <p className="text-xs text-graytext">
                          153 Walton Ave, 64 umthunzi view, Carlswald, Midrand
                        </p>
                      </div>
                      <button className="rounded-full text-xs font-medium bg-gray w-14 h-8 flex items-center justify-center ml-auto flex-shrink-0">
                        Edit
                      </button>
                    </div>
                  </div>
                  <hr className="my-2 border-darkgray"></hr>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center">
                      <img
                        src={ManIcon}
                        alt="Location"
                        className="w-4 h-4 mr-2"
                      />
                      <div className="flex flex-col w-4/5">
                        <h2 className="text-sm font-medium">
                          Meet at the door
                        </h2>
                        <p className="text-xs text-graytext">
                          Call when at the security gate
                        </p>
                      </div>
                      <button className="rounded-full text-xs font-medium bg-gray w-14 h-8 flex items-center justify-center ml-auto flex-shrink-0">
                        Edit
                      </button>
                    </div>
                  </div>
                  <hr className="my-2 border-darkgray"></hr>
                </div>

                <div className="flex items-center justify-between">
                  <h2 className="text-md font-semibold">Delivery Estimate</h2>
                  <h2 className="text-md font-semibold">
                    15-20 <span>mins(s)</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-2 my-2">
                  <div className="border border-darkgray p-3 rounded-md">
                    <p className="text-xs font-medium pl-5">Priority</p>
                  </div>

                  <div className="border border-darkgray p-3 rounded-md">
                    <p className="text-xs font-medium pl-5">Standard</p>
                  </div>

                  <div className="border border-darkgray p-3 rounded-md">
                    <p className="text-xs font-medium pl-5">Schedule</p>
                  </div>
                </div>
                <hr className="my-4 border-darkgray"></hr>
                <h2 className="text-md font-semibold">Payment </h2>
                <div className="grid grid-cols-1 gap-2 my-2">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center">
                      <div className="flex items-center bg-gray rounded-full p-1">
                        <button
                          className={`${
                            activeProfileTab === "profile"
                              ? "bg-primary text-white"
                              : "bg-gray text-black"
                          } px-3 py-1 rounded-full text-xs font-medium flex items-center`}
                          onClick={() => handleProfileTabClick("profile")}
                        >
                          <img
                            src={ProfileIcon}
                            alt="Profile Icon"
                            className="h-4 w-4 mr-2 filter invert"
                          />
                        </button>
                        <button
                          className={`${
                            activeProfileTab === "business"
                              ? "bg-primary text-white"
                              : "bg-gray text-black"
                          } px-3 py-1 rounded-full text-xs font-medium flex items-center`}
                          onClick={() => handleProfileTabClick("business")}
                        >
                          <img
                            src={BusinessIcon}
                            alt="Business Icon"
                            className="h-4 w-4 mr-2 filter brightness-0"
                          />
                        </button>
                      </div>

                      <div className="flex flex-col w-4/5">
                        <h2 className="text-xs font-medium">Personal</h2>
                      </div>
                      <button className="rounded-full text-xs font-medium bg-gray w-14 h-8 flex items-center justify-center ml-auto flex-shrink-0">
                        Edit
                      </button>
                    </div>
                  </div>
                  <hr className="my-2 border-darkgray"></hr>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center">
                      <img
                        src={PromoIcon}
                        alt="Location"
                        className="w-4 h-4 mr-2 filter brightness-0"
                      />
                      <div className="flex flex-col w-4/5">
                        <h2 className="text-xs font-medium">Add Promo Code</h2>
                      </div>
                      <button className="rounded-full text-xs font-medium bg-gray w-14 h-8 flex items-center justify-center ml-auto flex-shrink-0">
                        Add
                      </button>
                    </div>
                  </div>
                  <hr className="my-2 border-darkgray"></hr>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              {/* Content for the second column */}

              <div>
                <button className="mt-4 bg-primary text-white text-sm font-semibold px-4 py-2 rounded w-full">
                  Place Order
                </button>

                <div className="bg-white p-4 mt-4 rounded-lg shadow-sm">
                  <h2 className="text-md font-semibold">Order total </h2>
                  <div>
                    <div className="grid grid-cols-2 gap-2 my-1">
                      <div className="text-xs">SubTotal</div>
                      <div className="text-xs text-start sm:text-end">
                        R <span>4490</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 my-1">
                      <div className="text-xs">Fee</div>
                      <div className="text-xs text-start sm:text-end">
                        <span></span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 my-1">
                      <div className="text-xs">Small Order</div>
                      <div className="text-xs text-start sm:text-end">
                        R<span> 500</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 my-1">
                      <div className="text-xs">Service</div>
                      <div className="text-xs text-start sm:text-end">
                        R<span> 232</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 my-1">
                      <div className="text-xs">Delivery</div>
                      <div className="text-xs text-start sm:text-end">
                        R<span> 1200</span>
                      </div>
                    </div>
                  </div>
                  <hr className="my-2 border-darkgray"></hr>
                  <div className="grid grid-cols-2 gap-2 my-1">
                    <div className="text-xs font-medium">Add a Tip</div>
                    <div className="text-xs text-start sm:text-end">
                      R<span> 0,00</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-graytext">
                      100% of your tip goes to courier. Tips are based on your
                      order total of R 67.15 before any discounts or promotions
                    </p>
                  </div>

                  <div className="flex my-3 py-3 overflow-x-scroll whitespace-nowrap">
                    <button className="rounded-full bg-primary text-white text-xs px-2 py-1 mr-2">
                      Not Now
                    </button>
                    <button className="rounded-full bg-primary text-white text-xs px-2 py-1 mr-2">
                      10%
                    </button>
                    <button className="rounded-full bg-primary text-white text-xs px-2 py-1 mr-2">
                      15%
                    </button>
                    <button className="rounded-full bg-primary text-white text-xs px-2 py-1 mr-2">
                      20%
                    </button>
                    <button className="rounded-full bg-primary text-white text-xs px-2 py-1 mr-2">
                      25%
                    </button>
                    <button className="rounded-full bg-primary text-white text-xs px-2 py-1 mr-2">
                      30%
                    </button>{" "}
                    <button className="rounded-full bg-primary text-white text-xs px-2 py-1 mr-2">
                      35%
                    </button>
                    <button className="rounded-full bg-primary text-white text-xs px-2 py-1 mr-2">
                      50%
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 my-1 font-semibold">
                    <div className="text-xs">Total</div>
                    <div className="text-sm text-start sm:text-end ">
                      R <span>6715</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="text-xs text-graytext">
                        Terms: By clicking the button to place your order, you
                        agree to
                        <span>&nbsp;</span>
                        <span className="text-green">
                          NetDelivery's Service Agreement
                        </span>
                      </p>
                    </div>

                    <div className="mt-2">
                      <p className="text-xs text-graytext">
                        If you are not around when the courier arrives, they'll
                        leave your order at the door. By placing your order, you
                        take full responsibility for it once it's delivered
                      </p>
                    </div>
                  </div>

                  <hr className="my-2 border-darkgray"></hr>

                  <div className="grid grid-cols-2 gap-2 my-1 font-semibold">
                    <div className="text-lg">Order Summary</div>
                    <div className="text-sm text-start sm:text-end ">
                      <button className="rounded-full bg-primary text-white text-xs font-medium px-2 py-1 mr-2">
                        Add Items
                      </button>
                    </div>
                  </div>

                  <div className="border-none bg-gray">
                    <div
                      className="py-3 px-4 mt-4 flex items-center justify-between cursor-pointer"
                      onClick={toggleAccordion}
                    >
                      <h3 className="text-sm font-medium leading-tight relative">
                        <span>1</span> <span>&nbsp;</span> <span>item</span>
                      </h3>
                    </div>
                    {accordionOpen && (
                      <div className="px-4 py-3 accordion-content mt-2 text-xs font-medium">
                        <div>Items Details</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
