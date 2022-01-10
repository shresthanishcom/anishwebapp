import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Css/Introduction.css";
import ControlledCarousel from "./Common/ControlledCarousel";
import PhotoDisplay from "./PhotoDisplay";

export default class Introduction extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="Container"
          //   style={{ backgroundImage: 'url("./images/anish2.jpg")' }}
        >
          <div className="typewriter">
            <h1>Hi! I am anish Shrestha</h1>
            <PhotoDisplay />
            <ControlledCarousel />

            <div className="images">
              <img src="./images/anish3.jpg" alt="anish shrestha pic" />
              <img src="./images/anish5.jpg" alt="anish shrestha photo1" />
              <img src="./images/anish7.jpg" alt="anish shrestha photo2" />
              <img src="./images/anish9.jpg" alt="anish shrestha photo3" />
              <img src="./images/anish11.jpg" alt="anish shrestha photo4" />
              <img src="./images/anish10.jpg" alt="anish shrestha photo5" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
