import React, { useState } from "react";
import reactDom from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

import "../Css/Picture.css";

export default function PictureDisplay(props) {
  const { pictures } = props;

  const [likeIcon, setLikeIcon] = useState(false);

  const onClickLike = (event) => {
    setLikeIcon(true);
  };

  return (
    <React.Fragment>
      <div className="container">
        {pictures.map((picture) => {
          return (
            <div className="picture-container">
              <img
                src={`./images/${picture["photo_name"]}`}
                alt={picture["photo_name"]}
              />
              <div className="picture-detail">
                <FontAwesomeIcon
                  icon={likeIcon ? faThumbsUp : faThumbsDown}
                  onClick={(event) => {
                    onClickLike(event);
                  }}
                />

                {picture["like_count"]}
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
