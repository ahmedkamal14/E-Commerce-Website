import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SingleProduct = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../public/products.json");
        const data = await response.json();
        const product = data.filter((item) => {
          return item.id == id;
        });
        setProducts(product[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { title, price, image, status } = products;
  return (
    <div className="max-w-screen-2xl mx-auto container cl:px-28 px-4 pb-8">
      <div className="p-3 max-w-7xl m-auto">
        <div className="links mt-5">
          <a href="/E-Commerce-Website/" className="text-gray-600">
            Home
          </a>{" "}
          /{" "}
          <a href="/E-Commerce-Website/shop" className="text-black font-bold">
            Shop
          </a>{" "}
        </div>
        <div className="mt-6 sm:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 h-max">
            <div className="flex items-center justify-center">
              <img src={`.${image}`} alt={title} className="w-full" />
            </div>

            {/* Product Details */}
            <div className="mt-8">
              <h2 className="title text-left mt-0">{title}</h2>
              <p className="mt-3 text-gray-600 text-base leading-7 text-justify sm:text-left sm:mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam reiciendis pariatur temporibus quos ab voluptas nam. Sed
                nihil facere velit, ut magni consectetur asperiores quisquam
                eligendi provident repellendus atque at? Lorem, ipsum dolor sit
              </p>
              <p className="text-black/50 mt-4">{status}</p>
              <p className="text-red-500 font-semibold mt-5 text-xl sm:text-2xl">
                ${price}
              </p>

              <div className="flex flex-col gap-4 text-left w-full">
                <label
                  htmlFor="quantity"
                  className="font-semibold mt-3"
                  defaultValue={1}
                  required
                >
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="border border-gray-500 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md  m-0 py-3 px-4 md:py-4 md:px-4 focus:border-red-500"
                />
                <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                veritatis similique, porro at nostrum recusandae fugiat fugit
                dolore excepturi doloribus consectetur magnam sapiente
                doloremque, dignissimos nam rerum nemo, voluptate a. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                perferendis enim adipisci quas officia consequatur culpa vero
                dolor animi aperiam, atque sunt molestiae consectetur beatae
                cupiditate ea eaque obcaecati esse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
