import React, { Component } from "react";
import { API_URL, API_KEY } from "../config";
import Navigation from "../components/Navigation";
import CommentPane from "../components/CommentPane";
import CustomCarousel from "../components/CustomCarousel";

class Movie extends Component {
  //   state = {
  //     movie: null,
  //     actors: null,
  //     directors: [],
  //     loading: false
  //   };

  //   componentDidMount() {
  //     // ES6 destructuring the props
  //     const { movieId } = this.props.match.params;

  //     if (localStorage.getItem(`${movieId}`)) {
  //       let state = JSON.parse(localStorage.getItem(`${movieId}`));
  //       this.setState({ ...state });
  //     } else {
  //       this.setState({ loading: true });
  //       // First fetch the movie ...
  //       let endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  //       this.fetchItems(endpoint);
  //     }
  //   }

  //   fetchItems = endpoint => {
  //     // ES6 destructuring the props
  //     const { movieId } = this.props.match.params;

  //     fetch(endpoint)
  //       .then(result => result.json())
  //       .then(result => {
  //         if (result.status_code) {
  //           // If we don't find any movie
  //           this.setState({ loading: false });
  //         } else {
  //           this.setState({ movie: result }, () => {
  //             // ... then fetch actors in the setState callback function
  //             let endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
  //             fetch(endpoint)
  //               .then(result => result.json())
  //               .then(result => {
  //                 const directors = result.crew.filter(
  //                   member => member.job === "Director"
  //                 );

  //                 this.setState(
  //                   {
  //                     actors: result.cast,
  //                     directors,
  //                     loading: false
  //                   },
  //                   () => {
  //                     localStorage.setItem(
  //                       `${movieId}`,
  //                       JSON.stringify(this.state)
  //                     );
  //                   }
  //                 );
  //               });
  //           });
  //         }
  //       })
  //       .catch(error => console.error("Error:", error));
  //   };

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
                    <div itemScope itemType="https://schema.org/VideoObject">
                      <meta
                        itemProp="uploadDate"
                        content="Fri Nov 22 2019 00:21:19 GMT+0700 (Indochina Time)"
                      />
                      <meta itemProp="name" content="Facebook" />
                      <meta itemProp="duration" content="PT10.138S" />
                      <meta
                        itemProp="thumbnailUrl"
                        content="https://content.jwplatform.com/thumbs/SYaJtuLb-1920.jpg"
                      />
                      <meta
                        itemProp="contentUrl"
                        content="https://content.jwplatform.com/videos/SYaJtuLb-e3XcBBmU.mp4"
                      />
                      <div
                        style={{
                          position: "relative",
                          overflow: "hidden",
                          paddingBottom: "56.25%"
                        }}
                      >
                        <iframe
                          src="https://cdn.jwplayer.com/players/SYaJtuLb-T0wXAmi0.html"
                          width="100%"
                          height="100%"
                          frameBorder={0}
                          scrolling="auto"
                          title="Facebook"
                          style={{ position: "absolute" }}
                          allowFullScreen
                        ></iframe>
                      </div>
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
                        <img src="images/m2.jpg" alt="" />
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
                      <p className="views">2,114,200 views </p>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  <div className="single-right-grids">
                    <div className="col-md-4 single-right-grid-left">
                      <a href="single.html">
                        <img src="images/m3.jpg" alt="" />
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
                        <img src="images/m4.jpg" alt="" />
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
                        <img src="images/m5.jpg" alt="" />
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
                        <img src="images/c5.jpg" alt="" />
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
                        <img src="images/m6.jpg" alt="" />
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
