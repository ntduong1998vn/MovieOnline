import React, { useEffect, useRef } from "react";
import SliderCard from "../components/SliderCard";
import "../assets/css/flexslider.css";
import { SliderCardArray } from "../variable";
import "../assets/js/jquery.magnific-popup";
const PopularMovie = () => {
  const flexEl = useRef(null);
  // const magnificEl = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "assets/js/jquery.flexslider.js";
    script.defer = true;
    flexEl.current.appendChild(script);
  });
  useEffect(() => {
    window.$(window).load(function() {
      window.$(".flexslider").flexslider({
        animation: "slide",
        start: function(slider) {
          window.$("body").removeClass("loading");
        }
      });
    });
  });
  useEffect(() => {
    window.$(document).ready(function() {
      window.$(".w3_play_icon,.w3_play_icon1,.w3_play_icon2").magnificPopup({
        type: "inline",
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: "auto",
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: "my-mfp-zoom-in"
      });
    });
  });
  return (
    <React.Fragment>
      <div className="Latest-tv-series">
        <h4 className="latest-text w3_latest_text w3_home_popular">
          Most Popular Movies
        </h4>
        <div className="container" ref={flexEl}>
          <section className="slider">
            <div className="flexslider">
              <ul className="slides">
                {SliderCardArray.map((movie, index) => {
                  return (
                    <li key={index}>
                      <SliderCard
                        imgUrl={movie.imgUrl}
                        movieName={movie.movieName}
                        storyLine={movie.storyLine}
                        release={movie.release}
                        linkVideo={movie.hrefVideo}
                        unique={movie.id}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
      {/* <div id="small-dialog" className="mfp-hide">
        <iframe src="https://player.vimeo.com/video/164819130?title=0&byline=0"></iframe>
      </div>
      <div id="small-dialog1" className="mfp-hide">
        <iframe src="https://player.vimeo.com/video/148284736"></iframe>
      </div>
      <div id="small-dialog2" className="mfp-hide">
        <iframe src="https://player.vimeo.com/video/165197924?color=ffffff&title=0&byline=0&portrait=0"></iframe>
      </div> */}
    </React.Fragment>
  );
};
export default PopularMovie;
