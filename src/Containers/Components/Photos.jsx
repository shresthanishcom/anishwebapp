import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export const Photos = () => {
  const state = useSelector((state) => state);
  console.log(state);
  useEffect(async () => {
    for (let i = 0; i < 11; i++) {
      await axios
        .post("http://localhost:5000/pictures/addphotos/", {
          photo_id: i,
          photo_name: `anish${i}.jpg`,
          like_count: "0",
        })
        .then(() => console.log("posted" + i))
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <React.Fragment>
      <div className="images">
        <img src="./images/anish3.jpg" alt="anish shrestha pic" />
        <img src="./images/anish5.jpg" alt="anish shrestha photo1" />
        <img src="./images/anish7.jpg" alt="anish shrestha photo2" />
        <img src="./images/anish9.jpg" alt="anish shrestha photo3" />
        <img src="./images/anish11.jpg" alt="anish shrestha photo4" />
        <img src="./images/anish10.jpg" alt="anish shrestha photo5" />
      </div>
    </React.Fragment>
  );
};
