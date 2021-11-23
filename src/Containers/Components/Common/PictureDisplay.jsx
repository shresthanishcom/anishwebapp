import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

import "../Css/Picture.css";
import { useDispatch } from "react-redux";

export default function PictureDisplay(props) {
  const dispatch = useDispatch();
  const { pictures } = props;

  const onClickLike = (event) => {
    console.log(
      dispatch({ type: "SET_LIKE", payload: { id: event.currentTarget.id } })
    );
  };

  return (
    <React.Fragment>
      <div className="container">
        {pictures.map((picture) => {
          return (
            <div className="picture-container">
              <img
                src={`./images/${picture["photo_name"]}`}
                name={picture.likeStatus}
                alt={picture["photo_name"]}
              />
              <div className="picture-detail">
                <FontAwesomeIcon
                  icon={
                    picture["likeStatus"] === "liked"
                      ? faThumbsUp
                      : faThumbsDown
                  }
                  name={picture.likeStatus}
                  id={picture.photo_id}
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
