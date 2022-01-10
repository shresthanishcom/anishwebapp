import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Css/Footer.css";

export default class Footer extends Component {
  currentDate = () => {
    let date = new Date();
    return String(date.getFullYear());
  };
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-2 col-6 brand-info">
            Anish Shrestha {this.currentDate()}
          </div>
          <div className="col-lg-7 col-md-7 col-sm-6 col-xs-4 col-7 brand-link">
            <a
              className="clickable facebook"
              href="https://www.facebook.com/anishresthanishrestha"
            >
              Facebook
              <FontAwesomeIcon color={"blue"} icon={["fab", "facebook"]} />
            </a>
            <a
              className="clickable instagram"
              href="https://www.instagram.com/a.n.i.s.h.r.e.s.t.h.a"
            >
              Instagram
              <FontAwesomeIcon color={"red"} icon={["fab", "instagram"]} />
            </a>
            <a className="clickable twitter" href="https://www.twitter.com">
              Twitter
              <FontAwesomeIcon color={"blue"} icon={["fab", "twitter"]} />
            </a>
            <a
              className="clickable tiktok"
              href="https://www.tiktok.com/@shresthanish?lang=en"
            >
              Tiktok
              <FontAwesomeIcon icon={["fab", "tiktok"]} />
            </a>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-3 col-xs-6 col-5 anishImg">
            <img src="./images/anishSpeech.png" alt="anish in speaking" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
