import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import Footer from "./footer";
import { Link } from "react-router-dom";
import image1 from "./images/img3.jpg";
import image3 from "./images/img6.jpg";
import emailjs from "emailjs-com";

function Contact(props) {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        e.target,
        process.env.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
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
          <Link className="link-nav heading1" to="/contact">
            {props.lang.navb.Contact}
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
        <Container>
          <h1
            style={{
              paddingTop: " 50px",
              paddingBottom: "50px",
            }}
            className="font title"
          >
            {props.lang.contact.head}
          </h1>
          <Row
            style={{
              paddingBottom: "50px",
              fontSize: "15px",
            }}
          >
            <Col lg={true}>
              <a href="https://goo.gl/maps/yvfatuJNvEmxSAde7">
                <i
                  style={{
                    paddingBottom: "20px",
                    fontSize: "30px",
                  }}
                  className="fa fa-map-marker link "
                ></i>
              </a>
              <p
                style={{
                  paddingLeft: "50px",
                  paddingRight: "50px",
                }}
              >
                {props.lang.contact.address}
              </p>
            </Col>
            <Col lg={true}>
              <i
                className="fa fa-phone link"
                style={{
                  paddingBottom: "20px",
                  fontSize: "30px",
                }}
              ></i>
              <p>9415489255</p>
            </Col>
            <Col lg={true}>
              <a href="https://www.facebook.com/Jai-G-111605881159782">
                {" "}
                <i
                  className="fa fa-facebook link"
                  style={{
                    paddingBottom: "20px",

                    fontSize: "30px",
                  }}
                ></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://wa.me/8953427222">
                {" "}
                <i
                  className="fa fa-whatsapp link"
                  style={{
                    paddingBottom: "20px",

                    fontSize: "30px",
                  }}
                ></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="mailto:paragpopular@gmail.com">
                <i
                  className="fa fa-envelope link"
                  style={{
                    paddingBottom: "20px",

                    fontSize: "30px",
                  }}
                ></i>
              </a>
              <p>{props.lang.contact.we}</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <hr
            style={{
              color: "red",
              backgroundColor: "red",
              height: 2,
              border: "none",
              marginBottom: "0px",
            }}
          />
        </Container>
      </Container>

      <Container fluid>
        <Row
          style={{
            paddingBottom: "50px",
            paddingTop: "50px",
            backgroundColor: "black",
          }}
        >
          <Col
            style={{
              textAlign: "left",
              paddingTop: "90px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
            lg={true}
          >
            <Form onSubmit={sendEmail}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="form-field">
                  {" "}
                  {props.lang.contact.email}
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  style={{ backgroundColor: "inherit", color: "whitesmoke" }}
                  required={true}
                  name="email"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="form-field">
                  {" "}
                  {props.lang.contact.mobile}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={props.lang.contact.mobile}
                  style={{ backgroundColor: "inherit", color: "whitesmoke" }}
                  required={true}
                  name="mobile"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="form-field">
                  {" "}
                  {props.lang.contact.subject}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={props.lang.contact.subject}
                  style={{ backgroundColor: "inherit", color: "whitesmoke" }}
                  required={true}
                  name="subject"
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="form-field">
                  {props.lang.contact.message}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder={props.lang.contact.placeholder}
                  style={{ backgroundColor: "inherit", color: "whitesmoke" }}
                  name="message"
                />
              </Form.Group>
              <div style={{ textAlign: "right" }}>
                <Button
                  variant="danger"
                  type="submit"
                  style={{ width: "90px" }}
                  required={true}
                >
                  {props.lang.contact.send}
                </Button>
              </div>
            </Form>
          </Col>
          <Col lg={true}>
            <img
              style={{
                padding: "50px",
                borderRadius: "60px",
              }}
              src={image3}
              alt="img"
            ></img>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        style={{
          padding: "0px",
          backgroundColor: "black",
        }}
      >
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.586818716521!2d79.88193241506525!3d27.85323878273179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399fbc8da321804f%3A0xcf31bb3c9ca77c87!2sK.D%20Factory!5e0!3m2!1sen!2sus!4v1623915663787!5m2!1sen!2sus"
          style={{
            width: "100%",
            height: "400px",
            paddingBottom: "0px",
            border: "none",
          }}
        ></iframe>
      </Container>
      <Container fluid="true">
        <Footer lang={props.lang} />
      </Container>
    </>
  );
}

export default Contact;
