import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import PictureDisplay from "./Common/PictureDisplay";
import store from "../../redux/store";

export const Photos = () => {
  // const images = useDispatch("ADD_IMAGES");
  const [pictureState, setPictureState] = useState([]);

  useEffect(async () => {
    await axios
      .get("http://localhost:5000/pictures/")
      .then((res) => {
        setPictureState(res.data);
      })
      .catch((err) => {
        setPictureState([]);
      });
  }, []);

  const reduxStore = store.dispatch({
    type: "ADD_IMAGES",
    payload: {
      images: pictureState,
    },
  });

  return (
    <React.Fragment>
      <PictureDisplay pictures={reduxStore["payload"]["images"]} />
      {/* <div className="images">
        <img src="./images/anish3.jpg" alt="anish shrestha pic" />
        <img src="./images/anish5.jpg" alt="anish shrestha photo1" />
        <img src="./images/anish7.jpg" alt="anish shrestha photo2" />
        <img src="./images/anish9.jpg" alt="anish shrestha photo3" />
        <img src="./images/anish11.jpg" alt="anish shrestha photo4" />
        <img src="./images/anish10.jpg" alt="anish shrestha photo5" />
      </div> */}
    </React.Fragment>
  );
};
