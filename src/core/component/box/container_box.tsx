import { Size, useWindowSize } from "core/custom-hook/use_size";
import React from "react";

const ContainerBox = ({ child }: { child?: any }) => {
  const size: Size = useWindowSize();
  const windowHeight = size?.height! - 112;
  const windowWidth = size?.width!;
  return (
    <div
      /*  className="globalContainerBox" */
      style={{
        height: `${windowHeight}px`,
        minHeight: `${windowHeight}px`,
        maxHeight: `${windowHeight}px`,
      }}
    >
      {child}
    </div>
  );
};

export default ContainerBox;
