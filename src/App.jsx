import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CopyRight from "./Components/CopyRights";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <CopyRight />
    </>
  );
}

export default App;
