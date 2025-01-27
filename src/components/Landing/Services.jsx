import React from "react";
import Fade from "react-reveal/Fade";
import { HashRouter, Link } from "react-router-dom";
import "./Services.scss";
import Image1 from "../../assets/images/Service.webp";
import Image2 from "../../assets/images/technology.webp";
import Image3 from "../../assets/images/Industry.webp";

function Services() {
  return (
    <div className="container section-margin" id="ser">
      <HashRouter>
        <div className="service-wrapper">
          <Fade left>
            <h3 className="title-margin">OUR SERVICES</h3>
          </Fade>
          <div className="row  justify-content-between px-3">
            <Fade bottom>
              <div className="service-card col-lg-3 col-sm-12 mb-3">
                <Link to="/services" tag={Link}>
                  <img src={Image1} alt=""></img>
                  <h2>Services</h2>
                </Link>
              </div>
              <div className="service-card  col-lg-3 col-sm-12 mb-3">
                <Link to="/technologies" tag={Link}>
                  <img src={Image2} alt=""></img>
                  <h2>Technologies</h2>
                </Link>
              </div>
              <div className="service-card  col-lg-3 col-sm-12 mb-3 ">
                <Link to="/industries" tag={Link}>
                  <img src={Image3} alt=""></img>
                  <h2>Industries</h2>
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default Services;
