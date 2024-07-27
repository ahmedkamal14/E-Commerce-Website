import BannerImg from "/images/Banner.png";
import { FaBagShopping } from "react-icons/fa6";

const Banner = () => {
  let desc =
    "You can explore ans shop many differnt collection from various barands here.";

  // Make every first letter ca

  desc = desc
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");

  return (
    <div className="py-16 xl:px-12 px-4 flex items-center flex-col-reverse md:flex-row justify-between max-w-screen-2xl m-auto">
      <div className="md:w-1/2">
        <h1 className="text-black text-5xl font-light">Collections</h1>
        <p className="text-black text-xl mt-5">{desc}</p>
        <button className="flex mt-7 bg-black text-white px-6 py-3 rounded-lg hover:bg-orange-500 font-semibold">
          <FaBagShopping className="me-3" /> Shop Now
        </button>
      </div>
      <div className="md:w-1/3 mb-10">
        <img src={BannerImg} alt="Banner images" />
      </div>
    </div>
  );
};

export default Banner;
