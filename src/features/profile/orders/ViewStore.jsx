import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import BackgroundImage from "../../../assets/food-1.jpg";
import StarIcon from "../../../assets/star-icon.svg";
import OrderAgain from "../../../assets/order-again.png";

export const ViewStore = () => {
  const [activeBreakfastTab, setActivelunchDinnerTab] = useState("lunchDinner");
  const [activeContentTab, setActiveContentTab] = useState("orderAgain");

  const handlelunchDinnerTabClick = (tab) => {
    setActivelunchDinnerTab(tab);
    setActiveContentTab("orderAgain");
  };

  const handleContentTabClick = (tab) => {
    setActiveContentTab(tab);
  };
  return (
    <div>
      <Navbar />
      <div className="relative h-64">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <p className="text-white text-center text-xl">Too far to deliver</p>
        </div>
        <img
          src={BackgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-16 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-3">
            <div>
              <p className="text-3xl font-bold">Mcdonald's , StoneRidge 2</p>
            </div>
            <div className="flex items-center text-secondary text-md font-semibold">
              <img
                src={StarIcon}
                alt="Ratings"
                className="w-4 h-4 filter brightness-0"
              />
              <span>4.4 (500+ ratings)</span>
              <span>&nbsp;</span>
              <span> Burgers</span>
              <span>&nbsp;</span>
              <span> - RR</span>
              <span className="underline ml-2">More info</span>
            </div>
            <div className="text-grayish text-sm">
              Stoneridge Centre, Johannesburg, GP 1609
            </div>
            <div className="text-grayish text-sm">
              Tap for hour, info and more.
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <div className="border border-graytext rounded-full py-3 px-6 text-graytext w-full lg:w-3/4 text-center float-right">
              <p className="text-lg font-bold">Delivery</p>
              <p className="text-sm ">
                Opens at <span>7:00 AM</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-10">
          <div className="col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-2 w-max">
            <div className="my-4">
              <div
                className={`${
                  activeBreakfastTab === "lunchDinner"
                    ? "text-secondary border-b-4 border-primary"
                    : ""
                } inline-block px-4 py-2 cursor-pointer text-xl font-bold`}
                onClick={() => handlelunchDinnerTabClick("lunchDinner")}
              >
                Lunch & Dinner
                <p className="text-xs text-graytext font-medium">
                  {" "}
                  8:00 Am - 10:00 Pm
                </p>
              </div>
              <div
                className={`${
                  activeBreakfastTab === "breakfast"
                    ? "text-secondary border-b-4 border-primary"
                    : ""
                } inline-block px-4 py-2 cursor-pointer text-xl font-bold`}
                onClick={() => handlelunchDinnerTabClick("breakfast")}
              >
                Breakfast
                <p className="text-xs text-graytext font-medium">
                  {" "}
                  7:00 Am - 10:30 Am
                </p>
              </div>
            </div>
            <div className="h-max max-h-56 overflow-y-scroll">
              <div className="flex flex-col">
                <div
                  className={`${
                    activeContentTab === "orderAgain"
                      ? "text-secondary border-b-2 border-primary inline-block px-4 py-2"
                      : "text-secondary inline-block px-4 py-2"
                  } cursor-pointer text-md font-semibold w-max`}
                  onClick={() => handleContentTabClick("orderAgain")}
                >
                  Order Again
                </div>
                {activeBreakfastTab === "lunchDinner" && (
                  <>
                    <div
                      className={`${
                        activeContentTab === "comboOffer"
                          ? "text-secondary border-b-2 border-primary inline-block px-4 py-2"
                          : "text-secondary inline-block px-4 py-2"
                      } cursor-pointer text-md font-semibold w-max`}
                      onClick={() => handleContentTabClick("comboOffer")}
                    >
                      Mcdonald's Limited Time Combo Offer
                    </div>
                    <div
                      className={`${
                        activeContentTab === "offer"
                          ? "text-secondary border-b-2 border-primary inline-block px-4 py-2"
                          : "text-secondary inline-block px-4 py-2"
                      } cursor-pointer text-md font-semibold w-max`}
                      onClick={() => handleContentTabClick("offer")}
                    >
                      McDonald's Limited Time Offer
                    </div>
                    <div
                      className={`${
                        activeContentTab === "chicken"
                          ? "text-secondary border-b-2 border-primary inline-block px-4 py-2"
                          : "text-secondary inline-block px-4 py-2"
                      } cursor-pointer text-md font-semibold w-max`}
                      onClick={() => handleContentTabClick("chicken")}
                    >
                      Chicken
                    </div>
                    <div
                      className={`${
                        activeContentTab === "beef"
                          ? "text-secondary border-b-2 border-primary inline-block px-4 py-2"
                          : "text-secondary inline-block px-4 py-2"
                      } cursor-pointer text-md font-semibold w-max`}
                      onClick={() => handleContentTabClick("beef")}
                    >
                      Beef
                    </div>
                    <div
                      className={`${
                        activeContentTab === "nazo"
                          ? "text-secondary border-b-2 border-primary inline-block px-4 py-2"
                          : "text-secondary inline-block px-4 py-2"
                      } cursor-pointer text-md font-semibold w-max`}
                      onClick={() => handleContentTabClick("nazo")}
                    >
                      Nazo
                    </div>
                  </>
                )}
                {activeBreakfastTab === "breakfast" && (
                  <>
                    <div
                      className={`${
                        activeContentTab === "pancakes"
                          ? "text-secondary border-b-2 border-primary inline-block px-4 py-2"
                          : "text-secondary inline-block px-4 py-2"
                      } cursor-pointer text-md font-semibold w-max`}
                      onClick={() => handleContentTabClick("pancakes")}
                    >
                      Pancakes
                    </div>
                    <div
                      className={`${
                        activeContentTab === "tea"
                          ? "text-secondary border-b-2 border-primary inline-block px-4 py-2"
                          : "text-secondary inline-block px-4 py-2"
                      } cursor-pointer text-md font-semibold w-max`}
                      onClick={() => handleContentTabClick("tea")}
                    >
                      Tea
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-3 mt-4 md:mt-24">
            {activeContentTab === "orderAgain" && (
              <div>
                <h3 className="text-lg font-bold">Order again</h3>
                <div className="w-48 h-48  flex items-center opacity-50">
                  <img src={OrderAgain} className="object-contain bg-gray" />
                </div>
              </div>
            )}
            {activeContentTab === "pancakes" && <div>test-2</div>}
            {activeContentTab === "tea" && (
              <div>{/* Content for Tea tab */}</div>
            )}
            {activeContentTab === "chicken" && (
              <div>{/* Content for Chicken tab */}</div>
            )}
            {activeContentTab === "beef" && (
              <div>{/* Content for Beef tab */}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStore;
