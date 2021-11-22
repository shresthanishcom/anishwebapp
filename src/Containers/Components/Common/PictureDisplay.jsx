import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

import "../Css/Picture.css";
import { useDispatch } from "react-redux";

export default function PictureDisplay(props) {
  const { pictures } = props;

  const onClickLike = (event) => {
    console.log(event.target.status);
    // useDispatch("SetLike",{id: event.target.id})
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
              {console.log(picture)}
              <div className="picture-detail">
                <FontAwesomeIcon
                  id={picture.photo_id}
                  status={`"${picture.likeStatus}"`}
                  icon={
                    picture["likeStatus"] === "liked"
                      ? faThumbsUp
                      : faThumbsDown
                  }
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
