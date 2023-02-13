import React, { useEffect, useState } from "react";
import Card from "view/card/component/card";
import "../styles/product_listing_page_styles.scss";
import { useNavigate } from "react-router";
import { PizzaItem } from "model/model";
import Filter from "./filter/filter";
import SortComponent from "./sort_component";
import ContainerBox from "core/component/box/container_box";
import { Size, useWindowSize } from "core/custom-hook/use_size";
import Loader from "view/pre-loading/component/loading";
import ErrorPage from "view/error-page/components/error_page";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { fetchPizza } from "store/reducer/pizza_slice";

const ProductListingPage = () => {
  const navigate = useNavigate();
  const size: Size = useWindowSize();
  const windowHeight = size?.height! - 220;
  const data = useSelector((state: RootState) => state.pizzaSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPizza() as any);
  }, []);

  return (
    <ContainerBox
      child={
        <div>
          {data && data.loading && <Loader />}
          {data && data.error && <ErrorPage />}
          {data && data.pizzas && (
            <div className="product-listing-content">
              <Filter height={`${windowHeight + 60}px`} />
              <div className="search-products-container">
                <div className="search-result-title">
                  <p className="listing-result">
                    listing {data.pizzas.length} results
                  </p>
                  <SortComponent />
                </div>
                <div
                  style={{
                    height: `${windowHeight}px`,
                    maxHeight: `${windowHeight}px`,
                  }}
                  className="product-listing-page"
                >
                  {data.pizzas.map((item: PizzaItem) => {
                    return <Card key={item.id} pizza={item} isCard="isCard" />;
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      }
    />
  );
};

export default ProductListingPage;
