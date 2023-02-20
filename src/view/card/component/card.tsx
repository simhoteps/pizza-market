import {
  IconShop,
  IconShopAdd,
  IconShopRemove,
} from "core/component/icon/icon";
import { PizzaItem } from "model/model";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "../styles/card_styles.scss";
import BasketButton from "./basket_button";

const Card = ({ pizza, isCard }: { pizza: PizzaItem; isCard: string }) => {
  const navigate = useNavigate();

  return (
    <div className="card-content">
      <button
        onClick={() => {
          navigate("/pizza/" + pizza.id);
        }}
        className="card_button"
      >
        <img className="card-img" src={pizza.imageUrl} />
      </button>

      <div className="text-content">
        <p className="card-title">{pizza.title}</p>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p className="card-desc">{pizza.price} $</p>
          <Rating size={16} readonly={true} initialValue={pizza.rating} />
        </div>
        <BasketButton pizza={pizza} isCard={isCard} />
      </div>
    </div>
  );
};

export default Card;
