import React from "react";

const SliderCard = ({
  imgUrl,
  movieName,
  storyLine,
  release,
  linkVideo,
  unique,
  ...rest
}) => {
  return (
    <div className="agile_tv_series_grid">
      <div className="col-md-6 agile_tv_series_grid_left">
        <div className="w3ls_market_video_grid1">
          <img src={imgUrl} alt=" " className="img-responsive" />
          <a className="w3_play_icon" href={"#small-dialog" + unique}>
            <span
              className="glyphicon glyphicon-play-circle"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </div>
      <div className="col-md-6 agile_tv_series_grid_right">
        <p className="fexi_header">{movieName}</p>
        <p className="fexi_header_para">
          <span className="conjuring_w3">
            Story Line<label>:</label>
          </span>{" "}
          {storyLine}
        </p>
        <p className="fexi_header_para">
          <span>
            Date of Release<label>:</label>
          </span>{" "}
          {release}{" "}
        </p>
        <p className="fexi_header_para">
          <span>
            Genres<label>:</label>{" "}
          </span>
          <a href="genres.html">Drama</a> |<a href="genres.html">Adventure</a> |
          <a href="genres.html">Family</a>
        </p>
        <p className="fexi_header_para fexi_header_para1">
          <span>
            Star Rating<label>:</label>
          </span>
          <a href="#">
            <i className="fa fa-star" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fa fa-star" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fa fa-star-half-o" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </a>
        </p>
      </div>
      <div id={"small-dialog" + unique} className="mfp-hide">
        <iframe title={unique} src={linkVideo}></iframe>
      </div>
      <div className="clearfix"> </div>
    </div>
  );
};

export default SliderCard;
