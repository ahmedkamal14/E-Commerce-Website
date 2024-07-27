import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Cards = ({ filtereItems }) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16 justify-center items-start shadow-sm">
      {filtereItems.slice(0, 8).map((item) => (
        <div key={item.id}>
          <Link to={`/E-Commerce-Website/shop/${item.id}`} key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-105 transition-all duration-200"
            />
          </Link>

          <div className="mt-4 px-5">
            <h3 className="text-base font-semibold my-2">{item.title}</h3>
            <div className="flex justify-between">
              <p className="text-black/50">{item.category}</p>
              <p className="font-semibold">${item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
