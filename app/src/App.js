import "./App.css";
import About from "./Component/about";
import Contact from "./Component/contact";

import Home from "./Component/home";
import Service from "./Component/service";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { en, hn } from "../src/Component/language";
import No from "./Component/404";
function App() {
  const [obj, setobj] = useState(en);

  return (
    <div>
      <Navbar
        sticky="top"
        style={{
          backgroundColor: "var(--themeColor)",

          fontSize: "20px",

          boxShadow: "0 1.5px 2px black",
        }}
        expand="lg"
      >
        <Navbar.Brand style={{ paddingLeft: "50px" }}>
          <Link to="/">
            <img
              src="./logo3.png"
              alt="logo"
              style={{ height: "70px", width: "90px" }}
            ></img>
          </Link>
        </Navbar.Brand>
        <NavDropdown
          title={<i class="fa fa-language" aria-hidden="true"></i>}
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item onClick={() => setobj(hn)}>
            <i class="flag-icon flag-icon-in" aria-hidden="true"></i>
            &nbsp;हिंदी
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => setobj(en)}>
            <i class="flag-icon flag-icon-gb " aria-hidden="true"></i>
            &nbsp;English
          </NavDropdown.Item>
        </NavDropdown>
        <Navbar.Toggle />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ml-auto my-2 my-lg-0 font"
            style={{ maxHeight: "100px", color: "black" }}
            navbarScroll
          >
            <Nav.Link>
              <Link className="link-nav heading1" to="/">
                {obj.navb.Home}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link-nav heading1" to="/about">
                {obj.navb.About}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link-nav heading1" to="/service">
                {obj.navb.Service}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link-nav heading1" to="/contact">
                {obj.navb.Contact}
              </Link>
            </Nav.Link>
            <Nav.Link href={obj.navb.link}>
              <div className="link-nav heading1">{obj.navb.Catalogue}</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/about">
          <About lang={obj} />
        </Route>
        <Route exact path="/service">
          <Service lang={obj} />
        </Route>
        <Route exact path="/">
          <Home lang={obj} />
        </Route>
        <Route exact path="/contact">
          <Contact lang={obj} />
        </Route>
        <Route path="/">
          <No lang={obj} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
