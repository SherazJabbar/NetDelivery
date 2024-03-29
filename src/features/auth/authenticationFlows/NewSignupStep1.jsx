import logoImage from "../../../assets/net-delivery-logo.png";
import RightArrow from "../../../assets/right-arrow.svg";
import LeftArrow from "../../../assets/left-arrow.svg";

const NewSignupStep1 = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="px-5 py-4 flex items-center justify-between">
        <img className="w-2/3 md:w-1/5" src={logoImage} alt="Logo" />
      </nav>

      {/* Auth Content */}
      <div className="flex items-center justify-center bg-gray-100">
        <div className="flex flex-col md:items-center justify-center w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 px-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-xl font-semibold mb-4">What's your name?</h1>

          <form className="w-full">
            <div className="grid grid-cols-1">
              <input
                className="px-4 py-2 rounded border-none bg-gray my-4 text-sm w-full"
                placeholder="name@example.com"
                type="text"
              />
            </div>
          </form>

          <div className="my-4 w-full flex justify-between">
            <button className="w-max bg-gray text-secondary text-xs font-semibold py-2 px-4 rounded-full my-4 flex items-center">
              <img src={LeftArrow} alt="Left Arrow" className="h-4 w-4 mr-2" />
            </button>

            <button className="w-max bg-primary text-secondary text-xs font-semibold py-2 px-4 rounded-full my-4 flex items-center opacity-50">
              <span className="mr-2">Next</span>
              <img src={RightArrow} alt="Right Arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSignupStep1;
