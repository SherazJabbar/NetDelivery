import Navbar from "../../components/Navbar";
import Food1 from "../../assets/food-1.jpg";
import LocationIcon from "../../assets/location-pin.png";
import { useState } from "react";

export const Checkout = () => {
  const [activeTab, setActiveTab] = useState("delivery");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Navbar />
      <div className="px-16">
        <div className="w-3/4 mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
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
                <div className="flex items-center justify-between">
                  <h2 className="text-md font-semibold">Delivery Details</h2>
                  <div className="flex items-center rounded-full bg-gray p-1">
                    <button
                      className={`${
                        activeTab === "delivery"
                          ? "bg-primary text-white"
                          : "bg-gray text-black"
                      } px-3 py-1 rounded-full text-xs font-medium`}
                      onClick={() => handleTabClick("delivery")}
                    >
                      Delivery
                    </button>
                    <button
                      className={`${
                        activeTab === "pickup"
                          ? "bg-primary text-white"
                          : "bg-gray text-black"
                      } px-3 py-1 rounded-full text-xs font-medium`}
                      onClick={() => handleTabClick("pickup")}
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
                      <button className="rounded-full text-xs font-medium bg-gray w-9 h-9 flex items-center justify-center ml-auto flex-shrink-0">
                        Edit
                      </button>
                    </div>
                  </div>
                  <hr className="my-2 border-darkgray"></hr>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center">
                      <img
                        src={LocationIcon}
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
                      <button className="rounded-full text-xs font-medium bg-gray w-9 h-9 flex items-center justify-center ml-auto flex-shrink-0">
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
                  {/* Content for the first column */}
                  <div className="border border-darkgray p-3 rounded-md">
                    <p className="text-xs font-medium pl-5">Priority</p>
                  </div>

                  {/* Content for the second column */}
                  <div className="border border-darkgray p-3 rounded-md">
                    <p className="text-xs font-medium pl-5">Standard</p>
                  </div>

                  {/* Content for the third column */}
                  <div className="border border-darkgray p-3 rounded-md">
                    <p className="text-xs font-medium pl-5">Schedule</p>
                  </div>
                </div>
                <hr className="my-4 border-darkgray"></hr>
                <h2 className="text-md font-semibold">Payment </h2>
                <div className="grid grid-cols-1 gap-2 my-2">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center">
                      <img
                        src={LocationIcon}
                        alt="Location"
                        className="w-4 h-4 mr-2"
                      />
                      <div className="flex flex-col w-4/5">
                        <h2 className="text-xs font-medium">Personal</h2>
                      </div>
                      <button className="rounded-full text-xs font-medium bg-gray w-9 h-9 flex items-center justify-center ml-auto flex-shrink-0">
                        Edit
                      </button>
                    </div>
                  </div>
                  <hr className="my-2 border-darkgray"></hr>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center">
                      <img
                        src={LocationIcon}
                        alt="Location"
                        className="w-4 h-4 mr-2"
                      />
                      <div className="flex flex-col w-4/5">
                        <h2 className="text-xs font-medium">Add Promo Code</h2>
                      </div>
                      <button className="rounded-full text-xs font-medium bg-gray w-9 h-9 flex items-center justify-center ml-auto flex-shrink-0">
                        Add
                      </button>
                    </div>
                  </div>
                  <hr className="my-2 border-darkgray"></hr>
                </div>
              </div>
            </div>
            <div className="col-span-4">
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
                      <div className="text-xs text-end">
                        R <span>4490</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 my-1">
                      <div className="text-xs">Fee</div>
                      <div className="text-xs text-end">
                        <span></span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 my-1">
                      <div className="text-xs">Small Order</div>
                      <div className="text-xs text-end">
                        R<span> 500</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 my-1">
                      <div className="text-xs">Service</div>
                      <div className="text-xs text-end">
                        R<span> 232</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 my-1">
                      <div className="text-xs">Delivery</div>
                      <div className="text-xs text-end">
                        R<span> 1200</span>
                      </div>
                    </div>
                  </div>
                  <hr className="my-2 border-darkgray"></hr>
                  <div className="grid grid-cols-2 gap-2 my-1">
                    <div className="text-xs font-medium">Add a Tip</div>
                    <div className="text-xs text-end">
                      R<span> 0,00</span>
                    </div>
                  </div>

                  <div>
                     <p className="text-xs text-graytext">
                          100% of your tip goes to courier. Tips are based on your order
                          total of R 67.15 before any discounts or promotions
                        </p>
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
