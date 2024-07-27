import { FaSearch } from "react-icons/fa";
import logo from "/logo.png";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toogleMenuOpen() {
    setIsMenuOpen(!isMenuOpen);
  }

  const navItems = [
    { title: "Jewelry & Accessories", path: "/E-Commerce-Website/" },
    { title: "Clothing & Shoes", path: "/E-Commerce-Website/" },
    { title: "Home & Living", path: "/E-Commerce-Website/" },
    { title: "Wedding & Party", path: "/E-Commerce-Website/" },
    { title: "Toys & Entertainment", path: "/E-Commerce-Website/" },
    { title: "Art & Collectibles", path: "/E-Commerce-Website/" },
    { title: "Craft Supplies & Tools", path: "/E-Commerce-Website/" },
  ];

  return (
    <header className="xl:px-28 px-4 bg-primaryBg">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3 max-w-screen-2xl m-auto">
        {/* Search Icon  */}
        <FaSearch className="text-black w-5 h-5 hidden md:block cursor-pointer" />

        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>

        {/* Account and Cart Buttons */}
        <div className="text-lg text-black sm:flex items-center gap-4 hidden">
          <a href="/" className="flex items-center hover:text-orange-500">
            <FaUser className="me-2" /> Accounts
          </a>
          <a href="/" className="flex items-center  hover:text-orange-500">
            <FaBagShopping className="mr-2" /> Shoping
          </a>
        </div>

        {/* Mobile Navbar */}

        <div className="sm:hidden">
          <button onClick={toogleMenuOpen}>
            {isMenuOpen ? (
              <FaTimes className="text-black w-5 h-5" />
            ) : (
              <FaBars className="text-black w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      <hr />

      {/* Categories */}

      <div className="pt-4">
        <ul className="lg:flex justify-between items-center container py-4 text-black hidden  max-w-screen-2xl m-auto">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-orange-500">
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}

      {isMenuOpen && (
        <div className="bg-white text-black py-4">
          <ul className="flex flex-col items-center gap-4">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-orange-500">
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
