import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BestSeller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./products.json");
        const data = await response.json();

        setProducts(() => {
          return data.filter((product) => product.status === "Best Selers");
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto container cl:px-28 px-4 pb-8 text-center">
      <h2 className="title">Best Sellers</h2>

      <p className="text-black/75 capitalize md:w2/3 ms-auto mb-8 my-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla totam
        autem sint accusamus doloribus rem aspernatur, dicta, saepe officiis
        adipisci magnam, reiciendis voluptates facere unde harum excepturi
        praesentium eos. Optio.
      </p>

      {/* Best Seller Products */}
      <div className="my-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="flex flex-col items-center justify-center"
            >
              <Link
                to={`/E-Commerce-Website/shop/${product.id}`}
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-200"
                />
              </Link>

              <div className="mt-4 px-5">
                <h3 className="text-base font-semibold my-2">
                  {product.title}
                </h3>
                <div className="flex justify-between">
                  <p className="text-black/50">{product.category}</p>
                  <p className="font-semibold">${product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSeller;
