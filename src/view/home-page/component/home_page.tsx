import React, { useContext } from "react";
import Header from "view/header/component/header";
import ProductListingPage from "view/product-listing-page/component/product_listing_page";
import { ThemeContext } from "view/theme/theme-context/theme_context";
import "../styles/home_styles.scss";
import "core/init/theme/light_theme.scss";
import "core/init/theme/dark_theme.scss";
import Footer from "view/footer/footer";
import { useNavigate } from "react-router-dom";
import ContainerBox from "core/component/box/container_box";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const scssFile =
    theme === "dark" ? "./dark-theme.scss" : "./light-theme.scss";
  return (
    <ContainerBox
      child={
        <div
          style={{
            backgroundImage: `url(${window.location.origin}/pizza-time-tasty-homemade-traditional-pizza-italian-recipe.jpg)`,
          }}
          className="homeContent"
        >
          {/*       <img
            className="homeImg"
            src={`${window.location.origin}/pizza_home.png`}
          /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "52px",
              width: "50%",
            }}
          >
            <p className="home-text">TASTE THE PERFECT PIZZA</p>
            <button
              onClick={() => {
                navigate("/pizza");
              }}
              className="home-button"
            >
              {" "}
              MENU{" "}
            </button>
          </div>
        </div>
      }
    />
  );
};

export default HomePage;
