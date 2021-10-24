import React from "react";
import reactDom from "react-dom";
import "../Css/Picture.css";

export default function PictureDisplay(props) {
  const { pictures } = props;
  return (
    <React.Fragment>
      <div className="container">
        {pictures.map((picture) => {
          return (
            <div className="pictureDetail">
              <img
                src={`./images/${picture["photo_name"]}`}
                alt={picture["photo_name"]}
              />
              likes
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
