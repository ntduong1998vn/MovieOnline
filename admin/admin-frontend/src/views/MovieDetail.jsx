import React, { useState, useEffect } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { FieldGroup } from "components/FieldGroup/FieldGroup";
import PosterCard from "components/PosterCard/PosterCard.jsx";
import "react-datepicker/dist/react-datepicker.css";
import { loadMovieById } from "../utils/MovieAPI";
import noneImg from "../assets/img/none.jpg";
import { getListGenres } from "../utils/GenreAPI";
import { loadCastListExceptImg } from "../utils/CastAPI";
import { updateMovie } from "../utils/MovieAPI";
import Select from "react-select";

Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [
    this.getFullYear(),
    (mm > 9 ? "" : "0") + mm,
    (dd > 9 ? "" : "0") + dd
  ].join("-");
};

const MovieDetail = props => {
  const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [releaseDate, setReleaseDate] = useState(new Date("2020-01-24"));

  // Poster
  const [selectedFile, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreViewUrl] = useState(null);

  const [genreSelected, setGenreSelectedList] = useState([]);
  const [castSelected, setCastSelectedList] = useState([]);

  const [genreList, setGenreList] = useState([]);
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    setLoading(true);

    const movieId = props.match.params.id;
    if (movieId != undefined) {
      loadMovieById(movieId)
        .then(res => {
          setMovie(res);
          setGenreSelectedList(res.genres);
          setReleaseDate(new Date(res.release_date));
          loadCastListExceptImg().then(res => setCastList(res));
          getListGenres().then(res => setGenreList(res));

          setLoading(false);
        })
        .catch(err => console.log(err.message));
    }
    return () => {};
  }, [props.match.params]);

  function handleChange(e) {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  }

  function fileHandleChange(event) {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setImagePreViewUrl(reader.result);
      setFile(file);
    };

    reader.readAsDataURL(file);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMovie({
      ...movie,
      release_date: releaseDate.yyyymmdd(),
      genres: genreSelected,
      casters: castSelected
    });

    let movieObject = {
      ...movie,
      release_date: releaseDate.yyyymmdd(),
      genres: genreSelected,
      casters: castSelected
    };
    updateMovie(props.match.params.id, movieObject).then(res =>
      console.log("Thanh cong!")
    );
  }

  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <p>{isLoading ? "Fetching data..." : ""}</p>
        </Row>
        <Row>
          <Col md={8}>
            <Card
              title="Thông tin phim"
              content={
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={4}>
                      <FormGroup>
                        <ControlLabel>Mã phim</ControlLabel>
                        <FormControl.Static>{movie.id}</FormControl.Static>
                      </FormGroup>
                    </Col>
                    <Col md={8}>
                      <FieldGroup
                        label="Tên phim"
                        type="text"
                        name="title"
                        bsClass="form-control"
                        placeholder="Username"
                        value={movie.title}
                        onChange={handleChange}
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
                        value="1/1"
                        disabled
                      />
                    </Col>
                    <Col md={6}>
                      {/* <FieldGroup
                          label="Ngày khởi chiếu"
                          type="text"
                          bsClass="form-control"
                          placeholder="Last name"
                          value={ movie.release_date}
                        /> */}
                      <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={releaseDate}
                        onChange={date => setReleaseDate(date)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <FieldGroup
                        label="Quốc gia"
                        type="text"
                        name="countries"
                        bsClass="form-control"
                        placeholder="Home Adress"
                        value={movie.countries}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col md={4}>
                      <FieldGroup
                        label="Thời lượng (phút)"
                        type="number"
                        min="0"
                        name="runtime"
                        bsClass="form-control"
                        placeholder="Home Adress"
                        value={movie.runtime}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col md={4}>
                      <FieldGroup
                        label="Lượt xem"
                        type="number"
                        name="views"
                        bsClass="form-control"
                        placeholder="Home Adress"
                        value={movie.views}
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <FieldGroup
                        label="Đánh giá"
                        type="number"
                        max="10"
                        min="0"
                        name="vote_average"
                        bsClass="form-control"
                        placeholder="Home Adress"
                        value={movie.vote_average}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col md={4}>
                      <FieldGroup
                        label="Phổ biến"
                        type="number"
                        min="0"
                        name="popularity"
                        bsClass="form-control"
                        placeholder="Home Adress"
                        value={movie.popularity}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col md={4}>
                      <FieldGroup
                        label="Độ phân giải"
                        type="text"
                        bsClass="form-control"
                        placeholder="City"
                        value="HD 720p"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <FieldGroup
                        label="Ngôn ngữ"
                        type="text"
                        name="language"
                        bsClass="form-control"
                        placeholder="Country"
                        value={movie.language}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col md={4}>
                      <FieldGroup
                        label="Đạo diễn"
                        type="text"
                        bsClass="form-control"
                        placeholder="ZIP Code"
                        value="Jame Cameron"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>Thể loại</Col>
                    <Col md={12}>
                      <Select
                        onChange={selected => setGenreSelectedList(selected)}
                        getOptionLabel={option => `${option.name}`}
                        getOptionValue={option => `${option.id}`}
                        options={genreList}
                        value={genreSelected}
                        isMulti={true}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>Diễn viên</Col>
                    <Col md={12}>
                      <Select
                        onChange={selected => setCastSelectedList(selected)}
                        getOptionLabel={option => `${option.name}`}
                        getOptionValue={option => `${option.id}`}
                        options={castList}
                        value={castSelected}
                        isMulti={true}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Nội dung</ControlLabel>
                        <FormControl
                          name="overview"
                          onChange={handleChange}
                          rows="10"
                          componentClass="textarea"
                          bsClass="form-control"
                          placeholder="Here can be your description"
                          value={movie.overview}
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
            {movie.poster == null && imagePreviewUrl == null ? (
              <PosterCard imageUrl={noneImg} rounded />
            ) : (
              <PosterCard
                imageUrl={
                  imagePreviewUrl == null
                    ? `data:image/jpeg;base64,${movie.poster}`
                    : imagePreviewUrl
                }
                rounded
                height="400px"
                witdh="300px"
              />
            )}

            <FieldGroup
              id="formControlsFile"
              type="file"
              label="Ảnh bìa"
              onChange={fileHandleChange}
            />
            <Button fill bsStyle="danger">
              Lưu Ảnh
            </Button>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default MovieDetail;
