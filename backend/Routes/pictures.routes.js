const router = require("express").Router();

let Picture = require("../Models/picture.model");

router.route("/").get((req, res) => {
  Picture.find()
    .then((pictures) => {
      res.json(pictures);
    })
    .catch((err) => {
      res.status(400).json("Error" + err);
    });
});

router.route("/addphotos").post((req, res) => {
  const pictureDetail = req.body;
  console.log(req.body.photo_id);
  const newPictureDetail = new Picture({
    photo_id: pictureDetail.photo_id,
    photo_name: pictureDetail.photo_name,
    like_count: pictureDetail.like_count,
  });
  newPictureDetail
    .save()
    .then(() => {
      res.status(200).json("success");
    })
    .catch((err) => {
      res.status(400).json("Error ayo haiiiiii" + err);
    });
});

module.exports = router;
