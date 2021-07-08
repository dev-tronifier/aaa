import React from "react";
import { Link } from "react-router-dom";
import "./css/footer.css";
import "font-awesome/css/font-awesome.min.css";

function Footer(props) {
  return (
    <>
      <section className="contact-area" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-content text-center">
                <Link to="/">
                  <img
                    src="logo3.png"
                    alt="logo"
                    style={{ height: "150px", width: "200px" }}
                  ></img>
                </Link>

                <p className="subfont">
                  <Link className="link-nav heading1" to="/">
                    {props.lang.navb.Home}
                  </Link>
                  &nbsp; | &nbsp;
                  <Link className="link-nav heading1" to="/about">
                    {props.lang.navb.About}
                  </Link>
                  &nbsp; | &nbsp;
                  <Link className="link-nav heading1" to="/service">
                    {props.lang.navb.Service}
                  </Link>
                  &nbsp; | &nbsp;
                  <Link className="link-nav heading1" to="/contact">
                    {props.lang.navb.Contact}
                  </Link>
                  <br />
                  <br />
                  {props.lang.footer.desc2}
                </p>
                <div className="hr"></div>
                <h6> {props.lang.footer.address}</h6>
                <h6>
                  9415489255<span>|</span>8953427222
                </h6>
                <div className="contact-social">
                  <ul>
                    <li>
                      <a
                        className="hover-target"
                        href="https://wa.me/8953427222"
                      >
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        className="hover-target"
                        href="https://www.facebook.com/Jai-G-111605881159782"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover-target"
                        href="mailto:paragpopular@gmail.com"
                      >
                        <i className="fa fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>
          {props.lang.copy.p1}&nbsp;<img src="logo3.png" alt="logo"></img>
          &nbsp;
          {props.lang.copy.p2}
        </p>
      </footer>
    </>
  );
}

export default Footer;
