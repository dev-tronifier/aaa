import React from "react";
import { Container } from "react-bootstrap";

import Footer from "./footer";
import Gallary from "./gallary";
import { Link } from "react-router-dom";
import image1 from "./images/img3.jpg";
function Contact(props) {
  return (
    <>
      <Container
        style={{
          textAlign: "center",
          backgroundImage: `url(${image1})`,
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
          <Link className="link-nav heading1" to="/Service">
            {props.lang.navb.Service}
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
          {props.lang.service.head}
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
          {/*props.lang.service.desc*/}
        </p>
      </Container>
      <Gallary />
      <Container fluid="true">
        <Footer lang={props.lang} />
      </Container>
    </>
  );
}

export default Contact;
