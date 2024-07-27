import Banner from "./Banner";
import Category from "./Category";
import Collections from "./Collections";
import Products from "./Products";
import BestSeller from "./BestSeller";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <div className="home-div">
      <div className="bg-primaryBg banner">
        <Banner />
      </div>
      <div className="bg-white category">
        <Category />
      </div>
      <div className="proucts">
        <Products />
      </div>
      <div className='collections bg-[url("./images/background.png")] bg-cover bg-center bg-no-repeat xl:px-28 px-24 my-20'>
        <Collections />
      </div>
      <div className="best-seller">
        <BestSeller />
      </div>
      <div className="news-letteer bg-primaryBg py-8 md:py-12">
        <NewsLetter />
      </div>
    </div>
  );
};

export default Home;
