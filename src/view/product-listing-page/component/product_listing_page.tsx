import React, { useEffect, useRef, useState } from "react";
import Card from "view/card/component/card";
import "../styles/product_listing_page_styles.scss";
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
import { IconFilter } from "core/component/icon/icon";

const ProductListingPage = () => {
  const filterDivRef = useRef<HTMLDivElement>(null);
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      filterDivRef.current &&
      !filterDivRef.current.contains(event.target as Node)
    ) {
      setShowFilter(false);
    }
  };

  const size: Size = useWindowSize();
  const windowHeight = size?.height! - 220;
  const data = useSelector((state: RootState) => state.pizzaSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizza() as any);
    document.addEventListener("click", handleOutsideClick, true);

    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, []);

  return (
    <div>
      {data && data.loading && <Loader />}
      {data && data.error && <ErrorPage />}
      {data && data.pizzas && (
        <ContainerBox
          child={
            <div>
              {data.pizzas && (
                <div className="product-listing-content">
                  <div className="filterDestop">
                    <Filter height={`${windowHeight + 60}px`} />
                  </div>
                  <div className="search-products-container">
                    <div className="search-result-title">
                      <div className="row-content">
                        <div className="filterMobile">
                          <button
                            onClick={() => {
                              setShowFilter(!showFilter);
                            }}
                            style={{
                              backgroundColor: showFilter
                                ? "#cac8c8"
                                : "#f7f7f7",
                            }}
                            className="filterContentButton"
                          >
                            <IconFilter />
                          </button>
                          {showFilter && (
                            <div
                              ref={filterDivRef}
                              style={{
                                position: "absolute",
                                left: "40px",
                              }}
                            >
                              <Filter height={`${windowHeight + 60}px`} />
                            </div>
                          )}
                        </div>

                        <p className="listing-result">
                          listing {data.pizzas.length} results
                        </p>
                      </div>
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
                        return (
                          <Card key={item.id} pizza={item} isCard="isCard" />
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          }
        />
      )}
    </div>
  );
};

export default ProductListingPage;
