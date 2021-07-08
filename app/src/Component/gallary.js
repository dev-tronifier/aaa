import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img from "./images/a.jpg";
import img2 from "./images/img6.jpg";
import img5 from "./images/img5.jpg";
import img4 from "./images/img4.jpg";
const handleDragStart = (e) => e.preventDefault();
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const items = [
  <img
    src={img}
    alt="logo"
    onDragStart={handleDragStart}
    style={{ height: "50vh", width: "100%" }}
  />,
  <img
    src={img2}
    alt="logo"
    onDragStart={handleDragStart}
    style={{ height: "50vh", width: "100%" }}
  />,
  <img
    src={img5}
    alt="logo"
    onDragStart={handleDragStart}
    style={{ height: "50vh", width: "100%" }}
  />,
  <img
    src={img4}
    alt="logo"
    onDragStart={handleDragStart}
    style={{ height: "50vh", width: "100%" }}
  />,
  <img
    src={img}
    alt="logo"
    onDragStart={handleDragStart}
    style={{ height: "50vh", width: "100%" }}
  />,
  <img
    src={img4}
    alt="logo"
    onDragStart={handleDragStart}
    style={{ height: "50vh", width: "100%" }}
    s
  />,
];

const Gallary = () => {
  return (
    <AliceCarousel
      autoPlay
      autoPlayStrategy="none"
      autoPlayInterval={1000}
      animationDuration={1000}
      animationType="fadeout"
      infinite
      mouseTracking
      items={items}
      responsive={responsive}
      disableDotsControls
      disableButtonsControls
      controlsStrategy="alternate"
    />
  );
};
export default Gallary;
