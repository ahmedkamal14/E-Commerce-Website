import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import SingleProduct from "./Components/SingleProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/E-Commerce-Website/",
    element: <App />,
    children: [
      {
        path: "/E-Commerce-Website/",
        element: <Home />,
      },
      {
        path: `/E-Commerce-Website/shop/:id`,
        element: <SingleProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
