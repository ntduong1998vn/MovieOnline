import React, { Component } from "react";
import { API_URL, API_KEY } from "../config";
import Navigation from "../components/Navigation";
import CommentPane from "../components/CommentPane";
import CustomCarousel from "../components/CustomCarousel";

class Movie extends Component {

  render() {
    return (
      <div className="single-page-agile-main">
        <div className="container">
          {/* <!-- /w3l-medile-movies-grids --> */}
          <div className="agileits-single-top">
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Single</li>
            </ol>
          </div>
          <div className="single-page-agile-info">
            {/* <!-- /movie-browse-agile --> */}
            <div className="show-top-grids-w3lagile">
              <div className="col-sm-8 single-left">
                <div className="song">
                  <div className="song-info">
                    <h3>THE LEGEND OF TARZAN - Official Trailer 2</h3>
                  </div>
                  <div className="video-grid-single-page-agileits">
                    <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '56.25%' }}>
                      <iframe 
                      src="https://cdn.jwplayer.com/players/5h7bQYQZ-T0wXAmi0.html"
                      width="100%" 
                      height="100%" 
                      frameBorder={0} 
                      scrolling="auto" 
                      title="Btp Sb L1 U06 002-sub-text" 
                      style={{ position: 'absolute' }} allowFullScreen>
                      </iframe>
                    </div>


                  </div>
                </div>

                <div className="clearfix"> </div>

                <div className="all-comments">
                  <div className="all-comments-info">
                    <p>Comments</p>
                    <div className="agile-info-wthree-box">
                      <form>
                        <input type="text" placeholder="Name" required="" />
                        <textarea placeholder="Message" required=""></textarea>
                        <input type="submit" value="SEND" />
                        <div className="clearfix"> </div>
                      </form>
                    </div>
                  </div>

                  <CommentPane />
                </div>
              </div>
              <div className="col-md-4 single-right">
                <h3>Up Next</h3>
                <div className="single-grid-right">
                  <div className="single-right-grids">
                    <div className="col-md-4 single-right-grid-left">
                      <a href="single.html">
                        <img src="images/m1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="col-md-8 single-right-grid-right">
                      <a href="single.html" className="title">
                        {" "}
                        Nullam interdum metus
                      </a>
                      <p className="author">
                        <a href="#" className="author">
                          John Maniya
                        </a>
                      </p>
                      <p className="views">2,114,200 views</p>
                    </div>
                    <div className="clearfix"> </div>
                  </div>


                  <div className="single-right-grids">
                    <div className="col-md-4 single-right-grid-left">
                      <a href="single.html">
                        <img src="images/m15.jpg" alt="" />
                      </a>
                    </div>
                    <div className="col-md-8 single-right-grid-right">
                      <a href="single.html" className="title">
                        {" "}
                        Nullam interdum metus
                      </a>
                      <p className="author">
                        By{" "}
                        <a href="#" className="author">
                          John Maniya
                        </a>
                      </p>
                      <p className="views">2,114,200 views</p>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </div>
              </div>

              <div className="clearfix"> </div>
            </div>
            <div className="w3_agile_banner_bottom_grid">
              <CustomCarousel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
