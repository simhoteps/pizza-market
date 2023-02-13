import { IconMinus, IconPlus, IconShopAdd } from "core/component/icon/icon";
import React, { useState } from "react";
import "../styles/card_styles.scss";
import { toast } from "react-toastify";

const BasketButton = ({
  id,
  count,
  isCard,
  sizes,
}: {
  id: string;
  count: number;
  isCard: string;
  sizes: number[];
}) => {
  const [size, setSize] = useState<number>(sizes[0]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: "29px",
        justifyContent: "space-between",
        gap: "16px",
      }}
    >
      <div>
        {isCard === "isCard" && (
          <button
            className="card_button"
            onClick={() => {
              toast.success("add basket");
            }}
          >
            <IconShopAdd />
          </button>
        )}
        {isCard === "basket" && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <button className="card_button" onClick={() => {}}>
              <IconMinus />
            </button>

            <p className="card-desc">{count}</p>
            <button className="card_button" onClick={() => {}}>
              <IconPlus />
            </button>
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {sizes.map((item) => {
          return (
            <button
              key={item}
              className="card_button"
              onClick={() => {
                setSize(item);
              }}
            >
              <p
                style={{
                  fontWeight: size === item ? 700 : 500,
                  fontSize: size === item ? 16 : 14,
                }}
                className="card-desc"
              >
                {item}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BasketButton;
