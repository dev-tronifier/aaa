import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./footer";
import Gallary from "./gallary";
import "./css/slider-animations.css";
import "./css/home.css";
import image1 from "./images/img6.jpg";
import img5 from "./images/img5.jpg";
import img4 from "./images/img3.jpg";
import img6 from "./images/123.png";
import om from "./images/om.png";
import chef from "./images/chef.png";
import Slider from "react-animated-slider";
import "react-animated-slider/build/vertical.css";

function Home(props) {
  return (
    <>
      {/*  <Container fluid="true">
        <Carousel interval={1000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img4}
              style={{ height: "93vh" }}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="font">
                <img
                  src={om}
                  style={{
                    height: "30px",
                    paddingBottom: "5px",
                  }}
                  alt="logo"
                ></img>{" "}
                {props.lang.home.slide1.title}
              </h3>
              <p className="subfont">
                <img
                  src={chef}
                  style={{
                    height: "35px",
                    paddingBottom: "5px",
                  }}
                  alt="logo"
                ></img>{" "}
                {props.lang.home.slide1.des}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img5}
              style={{ height: "93vh" }}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className="font">
                <img
                  src={om}
                  style={{
                    height: "30px",
                    paddingBottom: "5px",
                  }}
                  alt="logo"
                ></img>{" "}
                {props.lang.home.slide2.title}
              </h3>
              <p className="subfont">
                <img
                  src={chef}
                  style={{
                    height: "35px",
                    paddingBottom: "5px",
                  }}
                  alt="logo"
                ></img>{" "}
                {props.lang.home.slide2.des}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image1}
              style={{ height: "93vh" }}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="font">
                <img
                  src={om}
                  style={{
                    height: "30px",
                    paddingBottom: "5px",
                  }}
                  alt="logo"
                ></img>{" "}
                {props.lang.home.slide3.title}
              </h3>
              <p className="subfont">
                <img
                  src={chef}
                  style={{
                    height: "35px",
                    paddingBottom: "5px",
                  }}
                  alt="logo"
                ></img>{" "}
                {props.lang.home.slide3.des}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
     */}
      <Container fluid="true">
        <Slider className="slider-wrapper" autoplay={2200}>
          <div
            key={1}
            className="slider-content"
            style={{
              background: `url('${img4}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <h1 className="font">
                <img
                  src={om}
                  style={{
                    height: "50px",
                    paddingBottom: "5px",
                  }}
                  alt="logo"
                ></img>{" "}
                {props.lang.home.slide3.title}
              </h1>
              <p>
                <img
                  src={chef}
                  style={{
                    height: "35px",
                    paddingBottom: "5px",
                  }}
                  alt="logo"
                ></img>{" "}
                {props.lang.home.slide3.des}
              </p>
            </div>
          </div>
          <div
            key={2}
            className="slider-content"
            style={{
              background: `url('${image1}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <h1 className="font">
                <img
                  src={om}
                  style={{
                    height: "50px",
                    paddingBottom: "5px",
                  }}
                  alt="logo"
                ></img>{" "}
                {props.lang.home.slide3.title}
              </h1>
              <p>
                <img
                  src={chef}
                  style={{
                    height: "35px",
                    paddingBottom: "5px",
                  }}
                  alt="logo"
                ></img>{" "}
                {props.lang.home.slide3.des}
              </p>
            </div>
          </div>
          <div
            key={3}
            className="slider-content"
            style={{
              background: `url('${img5}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <h1 className="font">
                <img
                  src={om}
                  style={{
                    height: "50px",
                    paddingBottom: "5px",
                  }}
                  alt="logo"
                ></img>{" "}
                {props.lang.home.slide3.title}
              </h1>
              <p>
                <img
                  src={chef}
                  style={{
                    height: "35px",
                    paddingBottom: "5px",
                  }}
                  alt="logo"
                ></img>{" "}
                {props.lang.home.slide3.des}
              </p>
            </div>
          </div>
        </Slider>
      </Container>
      <Container fluid="true">
        <div
          style={{
            textAlign: "center",
            paddingTop: "100px",
            backgroundColor: "black",
            color: "white",
            paddingBottom: "100px",
            paddingLeft: "100px",
            paddingRight: "100px",
          }}
        >
          <h2
            className="font title"
            style={{
              paddingBottom: "29px",
            }}
          >
            {props.lang.home.head2}
            <img
              src={img6}
              style={{
                height: "50px",
                width: "50px",
              }}
              alt="logo"
            ></img>
          </h2>

          <p className="subfont">{props.lang.home.des2}</p>
        </div>
      </Container>
      <Gallary />
      <Container fluid="true">
        <Footer lang={props.lang} />
      </Container>
    </>
  );
}

export default Home;
