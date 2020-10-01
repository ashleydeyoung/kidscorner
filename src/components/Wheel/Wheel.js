import React from "react";
import img from "../../images/down.png"

import "./Wheel.css";

class Wheel extends React.Component {
  handleSpin = () => {
    let x = 1024;
    let y = 9999;

    let deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById("box").style.transform = "rotate(" + deg + "deg)";

    let element = document.getElementById("mainbox");
    element.classList.remove("animate");
    setTimeout(function () {
      element.classList.add("animate");
    }, 5000);
  };
  render() {
    return (
      <div id="mainbox" className="mainbox">
        <div className="button mt-4">
          <button className="btn btn-danger spin" onClick={this.handleSpin}>
            SPIN
          </button>
        </div>
          <div>
          <img className="arrow" src= {img} alt="arrow"/>
          </div>
        <div id="box" className="box">
          <div className="box1">
            <span className="span1">
              <b>30</b>
            </span>
            <span className="span2">
              <b>45</b>
            </span>
            <span className="span3">
              <b>60</b>
            </span>
            <span className="span4">
              <b>75</b>
            </span>
            <span className="span5">
              <b>20</b>
            </span>
            <span className="span6">
              <b>0</b>
            </span>
            <span className="span7">
              <b>90</b>
            </span>
            <span className="span8">
              <b>100</b>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Wheel;
