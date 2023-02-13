import React from "react";
import "./basket_styled.scss";
import ContainerBox from "core/component/box/container_box";
import MotorCourier from "core/component/motor-courier/motor_courier";
import { Size, useWindowSize } from "core/custom-hook/use_size";

const Basket = () => {
  const size: Size = useWindowSize();
  const windowHeight = size?.height! - 112;

  return (
    <ContainerBox
      child={
        <div className="basketContent">
          <h1>Basket</h1>

          <MotorCourier />
        </div>
      }
    />
  );
};

export default Basket;
