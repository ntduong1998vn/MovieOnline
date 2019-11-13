import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { FieldGroup } from "components/FieldGroup/FieldGroup";
import PosterCard from "components/PosterCard/PosterCard.jsx";
import { API_KEY, API_URL, IMAGE_BASE_URL, POSTER_SIZE } from "../config";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      movie: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  // fetchProduct() {
  //   this.setState({ ...this.state, isFetching: true });

  //   // let myHeaders = new Headers();
  //   // myHeaders.append("Content-Type", "application/json");
  //   // myHeaders.append("Accept", "application/json");
  //   // myHeaders.append("Access-Control-Allow-Origin", "http://localhost:8080");
  //   // myHeaders.append("Access-Control-Allow-Credentials", "true");
  //   // myHeaders.append("GET", "POST", "OPTIONS");
  // }
  componentDidMount() {
    this.setState({ isLoading: true });
    const endpoint = `${API_URL}movie/475557?api_key=${API_KEY}&language=en-US`;
    this.fetchMovie(endpoint);
    //this.timer = setInterval(() => this.fetchProduct(), 5000);
  }

  fetchMovie = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        this.setState({
          movie: result,
          isLoading: false
        });
      });
  };

  render() {
    console.log(this.props);
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <p>{this.state.isLoading ? "Fetching data..." : ""}</p>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <ControlLabel>Mã phim</ControlLabel>
                          <FormControl.Static>
                            {this.state.movie.id}
                          </FormControl.Static>
                        </FormGroup>
                      </Col>
                      <Col md={8}>
                        <FieldGroup
                          label="Tên phim"
                          type="text"
                          bsClass="form-control"
                          placeholder="Username"
                          defaultValue={this.state.movie.title}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <FieldGroup
                          label="Số tập"
                          type="text"
                          bsClass="form-control"
                          placeholder="First name"
                          defaultValue="12/24"
                          disabled
                        />
                      </Col>
                      <Col md={6}>
                        <FieldGroup
                          label="Ngày khởi chiếu"
                          type="text"
                          bsClass="form-control"
                          placeholder="Last name"
                          defaultValue={this.state.movie.release_date}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <FieldGroup
                          label="Quốc gia"
                          type="text"
                          bsClass="form-control"
                          placeholder="Home Adress"
                          defaultValue="US"
                        />
                      </Col>
                      <Col md={6}>
                        <FieldGroup
                          label="Thời lượng"
                          type="text"
                          bsClass="form-control"
                          placeholder="Home Adress"
                          defaultValue={this.state.movie.runtime}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <FieldGroup
                          label="Độ phân giải"
                          type="text"
                          bsClass="form-control"
                          placeholder="City"
                          defaultValue="HD 720p"
                        />
                      </Col>
                      <Col md={4}>
                        <FieldGroup
                          label="Ngôn ngữ"
                          type="text"
                          bsClass="form-control"
                          placeholder="Country"
                          defaultValue="Phụ đề Việt"
                        />
                      </Col>
                      <Col md={4}>
                        <FieldGroup
                          label="Đạo diễn"
                          type="text"
                          bsClass="form-control"
                          placeholder="ZIP Code"
                          defaultValue="Jame Cameron"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>Thể loại</Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Nội dung</ControlLabel>
                          <FormControl
                            rows="10"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            value={this.state.movie.overview}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Button bsStyle="info" pullRight fill type="submit">
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <PosterCard
                imageUrl={
                  IMAGE_BASE_URL + POSTER_SIZE + this.state.movie.poster_path
                }
                rounded
                responsive
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default MovieDetail;
