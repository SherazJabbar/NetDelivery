import { useState } from "react";
import Navbar from "../../components/Navbar";
import Slider from "react-slick";
import Food1 from "../../assets/food-1.jpg";
import Food2 from "../../assets/food-2.jpg";
import Food3 from "../../assets/food-3.jpg";
import Food4 from "../../assets/food-4.jpg";
export const HomePage = () => {
  const carousel1Settings = {
    arrows: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const carousel2Settings = {
    arrows: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const [activeTab, setActiveTab] = useState("delivery");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Navbar />
      <div className="px-16 py-8">
        <div className="grid grid-cols-12 mb-10 gap-x-8">
          <div className="col-span-3">
            <div className="flex flex-col justify-end h-full">
              <div className="mx-3">
                <p className="mb-1 text-sm">Now</p>
                <p className="flex items-center text-sm">
                  <span className="truncate">
                    Freedom Road, Midrand, Street 1 Italy.
                  </span>
                  <button className="text-blue-700 ml-2 border-none bg-transparent">
                    Change
                  </button>
                </p>
              </div>
            </div>
            <hr className="my-4 border-darkgray w-11/12"></hr>
          </div>

          <div className="col-span-9">
            <Slider {...carousel1Settings}>
              <div className="carousel-img-1">
                <img
                  className="rounded-lg slider-img h-full w-full object-cover"
                  src={Food1}
                  alt="Image 1"
                />
              </div>
              <div className="carousel-img-1">
                <img
                  className="rounded-lg slider-img h-full w-full object-cover"
                  src={Food2}
                  alt="Image 2"
                />
              </div>
              <div className="carousel-img-1">
                <img
                  className="rounded-lg slider-img h-full w-full object-cover"
                  src={Food3}
                  alt="Image 2"
                />
              </div>
              <div className="carousel-img-1">
                <img
                  className="rounded-lg slider-img h-full w-full object-cover"
                  src={Food4}
                  alt="Image 2"
                />
              </div>
              <div className="carousel-img-1">
                <img
                  className="rounded-lg slider-img h-full w-full object-cover"
                  src={Food4}
                  alt="Image 2"
                />
              </div>
            </Slider>
          </div>
        </div>

        <div className="grid grid-cols-12 mb-10 gap-x-8">
          <div className="col-span-3 ">
            <div className="flex flex-col justify-end h-full">
              <div className="flex  rounded-full bg-gray p-1 w-max">
                <button
                  className={`${
                    activeTab === "delivery"
                      ? "bg-primary text-white"
                      : "bg-gray text-black"
                  } text-xs px-5  py-2 rounded-full font-medium`}
                  onClick={() => handleTabClick("delivery")}
                >
                  Delivery
                </button>
                <button
                  className={`${
                    activeTab === "pickup"
                      ? "bg-primary text-white"
                      : "bg-gray text-black"
                  } text-xs px-5  py-2 rounded-full font-medium`}
                  onClick={() => handleTabClick("pickup")}
                >
                  Pickup
                </button>
              </div>
            </div>

            <hr className="my-4 border-darkgray w-11/12"></hr>
          </div>
          <div className="col-span-9">
            <Slider {...carousel2Settings}>
              <div className="carousel-img-2">
                <img
                  className="rounded-lg slider-img h-full w-full object-cover"
                  src={Food1}
                  alt="Image 2"
                />
              </div>
              <div className="carousel-img-2">
                <img
                  className="rounded-lg slider-img h-full w-full object-cover"
                  src={Food2}
                  alt="Image 2"
                />
              </div>
              <div className="carousel-img-2">
                <img
                  className="rounded-lg slider-img h-full w-full object-cover"
                  src={Food3}
                  alt="Image 2"
                />
              </div>
              <div className="carousel-img-2">
                <img
                  className="rounded-lg slider-img h-full w-full object-cover"
                  src={Food3}
                  alt="Image 2"
                />
              </div>
              <div className="carousel-img-2">
                <img
                  className="rounded-lg slider-img h-full w-full object-cover"
                  src={Food4}
                  alt="Image 2"
                />
              </div>
              <div className="carousel-img-2">
                <img
                  className="rounded-lg slider-img h-full w-full object-cover"
                  src={Food1}
                  alt="Image 2"
                />
              </div>
              <div className="carousel-img-2">
                <img
                  className="rounded-lg slider-img h-full w-full object-cover"
                  src={Food4}
                  alt="Image 2"
                />
              </div>
              <div className="carousel-img-2">
                <img
                  className="rounded-lg slider-img h-full w-full object-cover"
                  src={Food2}
                  alt="Image 2"
                />
              </div>

              {/* Add more images */}
            </Slider>
          </div>
        </div>

        <div className=" grid grid-cols-12 gap-x-8">
          <div className="col-span-3 ">
            <div className="grid grid-cols-1 gap-y-4 pb-10">
              <div>
                <label className="flex items-center  text-sm font-medium">
                  <input type="radio" className="form-radio text-primary" />
                  <span className="ml-4">Top Rated</span>
                </label>
              </div>

              <div>
                <label className="flex items-center  text-sm font-medium">
                  <input type="radio" className="form-radio text-primary" />
                  <span className="ml-4">Most Popular</span>
                </label>
              </div>

              <div>
                <label className="flex items-center  text-sm font-medium">
                  <input type="radio" className="form-radio text-primary" />
                  <span className="ml-4">Delivery Time</span>
                </label>
              </div>

              <div>
                <label className="flex items-center  text-sm font-medium">
                  <input type="radio" className="form-radio text-primary" />
                  <span className="ml-4">Distance</span>
                </label>
              </div>
            </div>
            <hr className="my-4 border-darkgray w-11/12"></hr>

            <div className="grid grid-cols-1 gap-y-4 pb-10">
              <div className="relative">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-primary">R20</span>
                  <span className="text-sm font-medium text-primary">R200</span>
                </div>

                <input
                  type="range"
                  min="20"
                  max="200"
                  step="1"
                  className="form-range w-full text-primary"
                />
              </div>
            </div>
            <hr className="my-4 border-darkgray w-11/12"></hr>

            <div className="grid grid-cols-1 gap-y-4 pb-10">
              <div>
                <label className="flex items-center  text-sm font-medium">
                  <input type="radio" className="form-radio text-primary" />
                  <span className="ml-4">All Offers</span>
                </label>
              </div>

              <div>
                <label className="flex items-center  text-sm font-medium">
                  <input type="radio" className="form-radio text-primary" />
                  <span className="ml-4">One day only</span>
                </label>
              </div>

              <div>
                <label className="flex items-center  text-sm font-medium">
                  <input type="radio" className="form-radio text-primary" />
                  <span className="ml-4">Free delivery</span>
                </label>
              </div>

              <div>
                <label className="flex items-center  text-sm font-medium">
                  <input type="radio" className="form-radio text-primary" />
                  <span className="ml-4">Mean deals</span>
                </label>
              </div>

              <div>
                <label className="flex items-center  text-sm font-medium">
                  <input type="radio" className="form-radio text-primary" />
                  <span className="ml-4">Buy 1 get 1 free</span>
                </label>
              </div>
            </div>
            <hr className="my-4 border-darkgray w-11/12"></hr>

            <div className="grid grid-cols-1 gap-y-4 pb-10">
              <div>
                <label className="flex items-center  text-sm font-medium">
                  <input type="radio" className="form-radio text-primary" />
                  <span className="ml-4">Halal</span>
                </label>
              </div>

              <div>
                <label className="flex items-center  text-sm font-medium">
                  <input type="radio" className="form-radio text-primary" />
                  <span className="ml-4">Gluten free</span>
                </label>
              </div>

              <div>
                <label className="flex items-center  text-sm font-medium">
                  <input type="radio" className="form-radio text-primary" />
                  <span className="ml-4">Vegan</span>
                </label>
              </div>

              <div>
                <label className="flex items-center  text-sm font-medium">
                  <input type="radio" className="form-radio text-primary" />
                  <span className="ml-4">Vegetarian</span>
                </label>
              </div>
              <div>
                <label className="flex items-center  text-sm font-medium">
                  <input type="radio" className="form-radio text-primary" />
                  <span className="ml-4">Organic</span>
                </label>
              </div>
            </div>
            <hr className="my-4 border-darkgray w-11/12"></hr>
          </div>
          <div className="col-span-9 justify-self-center md:justify-self-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">
              <div className="w-64 h-64 bg-gray rounded-lg">
                <img
                  className="rounded-lg h-full w-full object-cover opacity-75"
                  src={Food1}
                  alt="Image 1"
                />
              </div>

              <div className="w-64 h-64 bg-gray rounded-lg">
                <img
                  className="rounded-lg h-full w-full object-cover opacity-75"
                  src={Food1}
                  alt="Image 1"
                />
              </div>

              <div className="w-64 h-64 bg-gray rounded-lg">
                <img
                  className="rounded-lg h-full w-full object-cover opacity-75"
                  src={Food2}
                  alt="Image 1"
                />
              </div>

              <div className="w-64 h-64 bg-gray rounded-lg">
                <img
                  className="rounded-lg h-full w-full object-cover opacity-75"
                  src={Food3}
                  alt="Image 1"
                />
              </div>

              <div className="w-64 h-64 bg-gray rounded-lg">
                <img
                  className="rounded-lg h-full w-full object-cover opacity-75"
                  src={Food4}
                  alt="Image 1"
                />
              </div>

              <div className="w-64 h-64 bg-gray rounded-lg">
                <img
                  className="rounded-lg h-full w-full object-cover opacity-75"
                  src={Food1}
                  alt="Image 1"
                />
              </div>

              <div className="w-64 h-64 bg-gray rounded-lg">
                <img
                  className="rounded-lg h-full w-full object-cover opacity-75"
                  src={Food2}
                  alt="Image 1"
                />
              </div>

              <div className="w-64 h-64 bg-gray rounded-lg">
                <img
                  className="rounded-lg h-full w-full object-cover opacity-75"
                  src={Food3}
                  alt="Image 1"
                />
              </div>

              <div className="w-64 h-64 bg-gray rounded-lg">
                <img
                  className="rounded-lg h-full w-full object-cover opacity-75"
                  src={Food4}
                  alt="Image 1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
