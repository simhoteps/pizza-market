import React from "react";
import "./filter_styles.scss";

const Filter = ({ height }: { height?: string }) => {
  const typeFilter = ["All", "Meat", "Vegan", "Grill", "Spicy", "Other"];

  return (
    <div
      style={{ height: height, maxHeight: height }}
      className="filterContent"
    >
      <p style={{ fontWeight: 700 }} className="filter_text">
        Pizza Type
      </p>
      <div className="typeFilterContent">
        {typeFilter.map((item) => {
          return (
            <div key={item} className="type1Filter">
              {" "}
              <p className="filter_text">{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
