import React from "react";
import "./Working.scss";
import Fade from "react-reveal/Fade";
import Image1 from "../../assets/images/Working.svg";

function Working() {
  return (
    <div className="container section-margin" id="#working">
      <div className="working-wrapper">
        <Fade left>
          <h3 className="mb-3">HOW WE WORK</h3>
        </Fade>
        <Fade bottom>
          <p className="mb-3"> {/*Add text-center in <p> If text becomes longer than a line */}
            We work in a coordinated and efficient manner which ensures agility
            and a large proportion of work to get done in a short span of time.
          </p>
        </Fade>
        <div className="timeline">
          <Fade bottom>
            <img src={Image1} alt="timeline representing flow of conceptualisation, developing wireframes, prototype development, testing and delivering solution" />
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Working;
