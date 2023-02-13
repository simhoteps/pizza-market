import { IconMoon, IconSun } from "core/component/icon/icon";
import React, { useContext } from "react";
import { ThemeContext } from "../theme-context/theme_context";

const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
      }}
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <IconMoon />
      ) : theme === "dark" ? (
        <IconSun />
      ) : (
        <IconMoon />
      )}
      {/*       {theme === "light" ? "Switch to Dark" : "Switch to Light"} */}
    </button>
  );
};

export default ThemeToggler;
