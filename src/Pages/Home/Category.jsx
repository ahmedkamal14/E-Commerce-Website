import { Link } from "react-router-dom";

const companyLogo = [
  { id: 0, img: "./images/Brands/brand-1" },
  { id: 1, img: "./images/Brands/brand-2" },
  { id: 2, img: "./images/Brands/brand-3" },
  { id: 3, img: "./images/Brands/brand-4" },
  { id: 4, img: "./images/Brands/brand-5" },
];

const Category = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-8 px-4 py-12 text-2xl">
      <div className="flex justify-between flex-col lg:flex-row items-center">
        {companyLogo.map((logo) => (
          <img
            key={logo.id}
            src={`${logo.img}.png`}
            alt="Company Logo"
            className="h-12 w-24 object-contain min-w-64 mb-8"
          />
        ))}
      </div>

      {/* Category Grid */}

      <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
        <p className="bg-black font-semibold text-center md:-rotate-90 uppercase text-white md:p-1.5 p-2 rounded inline-flex">
          EXPLORE NEW AND POPULAR STYLES
        </p>
        <div className="lg:w-1/2">
          <Link to="/" />
          <img
            src="./images/Category/two.png"
            alt="Category"
            className="w-full hover:scale-105 transition-all duration-200"
          />
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <Link>
              <img
                src="./images/Category/one.png"
                alt="Category"
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link>
              <img
                src="./images/Category/four.png"
                alt="Category"
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link>
              <img
                src="./images/Category/five.png"
                alt="Category"
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link>
              <img
                src="./images/Category/three.png"
                alt="Category"
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
