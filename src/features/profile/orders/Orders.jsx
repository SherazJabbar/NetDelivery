import Navbar from "../../../components/Navbar";
import Food1 from "../../../assets/food-1.jpg";
import Food2 from "../../../assets/food-2.jpg";
import Food3 from "../../../assets/food-3.jpg";
import Food4 from "../../../assets/food-4.jpg";

export const Orders = () => {
  return (
    <div>
      <Navbar />
      <div className="px-16 py-8 mt-32">
        <h1 className="text-3xl font-bold leading-tight">Past Orders</h1>

        <div className="grid grid-cols-1 gap-4 mt-8">
          {/* Order Item */}
          <div className="flex flex-col sm:flex-row items-start">
            <div className="w-full sm:w-64 h-36 bg-gray rounded-lg">
              <img
                src={Food1}
                className="w-full h-full object-cover object-center "
              />
            </div>
            <div className="ml-4 flex-grow h-full">
              <div className="font-semibold">Mcdonald's, Midways Mews</div>
              <div className="text-sm text-secondary">
                <span>1 item for R513,45</span>

                <span>02 Nov at </span>
                <span>13:30.</span>

                <span className="ml-2 underline font-semibold cursor-pointer">
                  View Receipt
                </span>
                <span className="ml-2 underline font-semibold cursor-pointer">
                  Save Invoice
                </span>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-6 h-6 bg-primary rounded-full text-white flex items-center justify-center">
                  1
                </div>
                <div className="ml-2 text-md">Oreo McFlurry</div>
              </div>
            </div>
            <div className="bg-primary text-white rounded-lg mt-4 py-2 px-4 ml-4 w-full sm:w-auto">
              View Store
            </div>
          </div>
          <hr className="my-2 border-darkgray"></hr>

          <div className="flex flex-col sm:flex-row items-start">
            <div className="w-full sm:w-64 h-36 bg-gray rounded-lg">
              <img
                src={Food2}
                className="w-full h-full object-cover object-center "
              />
            </div>
            <div className="ml-4 flex-grow h-full">
              <div className="font-semibold">Chicken Licken, Midways Mews</div>
              <div className="text-sm text-secondary">
                <span>1 item for R513,45</span>

                <span>02 Nov at </span>
                <span>13:30.</span>

                <span className="ml-2 underline font-semibold cursor-pointer">
                  View Receipt
                </span>
                <span className="ml-2 underline font-semibold cursor-pointer">
                  Save Invoice
                </span>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-6 h-6 bg-primary rounded-full text-white flex items-center justify-center">
                  1
                </div>
                <div className="ml-2 text-md">Chilli Cheese Slider </div>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-6 h-6 bg-primary rounded-full text-white flex items-center justify-center">
                  1
                </div>
                <div className="ml-2 text-md">Double Chick n Boerie, Top Deluxe Burger </div>
              </div>
            </div>
            <div className="bg-primary text-white rounded-lg mt-4 py-2 px-4 ml-4 w-full sm:w-auto">
              View Store
            </div>
          </div>
          <hr className="my-2 border-darkgray"></hr>

          <div className="flex flex-col sm:flex-row items-start">
            <div className="w-full sm:w-64 h-36 bg-gray rounded-lg">
              <img
                src={Food3}
                className="w-full h-full object-cover object-center "
              />
            </div>
            <div className="ml-4 flex-grow h-full">
              <div className="font-semibold">Mcdonald's, StockRidge 2</div>
              <div className="text-sm text-secondary">
                <span>1 item for R513,45</span>

                <span>02 Nov at </span>
                <span>13:30.</span>

                <span className="ml-2 underline font-semibold cursor-pointer">
                  View Receipt
                </span>
                <span className="ml-2 underline font-semibold cursor-pointer">
                  Save Invoice
                </span>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-6 h-6 bg-primary rounded-full text-white flex items-center justify-center">
                  1
                </div>
                <div className="ml-2 text-md">McChicken</div>
              </div>
            </div>
            <div className="bg-primary text-white rounded-lg mt-4 py-2 px-4 ml-4 w-full sm:w-auto">
              View Store
            </div>
          </div>
          <hr className="my-2 border-darkgray"></hr>

          <div className="flex flex-col sm:flex-row items-start">
            <div className="w-full sm:w-64 h-36 bg-gray rounded-lg">
              <img
                src={Food4}
                className="w-full h-full object-cover object-center "
              />
            </div>
            <div className="ml-4 flex-grow h-full">
              <div className="font-semibold">Mcdonald's, Klyami</div>
              <div className="text-sm text-secondary">
                <span>1 item for R513,45</span>

                <span>02 Nov at </span>
                <span>13:30.</span>

                <span className="ml-2 underline font-semibold cursor-pointer">
                  View Receipt
                </span>
                <span className="ml-2 underline font-semibold cursor-pointer">
                  Save Invoice
                </span>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-6 h-6 bg-primary rounded-full text-white flex items-center justify-center">
                  1
                </div>
                <div className="ml-2 text-md">Mc Cafe</div>
              </div>
            </div>
            <div className="bg-primary text-white rounded-lg mt-4 py-2 px-4 ml-4 w-full sm:w-auto">
              View Store
            </div>
          </div>
          <hr className="my-2 border-darkgray"></hr>
        </div>
      </div>
    </div>
  );
};

export default Orders;
