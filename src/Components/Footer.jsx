import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container lg:px-28 px-4 pb-8 mt-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10">
        <div className="info">
          <Link>
            <img src="./logo.png" alt="Logo" />
          </Link>
          <p className="mt-8 text-gray-600 text-base leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Nihil a assumenda quam, amet esse hic facere recusandae ab
            autem beatae magni perspiciatis quibusdam! Quia culpa voluptates,
            facere reprehenderit hic nobis.
          </p>
          <div className="socials flex gap-4 mt-10 text-xl">
            <Link className="hover:scale-125 transition-all duration-300 hover:text-orange-500">
              <FaFacebook />
            </Link>
            <Link className="hover:scale-125 transition-all duration-300 hover:text-orange-500">
              <GrInstagram />
            </Link>
            <Link className="hover:scale-125 transition-all duration-300 hover:text-orange-500">
              <FaTwitter />
            </Link>
            <Link className="hover:scale-125 transition-all duration-300 hover:text-orange-500">
              <FaLinkedin />
            </Link>
            <Link className="hover:scale-125 transition-all duration-300 hover:text-orange-500">
              <FaGithub />
            </Link>
          </div>
        </div>
        <div className="catalog">
          <h2 className="text-black font-semibold text-2xl">Catalog</h2>
          <ul className="mt-8 flex flex-col gap-6 text-gray-600 text-base">
            <li>
              <Link className="hover:text-orange-500">Necklaces</Link>
            </li>
            <li>
              <Link className="hover:text-orange-500">Hoodies</Link>
            </li>
            <li>
              <Link className="hover:text-orange-500">Jewelry Box</Link>
            </li>
            <li>
              <Link className="hover:text-orange-500">T-Shirt</Link>
            </li>
            <li>
              <Link className="hover:text-orange-500">Jacket</Link>
            </li>
          </ul>
        </div>
        <div className="about">
          <h2 className="text-black font-semibold text-2xl">About Us</h2>
          <ul className="mt-8 flex flex-col gap-6 text-gray-600 text-base">
            <li>
              <Link className="hover:text-orange-500">Our Producers</Link>
            </li>
            <li>
              <Link className="hover:text-orange-500">Sitemap</Link>
            </li>
            <li>
              <Link className="hover:text-orange-500">FAQ</Link>
            </li>
            <li>
              <Link className="hover:text-orange-500">About Us</Link>
            </li>
            <li>
              <Link className="hover:text-orange-500">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="services">
          <h2 className="text-black font-semibold text-2xl">
            CUSTOMER SERVICES
          </h2>
          <ul className="mt-8 flex flex-col gap-6 text-gray-600 text-base">
            <li>
              <Link className="hover:text-orange-500">Contact Us</Link>
            </li>
            <li>
              <Link className="hover:text-orange-500">Track Your Order</Link>
            </li>
            <li>
              <Link className="hover:text-orange-500">
                Product Care & Repair
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500">Book an Appointment</Link>
            </li>
            <li>
              <Link className="hover:text-orange-500">Shipping & Returns</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
