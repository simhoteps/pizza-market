import React, { Component } from "react";
import {
  IconClose,
  IconHamburgerMenu,
  IconIonChevronForwardSharp,
  IconPizza,
  IconShop,
} from "core/component/icon/icon";
import "../styles/header_styles.scss";
import ThemeToggler from "view/theme/theme-toggler/theme_toggler";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [state, setState] = React.useState<boolean>(true);
  function handleMenuToggle() {
    const navContainer = document.getElementById("nav-container");
    navContainer?.classList.toggle("show-nav");
    setState(!state);
  }
  const headerArr = [
    { name: "Pizza", path: "pizza" },
    { name: "Create Pizza", path: "create-pizza" },
    { name: "Contact", path: "contact" },
  ];
  return (
    <nav className="header">
      <a href="/" className="headerTitleConteiner">
        <IconPizza />
        <h5 className="headerTitle">PIZZA MIA</h5>
      </a>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "36px",
        }}
      >
        <input
          id="check"
          type="checkbox"
          onClick={() => {
            handleMenuToggle();
          }}
        />
        <label htmlFor="check" className="checkbtn">
          {state ? <IconHamburgerMenu /> : <IconClose />}
        </label>

        <ul id="nav-container">
          {headerArr.map((item) => {
            return (
              <li key={item.name}>
                <a href={`/${item.path}`}>
                  <span>{item.name}</span>
                  <i className="iconIonChevron">
                    <IconIonChevronForwardSharp />
                  </i>
                </a>
              </li>
            );
          })}
          <li>
            <a href="/basket">
              <span>
                <IconShop />
              </span>
              <i className="iconIonChevron">
                {" "}
                <IconIonChevronForwardSharp />
              </i>
            </a>
          </li>
        </ul>
        <ThemeToggler />
      </div>
    </nav>
  );
}

export default Header;
