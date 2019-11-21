import React, { useEffect } from "react";
import "../assets/css/jquery.slidey.min.css";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";
import image7 from "../assets/images/7.jpg";
import "../assets/js/jquery.slidey.js";
import "dotdotdot-js";
const Banner = () => {
  useEffect(() => {
    window.$("#slidey").slidey({
      interval: 8000,
      listCount: 5,
      autoplay: false,
      showList: true
    });
    // window.$(".slidey-list-description").dotdotdot();
  });
  return (
    <div id="slidey" style={{ display: "none" }}>
      <ul>
        <li>
          <img src={image5} alt=" " />
          <p className="title">Tarzan</p>
          <p className="description">
            {" "}
            Tarzan, having acclimated to life in London, is called back to his
            former home in the jungle to investigate the activities at a mining
            encampment.
          </p>
        </li>
        <li>
          <img src={image2} alt=" " />
          <p className="title">Maximum Ride</p>
          <p className="description">
            Six children, genetically cross-bred with avian DNA, take flight
            around the country to discover their origins. Along the way, their
            mysterious past is ...
          </p>
        </li>
        <li>
          <img src={image3} alt=" " />
          <p className="title">Independence</p>
          <p className="description">
            The fate of humanity hangs in the balance as the U.S. President and
            citizens decide if these aliens are to be trusted ...or feared.
          </p>
        </li>
        <li>
          <img src={image4} alt=" " />
          <p className="title">Central Intelligence</p>
          <p className="description">
            Bullied as a teen for being overweight, Bob Stone (Dwayne Johnson)
            shows up to his high school reunion looking fit and muscular.
            Claiming to be on a top-secret ...
          </p>
        </li>
        <li>
          <img src={image6} alt=" " />
          <p className="title">Ice Age</p>
          <p className="description">
            In the film's epilogue, Scrat keeps struggling to control the alien
            ship until it crashes on Mars, destroying all life on the planet.
          </p>
        </li>
        <li>
          <img src={image7} alt=" " />
          <p className="title">X - Man</p>
          <p className="description">
            In 1977, paranormal investigators Ed (Patrick Wilson) and Lorraine
            Warren come out of a self-imposed sabbatical to travel to Enfield, a
            borough in north ...
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Banner;
