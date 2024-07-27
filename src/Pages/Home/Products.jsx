import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../Components/Cards";

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [, setSortingItem] = useState("default");

  // Filtering Function

  const filterData = (category) => {
    let tempData = [...productsList];
    if (category !== "all") {
      tempData = tempData.filter((item) => item.category === category);
    }
    setFilteredData(tempData);
  };

  const handleSortingChange = (option) => {
    setSortingItem(option);
    let tempData = [...filteredData];
    if (option === "A-Z") {
      tempData = tempData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === "Z-A") {
      tempData = tempData.sort((a, b) => b.title.localeCompare(a.title));
    } else if (option === "low-high") {
      tempData = tempData.sort((a, b) => a.price - b.price);
    } else if (option === "high-low") {
      tempData = tempData.sort((a, b) => b.price - a.price);
    }
    setFilteredData(tempData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./products.json");
        const data = await response.json();

        setProductsList(data);
        setFilteredData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto container cl:px-28 px-4 pb-8">
      <h2 className="title">Or subscribe to the newsletter</h2>

      {/* Product Cards */}
      <div className="flex items-center mt-8 flex-col md:flex-row md:justify-between">
        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
          <button onClick={() => filterData("all")}>All Products</button>
          <button onClick={() => filterData("Bag")}>Bags</button>
          <button onClick={() => filterData("Hoodies")}>Hoodies</button>
          <button onClick={() => filterData("Dress")}>Dresses</button>
        </div>

        {/* Filtering  */}
        <div className="bg-black text-white rounded-lg  px-4 py-2 flex justify-center items-center mt-5">
          <FaFilter className="me-3" />
          <select
            name="filtering-select"
            id="filter-select"
            className="bg-black text-white rounded-lg"
            onChange={(e) => handleSortingChange(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="A-Z">A-z</option>
            <option value="Z-A">Z-A</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* Product Cards */}
      </div>
      <div className="my-10">
        <Cards filtereItems={filteredData} />
      </div>
    </div>
  );
};

export default Products;
