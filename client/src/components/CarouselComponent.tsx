import React, { ReactElement } from "react";
import { Carousel } from "antd";
const contentStyle: React.CSSProperties = {
  height: "460px",
  width:"100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  objectFit:"cover",
};
export function CarouselComponent(): ReactElement {
  return (
    <Carousel className="mt-2" autoplay={true}>
      <div style={contentStyle}>
        <img
        style={contentStyle}
          className="img-slider"
          src="http://localhost:5000/slider/1.jpg"
          alt=""
          crossOrigin="anonymous"
        />
      </div>

      <div style={contentStyle}>
        <img
         style={contentStyle}
          className="img-slider"
          src="http://localhost:5000/slider/2.jpg"
          alt=""
          crossOrigin="anonymous"
        />
      </div>

      <div style={contentStyle}>
        <img
         style={contentStyle}
          className="img-slider"
          src="http://localhost:5000/slider/3.jpg"
          alt=""
          crossOrigin="anonymous"
        />
      </div>
      <div style={contentStyle}>
        <img
         style={contentStyle}
          className="img-slider"
          src="http://localhost:5000/slider/4.jpg"
          alt=""
          crossOrigin="anonymous"
        />
      </div>
    </Carousel>
  );
}
