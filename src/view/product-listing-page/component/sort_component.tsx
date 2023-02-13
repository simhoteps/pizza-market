import { IconArrowOpen } from "core/component/icon/icon";
import React, { useState } from "react";

const rowStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "12px",
};

const SortComponent = () => {
  const [isOPen, setOpen] = useState<boolean>(false);
  const [select, setSelect] = useState<string>("price");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <p style={{ fontWeight: 700 }} className="sort-text">
        Sort by:{" "}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="sort-button"
        >
          <p style={{ fontWeight: 700 }} className="sort-text">
            {select}{" "}
          </p>
          <IconArrowOpen />
        </button>

        {isOPen === true && (
          <div className="sort-listing">
            <button
              onClick={() => {
                setOpen(false);
                setSelect("price");
              }}
              className="sort-button"
            >
              <p className="sort-text">price </p>
            </button>
            <button
              onClick={() => {
                setOpen(false);
                setSelect("rating");
              }}
              className="sort-button"
            >
              <p className="sort-text">rating </p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortComponent;
