import Navbar from "../../../components/Navbar";
import Food1 from "../../../assets/food-1.jpg";
import Food2 from "../../../assets/food-2.jpg";
import Food3 from "../../../assets/food-3.jpg";
import MoonIcon from "../../../assets/moon-icon.svg";
import StarIcon from "../../../assets/star-icon.svg";
export const Favourites = () => {
  return (
    <div>
      <Navbar />
      <div className="px-16 py-8 mt-32">
        <h1 className="text-3xl font-bold leading-tight">Currently Unavailable</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-1 gap-y-2 mt-8">
          <div className="bg-white rounded-lg p-2">
            <div className="relative">
              <div className="bg-black bg-opacity-75 absolute inset-0"></div>
              <img
                src={Food1}
                alt="Restaurant"
                className="w-full h-32 object-cover rounded-t-lg"
              />

              <div className="absolute top-2 text-white text-opacity-75 pl-2 pr-4 py-1 rounded-r-full rounded-l-md bg-green bg-opacity-50 text-md">
                Ordered 5 Times
              </div>

              <div className="absolute top-2 right-2">
                <img
                  className="w-4 h-4 ml-1 inline-block"
                  src={StarIcon}
                  alt="Star Icon"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="flex flex-col items-center">
                  <div>
                    <img className="w-4 h-4" src={MoonIcon} alt="Moon Icon" />
                  </div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-b-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-2 break-all">
                <div className="flex flex-col">
                  <div className="text-lg font-bold">KFC, BraanFontein</div>
                  <div className="text-graytext text-sm font-sm">
                    Opens at 07:00 PM
                  </div>
                </div>
                <div className="w-7 h-7 bg-graytext rounded-full text-white text-xs flex items-center justify-center">
                  4.6
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-2">
            <div className="relative">
              <div className="bg-black bg-opacity-75 absolute inset-0"></div>
              <img
                src={Food1}
                alt="Restaurant"
                className="w-full h-32 object-cover rounded-t-lg"
              />

              <div className="absolute top-2 text-white text-opacity-75 pl-2 pr-4 py-1 rounded-r-full rounded-l-md bg-green bg-opacity-50 text-md">
                Ordered 5 Times
              </div>

              <div className="absolute top-2 right-2">
                <img
                  className="w-4 h-4 ml-1 inline-block"
                  src={StarIcon}
                  alt="Star Icon"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="flex flex-col items-center">
                  <div>
                    <img className="w-4 h-4" src={MoonIcon} alt="Moon Icon" />
                  </div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-b-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-2 break-all">
                <div className="flex flex-col">
                  <div className="text-lg font-bold">KFC, BraanFontein</div>
                  <div className="text-graytext text-sm font-sm">
                    Opens at 07:00 PM
                  </div>
                </div>
                <div className="w-7 h-7 bg-graytext rounded-full text-white text-xs flex items-center justify-center">
                  4.6
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-2">
            <div className="relative">
              <div className="bg-black bg-opacity-75 absolute inset-0"></div>
              <img
                src={Food1}
                alt="Restaurant"
                className="w-full h-32 object-cover rounded-t-lg"
              />

              <div className="absolute top-2 text-white text-opacity-75 pl-2 pr-4 py-1 rounded-r-full rounded-l-md bg-green bg-opacity-50 text-md">
                Ordered 5 Times
              </div>

              <div className="absolute top-2 right-2">
                <img
                  className="w-4 h-4 ml-1 inline-block"
                  src={StarIcon}
                  alt="Star Icon"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="flex flex-col items-center">
                  <div>
                    <img className="w-4 h-4" src={MoonIcon} alt="Moon Icon" />
                  </div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-b-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-2 break-all">
                <div className="flex flex-col">
                  <div className="text-lg font-bold">KFC, BraanFontein</div>
                  <div className="text-graytext text-sm font-sm">
                    Opens at 07:00 PM
                  </div>
                </div>
                <div className="w-7 h-7 bg-graytext rounded-full text-white text-xs flex items-center justify-center">
                  4.6
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-2">
            <div className="relative">
              <div className="bg-black bg-opacity-75 absolute inset-0"></div>
              <img
                src={Food1}
                alt="Restaurant"
                className="w-full h-32 object-cover rounded-t-lg"
              />

              <div className="absolute top-2 text-white text-opacity-75 pl-2 pr-4 py-1 rounded-r-full rounded-l-md bg-green bg-opacity-50 text-md">
                Ordered 5 Times
              </div>

              <div className="absolute top-2 right-2">
                <img
                  className="w-4 h-4 ml-1 inline-block"
                  src={StarIcon}
                  alt="Star Icon"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="flex flex-col items-center">
                  <div>
                    <img className="w-4 h-4" src={MoonIcon} alt="Moon Icon" />
                  </div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-b-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-2 break-all">
                <div className="flex flex-col">
                  <div className="text-lg font-bold">KFC, BraanFontein</div>
                  <div className="text-graytext text-sm font-sm">
                    Opens at 07:00 PM
                  </div>
                </div>
                <div className="w-7 h-7 bg-graytext rounded-full text-white text-xs flex items-center justify-center">
                  4.6
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-2">
            <div className="relative">
              <div className="bg-black bg-opacity-75 absolute inset-0"></div>
              <img
                src={Food1}
                alt="Restaurant"
                className="w-full h-32 object-cover rounded-t-lg"
              />

              <div className="absolute top-2 text-white text-opacity-75 pl-2 pr-4 py-1 rounded-r-full rounded-l-md bg-green bg-opacity-50 text-md">
                Ordered 5 Times
              </div>

              <div className="absolute top-2 right-2">
                <img
                  className="w-4 h-4 ml-1 inline-block"
                  src={StarIcon}
                  alt="Star Icon"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="flex flex-col items-center">
                  <div>
                    <img className="w-4 h-4" src={MoonIcon} alt="Moon Icon" />
                  </div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-b-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-2 break-all">
                <div className="flex flex-col">
                  <div className="text-lg font-bold">KFC, BraanFontein</div>
                  <div className="text-graytext text-sm font-sm">
                    Opens at 07:00 PM
                  </div>
                </div>
                <div className="w-7 h-7 bg-graytext rounded-full text-white text-xs flex items-center justify-center">
                  4.6
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-2">
            <div className="relative">
              <div className="bg-black bg-opacity-75 absolute inset-0"></div>
              <img
                src={Food1}
                alt="Restaurant"
                className="w-full h-32 object-cover rounded-t-lg"
              />

              <div className="absolute top-2 text-white text-opacity-75 pl-2 pr-4 py-1 rounded-r-full rounded-l-md bg-green bg-opacity-50 text-md">
                Ordered 5 Times
              </div>

              <div className="absolute top-2 right-2">
                <img
                  className="w-4 h-4 ml-1 inline-block"
                  src={StarIcon}
                  alt="Star Icon"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="flex flex-col items-center">
                  <div>
                    <img className="w-4 h-4" src={MoonIcon} alt="Moon Icon" />
                  </div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-b-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-2 break-all">
                <div className="flex flex-col">
                  <div className="text-lg font-bold">KFC, BraanFontein</div>
                  <div className="text-graytext text-sm font-sm">
                    Opens at 07:00 PM
                  </div>
                </div>
                <div className="w-7 h-7 bg-graytext rounded-full text-white text-xs flex items-center justify-center">
                  4.6
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-2">
            <div className="relative">
              <div className="bg-black bg-opacity-75 absolute inset-0"></div>
              <img
                src={Food1}
                alt="Restaurant"
                className="w-full h-32 object-cover rounded-t-lg"
              />

              <div className="absolute top-2 text-white text-opacity-75 pl-2 pr-4 py-1 rounded-r-full rounded-l-md bg-green bg-opacity-50 text-md">
                Ordered 5 Times
              </div>

              <div className="absolute top-2 right-2">
                <img
                  className="w-4 h-4 ml-1 inline-block"
                  src={StarIcon}
                  alt="Star Icon"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="flex flex-col items-center">
                  <div>
                    <img className="w-4 h-4" src={MoonIcon} alt="Moon Icon" />
                  </div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-b-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-2 break-all">
                <div className="flex flex-col">
                  <div className="text-lg font-bold">KFC, BraanFontein</div>
                  <div className="text-graytext text-sm font-sm">
                    Opens at 07:00 PM
                  </div>
                </div>
                <div className="w-7 h-7 bg-graytext rounded-full text-white text-xs flex items-center justify-center">
                  4.6
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-2">
            <div className="relative">
              <div className="bg-black bg-opacity-75 absolute inset-0"></div>
              <img
                src={Food1}
                alt="Restaurant"
                className="w-full h-32 object-cover rounded-t-lg"
              />

              <div className="absolute top-2 text-white text-opacity-75 pl-2 pr-4 py-1 rounded-r-full rounded-l-md bg-green bg-opacity-50 text-md">
                Ordered 5 Times
              </div>

              <div className="absolute top-2 right-2">
                <img
                  className="w-4 h-4 ml-1 inline-block"
                  src={StarIcon}
                  alt="Star Icon"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="flex flex-col items-center">
                  <div>
                    <img className="w-4 h-4" src={MoonIcon} alt="Moon Icon" />
                  </div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-b-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-2 break-all">
                <div className="flex flex-col">
                  <div className="text-lg font-bold">KFC, BraanFontein</div>
                  <div className="text-graytext text-sm font-sm">
                    Opens at 07:00 PM
                  </div>
                </div>
                <div className="w-7 h-7 bg-graytext rounded-full text-white text-xs flex items-center justify-center">
                  4.6
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-2">
            <div className="relative">
              <div className="bg-black bg-opacity-75 absolute inset-0"></div>
              <img
                src={Food1}
                alt="Restaurant"
                className="w-full h-32 object-cover rounded-t-lg"
              />

              <div className="absolute top-2 text-white text-opacity-75 pl-2 pr-4 py-1 rounded-r-full rounded-l-md bg-green bg-opacity-50 text-md">
                Ordered 5 Times
              </div>

              <div className="absolute top-2 right-2">
                <img
                  className="w-4 h-4 ml-1 inline-block"
                  src={StarIcon}
                  alt="Star Icon"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="flex flex-col items-center">
                  <div>
                    <img className="w-4 h-4" src={MoonIcon} alt="Moon Icon" />
                  </div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-b-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-2 break-all">
                <div className="flex flex-col">
                  <div className="text-lg font-bold">KFC, BraanFontein</div>
                  <div className="text-graytext text-sm font-sm">
                    Opens at 07:00 PM
                  </div>
                </div>
                <div className="w-7 h-7 bg-graytext rounded-full text-white text-xs flex items-center justify-center">
                  4.6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
