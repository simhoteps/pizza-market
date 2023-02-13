import axios from "axios";
import ContainerBox from "core/component/box/container_box";
import { IconBack, IconShopAdd } from "core/component/icon/icon";
import { PizzaItem } from "model/model";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Rating } from "react-simple-star-rating";
import Loader from "view/pre-loading/component/loading";
import "../styles/product_list_styles.scss";

const ProductList = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [pizzaInfo, setpizzaInfo] = useState<PizzaItem>();
  const [size, setSize] = useState<number>();

  useEffect(() => {
    async function getPizza() {
      const response = await axios.get(
        `https://62b38848a36f3a973d239308.mockapi.io/pizzas/${productId}`
      );
      setpizzaInfo(response.data);
    }
    getPizza();
  });

  return (
    <div>
      {pizzaInfo ? (
        <ContainerBox
          child={
            <div className="productListContainer">
              <button
                onClick={() => {
                  navigate("/pizza");
                }}
                className="productListBackBotton"
              >
                {" "}
                <IconBack /> back
              </button>
              <div className="productListContent">
                <img className="descTitlePizzaImg" src={pizzaInfo?.imageUrl} />
                <div className="descTextContainer">
                  <h1 className="descTitlePizza">{pizzaInfo?.title}</h1>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "24px",
                        fontWeight: 700,
                      }}
                    >
                      Price : {pizzaInfo?.price} $
                    </p>
                    <Rating
                      size={20}
                      readonly={true}
                      initialValue={pizzaInfo?.rating}
                    />
                  </div>

                  <p> {pizzaInfo?.description}</p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <button className="descTitlePizzaButton" onClick={() => {}}>
                      ADD BASKET
                    </button>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <p>Sizes:</p>
                      {pizzaInfo?.sizes.map((item) => {
                        return (
                          <button
                            key={item}
                            className="descSicePizzaButton"
                            onClick={() => {
                              setSize(item);
                            }}
                          >
                            <p
                              style={{
                                fontWeight: size === item ? 700 : 500,
                                fontSize: size === item ? 20 : 18,
                              }}
                            >
                              {item}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductList;
