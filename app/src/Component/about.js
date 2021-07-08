import React from "react";
import "./css/about.css";

import image2 from "./images/img3.jpg";
import image4 from "./images/img6.jpg";
import image5 from "./images/img5.jpg";
import image3 from "./images/img3.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./footer";
import { Link } from "react-router-dom";
const About = (props) => {
  return (
    <>
      <Container
        style={{
          textAlign: "center",
          backgroundImage: `url(${image3})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          color: "white",
          paddingBottom: "100px",
          paddingTop: "100px",
        }}
        fluid
      >
        <p>
          <Link className="link-nav heading1" to="/">
            {props.lang.navb.Home}
          </Link>
          &nbsp;/&nbsp;
          <Link className="link-nav heading1" to="/about">
            {props.lang.navb.About}
          </Link>
        </p>
      </Container>
      <Container
        style={{
          textAlign: "center",
          backgroundColor: "black",

          color: "white",
        }}
        fluid
      >
        <h1
          style={{ paddingTop: " 50px", paddingBottom: "50px" }}
          className="font title"
        >
          {props.lang.about.head}
        </h1>
        <p
          style={{
            paddingLeft: " 70px",
            paddingRight: "70px",
            paddingBottom: "50px",
            marginBottom: "0px",
          }}
          className="subfont"
        >
          {props.lang.about.desc}
        </p>
      </Container>

      <Container
        fluid
        style={{
          backgroundColor: "black",
        }}
      >
        <Row>
          <Col lg={true}>
            <h1
              style={{
                paddingLeft: "50px",
                paddingTop: "150px",
              }}
              className="font title"
            >
              {props.lang.about.head2}
            </h1>
            <p
              style={{
                paddingLeft: "50px",
                paddingTop: "20px",
                color: "whitesmoke",
              }}
              className="subfont"
            >
              {props.lang.about.desc2}
            </p>
          </Col>
          <Col lg={true}>
            <img
              style={{
                padding: "50px",
                borderRadius: "60px",
              }}
              src={image2}
              alt="img"
            ></img>
          </Col>
        </Row>
        <Row>
          <Col lg={true}>
            <img
              style={{
                padding: "50px",
                borderRadius: "60px",
              }}
              src={image4}
              alt="img"
            ></img>
          </Col>
          <Col lg={true}>
            <h1
              style={{
                paddingLeft: "50px",
                paddingTop: "150px",

                lineHeight: "1.5",
              }}
              className="font title"
            >
              {props.lang.about.head3}
            </h1>
            <p
              style={{
                paddingLeft: "50px",
                paddingTop: "20px",
                color: "whitesmoke",
              }}
              className="subfont"
            >
              {props.lang.about.desc3}
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={true}>
            <h1
              style={{
                paddingLeft: "50px",
                paddingTop: "150px",
              }}
              className="font title"
            >
              {props.lang.about.head4}
            </h1>
            <p
              style={{
                paddingLeft: "50px",
                paddingTop: "20px",
                color: "whitesmoke",
              }}
              className="subfont"
            >
              {props.lang.about.desc4}
            </p>
          </Col>
          <Col lg={true}>
            <img
              style={{
                padding: "50px",
                borderRadius: "60px",
              }}
              src={image5}
              alt="img"
            ></img>
          </Col>
        </Row>
      </Container>
      <Container fluid="true">
        <Footer lang={props.lang} />
      </Container>
    </>
  );
};

export default About;
