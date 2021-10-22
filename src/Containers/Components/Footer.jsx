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
          <div className="col-md-4 brandinfo">
            Anish Shrestha {this.currentDate()}
          </div>
          <div className="col-md-8 col-lg-6 brandlinks">
            <a
              className="clickable facebook"
              href="https://www.facebook.com/anishresthanishrestha/"
            >
              Facebook
              <FontAwesomeIcon color={"blue"} icon={["fab", "facebook"]} />
            </a>
            <a
              className="clickable instagram"
              href="https://www.instagram.com/a.n.i.s.h.r.e.s.t.h.a/"
            >
              Instagram
              <FontAwesomeIcon color={"red"} icon={["fab", "instagram"]} />
            </a>
            <a className="clickable twitter" href="twitter.com">
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
        </div>
      </React.Fragment>
    );
  }
}
