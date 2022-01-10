import React from "react";
import "./Css/main.css";

export default function PhotoDisplay() {
  return (
    <React.Fragment>
      <div className="sunset-image">
        <img src="./images/Sunset.png" alt="anish looking sunset" />
      </div>
      <div className="anish-detail">
        <div className="anish-image">
          <img src="./images/anish3d.png" alt="anish with 3d text" />
        </div>
        <div className="anish-description">
          <p>
            Ok! this is me Anish Shrestha. I have a dream on doing great
            projects where my projects could help needy people. I love Nepal my
            country and have belief that tourism sector is the only thing we can
            grow and sell to this world.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
