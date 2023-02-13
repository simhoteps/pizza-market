import React, { useEffect } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "view/pre-loading/component/loading";
import ProductList from "view/product-list/component/product_list";
import HomePage from "view/home-page/component/home_page";
import Header from "view/header/component/header";
import ThemeProvider from "./view/theme/theme-context/theme_context";
import ProductListingPage from "view/product-listing-page/component/product_listing_page";
import CreatePizza from "view/create-pizza/create_pizza";
import Contact from "view/contact/contact";
import Basket from "view/basket/basket";
import Footer from "view/footer/footer";
import MotorCourier from "core/component/motor-courier/motor_courier";
import { useDispatch } from "react-redux";
import { fetchPizza } from "store/reducer/pizza_slice";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/pizza",
    children: [
      {
        index: true,
        element: <ProductListingPage />,
        //   loader: teamLoader,
      },
      {
        path: "/pizza/:productId",
        element: <ProductList />,
      },
    ],
  },
  {
    path: "/pizza",
    element: <ProductListingPage />,
  },
  {
    path: "/create-pizza",
    element: <CreatePizza />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
]);

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <div style={{ paddingTop: "64px" }}>
          <RouterProvider router={Router} />
        </div>
      </div>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
