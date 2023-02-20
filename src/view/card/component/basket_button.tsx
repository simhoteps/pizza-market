import { IconMinus, IconPlus, IconShopAdd } from "core/component/icon/icon";
import React, { useState } from "react";
import "../styles/card_styles.scss";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { basketSlice } from "store/action/basket_action";
import { PizzaItem } from "model/model";

const BasketButton = ({
  isCard,
  pizza,
}: {
  pizza: PizzaItem;
  isCard: string;
}) => {
  const { id, selectPizza } = useSelector(
    (state: RootState) => state.basketSlice
  );
  const dispatch = useDispatch();

  const [size, setSize] = useState<number>(pizza.sizes[0]);
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
              dispatch(basketSlice.actions.increment());
              toast.success("add basket");
              console.log("first");
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

            <p className="card-desc">{pizza.count}</p>
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
        {pizza.sizes.map((item) => {
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
