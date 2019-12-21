import React, { Component, useState } from "react";
import CommentPane from "../components/CommentPane";
import CustomCarousel from "../components/CustomCarousel";
import VideoPlayer from "../components/VideoPlayer";
import { Breadcrumb } from "react-bootstrap";
import { getOneMovieById } from "../utils/MovieAPI";
import Alert from "react-s-alert";
import { Media } from "react-bootstrap";
import CommentForm from "../components/CommentForm";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      content: ""
    };
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    getOneMovieById(movieId)
      .then(result => this.setState({ movie: result }))
      .catch(err =>
        console.log("Component Movie , can't load infor movie ! ", err)
      );
  }

  render() {
    const { movie } = this.state;
    return (
      <div className="single-page-agile-main">
        <div className="container">
          {/* <!-- /w3l-medile-movies-grids --> */}
          <div className="agileits-single-top">
            <Breadcrumb>
              <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
              <Breadcrumb.Item active>{movie.title}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="single-page-agile-info">
            {/* <!-- /movie-browse-agile --> */}
            <div className="show-top-grids-w3lagile">
              <div className="col-sm-8 single-left">
                <div className="song">
                  <div className="song-info">
                    <h3>{`Phim ${movie.title}`}</h3>
                  </div>
                  <div className="video-grid-single-page-agileits">
                    <VideoPlayer link="https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html" />
                  </div>
                </div>

                <div className="clearfix"> </div>

                <div className="all-comments">
                  {/* <div className="all-comments-info">
                    <p>Comments</p>
                    <div className="agile-info-wthree-box">
                      <form>
                        <input type="text" placeholder="Name" required="" />
                        <textarea placeholder="Message" required=""></textarea>
                        <input type="submit" value="SEND" />
                        <div className="clearfix"> </div>
                      </form>
                    </div>
                  </div> */}
                  <div className="all-comments-info">
                    <p>Bình luận</p>
                    <div className="agile-info-wthree-box">
                      <Media>
                        <Media.Left>
                          <img
                            src="https://lh6.googleusercontent.com/-CDVxvPvmnIs/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3re-xaZRccNeekUjIQ_f5qggAiOgoQ/photo.jpg"
                            alt="thumbnail"
                            height="50"
                            width="50"
                          />
                        </Media.Left>
                        <Media.Body>
                          <Media.Heading>Nội dung</Media.Heading>
                          <CommentForm movieId={movie.id} />
                        </Media.Body>
                      </Media>
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
