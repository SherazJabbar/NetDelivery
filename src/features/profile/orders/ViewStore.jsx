import Navbar from "../../../components/Navbar";
import BackgroundImage from "../../../assets/food-1.jpg";
import StarIcon from "../../../assets/star-icon.svg";

export const ViewStore = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          style={{ height: "300px" }}
        >
          <p className="text-white text-center text-xl">Too far to deliver</p>
        </div>
        <img src={BackgroundImage} alt="Background" className="w-full h-64 object-cover" />
      </div>
      <div className="px-16 py-8 mt-10">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-2">
            <div>
              <p className="text-lg font-bold">Mcdonald's , StoneRidge 2</p>
            </div>
            <div className="flex items-center text-secondary text-md font-medium">
            <img src={StarIcon} alt="Ratings" className="w-4 h-4" />
              <span>4.4 (500+ ratings)</span>
              <span className="underline ml-2">More info</span>
            </div>
            <div className="text-graytext text-sm">Stoneridge Centre, Johannesburg, GP 1609</div>
            <div className="text-graytext text-sm">Tap for hour, info and more.</div>
          </div>
          <div className="col-span-3">
            <div className="border-gray rounded-full py-3 px-6 text-graytext">
              <p className="text-lg font-bold">Delivery</p>
              <p className="text-sm">
                Opens at <span>7:00 AM</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStore;
