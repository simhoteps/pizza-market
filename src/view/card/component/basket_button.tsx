import { IconMinus, IconPlus, IconShopAdd } from "core/component/icon/icon";
import React, { useState } from "react";
import "../styles/card_styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store2/store";
import {
  increaseAmount,
  minusItem,
  removeItem,
} from "store2/reducer/basket_slice";
import notify from "core/component/notify/notify";
import { toast } from "react-toastify";
//import { decrement, increment } from "store/reducer/basket_slice";

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
  const dispatch = useDispatch();
  const sizeOfPizza = [26, 30, 40];

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickPlus = () => {
    dispatch(increaseAmount({ id }));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  const [basketNumber, setBasketNumber] = useState<number>(0);
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
              notify("success", "add basket");
              toast.success("add basket");
              onClickPlus();
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
            <button
              className="card_button"
              onClick={() => {
                onClickMinus();
              }}
            >
              <IconMinus />
            </button>

            <p className="card-desc">{count}</p>
            <button
              className="card_button"
              onClick={() => {
                onClickPlus();
              }}
            >
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
      {/*      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <button
          className="card_button"
          onClick={() => {
            setSize(20);
          }}
        >
          <p
            style={{
              fontWeight: size === 20 ? 700 : 500,
            }}
            className="card-desc"
          >
            20
          </p>
        </button>

        <p className="card-desc">|</p>
        <button
          className="card_button"
          onClick={() => {
            setSize(30);
          }}
        >
          <p
            style={{ fontWeight: size === 30 ? 700 : 500 }}
            className="card-desc"
          >
            30
          </p>
        </button>
      </div> */}
    </div>
  );
};

export default BasketButton;
