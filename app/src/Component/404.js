import React from "react";
import "./css/404.css";
function No(props) {
  return (
    <div className="whole">
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h3>{props.lang.error.msg1}</h3>
            <h1>
              <span>4</span>
              <span>0</span>
              <span>4</span>
            </h1>
          </div>
          <h2>{props.lang.error.msg2}</h2>
        </div>
      </div>
    </div>
  );
}

export default No;
