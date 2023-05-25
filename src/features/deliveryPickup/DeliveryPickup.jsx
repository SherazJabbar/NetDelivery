import Navbar from "../../components/Navbar";
import FoodImage1 from "../../assets/food-1.jpg";
import FoodImage2 from "../../assets/food-2.jpg";
import FoodImage3 from "../../assets/food-3.jpg";
import FoodImage4 from "../../assets/food-4.jpg";
import { useState } from "react";

export const PickupPage = () => {
  const [activeTab, setActiveTab] = useState("delivery");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Navbar />
      <div className="px-16">
        <div className="flex justify-between py-3 items-center">
          <div className="flex items-center rounded-full bg-gray p-1">
            <button
              className={`${
                activeTab === "delivery"
                  ? "bg-primary text-white"
                  : "bg-gray text-black"
              } px-8 py-2 rounded-full font-medium`}
              onClick={() => handleTabClick("delivery")}
            >
              Delivery
            </button>
            <button
              className={`${
                activeTab === "pickup"
                  ? "bg-primary text-white"
                  : "bg-gray text-black"
              } px-8 py-2 rounded-full font-medium`}
              onClick={() => handleTabClick("pickup")}
            >
              Pickup
            </button>
          </div>
          <div></div>
        </div>
        <div className="text-lg font-semibold w-full sm:w-1/2 md:w-1/5">
          <p>Pick up near Freedom Road, Midrand</p>
        </div>

        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 xl:w-1/4 delivery-card-height ">
            <div className="flex flex-col gap-3">
              <div className="flex bg-white rounded-lg shadow-md min-h-28 delivery-card">
                <div className="w-1/4 py-4 pl-4 h-28">
                  <img
                    src={FoodImage1}
                    alt="Food"
                    className="w-full h-full object-cover object-center rounded-l-lg"
                  />
                </div>

                <div className="w-3/4 flex flex-col self-center p-2 break-all">
                  <h3 className="text-lg font-semibold">Bagel Kitchen</h3>
                  <div className="flex text-sm">
                    <span className="text-yellow-500">&#9733;</span>
                    <span>4.1 (268) - Dessert</span>
                  </div>

                  <p className="text-gray-600">0.7 miles - Open</p>
                </div>
              </div>

              <div className="flex bg-white rounded-lg shadow-md min-h-28 delivery-card">
                <div className="w-1/4 py-4 pl-4 h-28">
                  <img
                    src={FoodImage2}
                    alt="Food"
                    className="w-full h-full object-cover object-center rounded-l-lg"
                  />
                </div>

                <div className="w-3/4 flex flex-col self-center p-2 break-all">
                  <h3 className="text-lg font-semibold">Bagel Kitchen</h3>
                  <div className="flex text-sm">
                    <span className="text-yellow-500">&#9733;</span>
                    <span>4.1 (268) - Dessert</span>
                  </div>

                  <p className="text-gray-600">0.7 miles - Open</p>
                </div>
              </div>

              <div className="flex bg-white rounded-lg shadow-md min-h-28 delivery-card">
                <div className="w-1/4 py-4 pl-4 h-28">
                  <img
                    src={FoodImage3}
                    alt="Food"
                    className="w-full h-full object-cover object-center rounded-l-lg"
                  />
                </div>

                <div className="w-3/4 flex flex-col self-center p-2 break-all">
                  <h3 className="text-lg font-semibold">Bagel Kitchen</h3>
                  <div className="flex text-sm">
                    <span className="text-yellow-500">&#9733;</span>
                    <span>4.1 (268) - Dessert</span>
                  </div>

                  <p className="text-gray-600">0.7 miles - Open</p>
                </div>
              </div>

              <div className="flex bg-white rounded-lg shadow-md min-h-28 delivery-card">
                <div className="w-1/4 py-4 pl-4 h-28">
                  <img
                    src={FoodImage4}
                    alt="Food"
                    className="w-full h-full object-cover object-center rounded-l-lg"
                  />
                </div>

                <div className="w-3/4 flex flex-col self-center p-2 break-all">
                  <h3 className="text-lg font-semibold">Bagel Kitchen</h3>
                  <div className="flex text-sm">
                    <span className="text-yellow-500">&#9733;</span>
                    <span>4.1 (268) - Dessert</span>
                  </div>

                  <p className="text-gray-600">0.7 miles - Open</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 xl:w-3/4  pl-4">
            Second Part - Map{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupPage;
