import React from "react";
import { Link, NavLink } from "react-router-dom";

const MultiColumn = ({ data }) => {
  const column = (data.length - (data.length % 6)) / 6;
  const items = [];

  for (let i = 0; i < column; i++) {
    let children = [];
    for (let j = 0; j < 6; j++) {
      // Kiem tra
      if (i * 6 + j >= data.length) break;
      //
      const element = data[i * 6 + j];
      children.push(
        <li>
          <Link
            key={element.id}
            to={{
              pathname: "/genre",
              search: `?id=${element.id}`,
              state: { element }
            }}
          >
            {element.name}{" "}
          </Link>
        </li>
      );
    }

    items.push(
      <div className="col-sm-4">
        <ul className="multi-column-dropdown">{children}</ul>
      </div>
    );
  }
  return <React.Fragment>{items}</React.Fragment>;
};

const MyNavBar = ({ genres, ...rest }) => {
  return (
    <div className="movies_nav">
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="navbar-header navbar-left">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div
            className="collapse navbar-collapse navbar-right"
            id="bs-example-navbar-collapse-1"
          >
            <nav>
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Thể loại <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu multi-column columns-3">
                    <li>
                      <MultiColumn data={genres} />
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="series.html">tv - series</a>
                </li>

                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Quốc gia <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu multi-column columns-3">
                    <li>
                      <div className="col-sm-4">
                        <ul className="multi-column-dropdown">
                          <li>
                            <a href="genres.html">Asia</a>
                          </li>
                          <li>
                            <a href="genres.html">France</a>
                          </li>
                          <li>
                            <a href="genres.html">Taiwan</a>
                          </li>
                          <li>
                            <a href="genres.html">United States</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <ul className="multi-column-dropdown">
                          <li>
                            <a href="genres.html">China</a>
                          </li>
                          <li>
                            <a href="genres.html">HongCong</a>
                          </li>
                          <li>
                            <a href="genres.html">Japan</a>
                          </li>
                          <li>
                            <a href="genres.html">Thailand</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <ul className="multi-column-dropdown">
                          <li>
                            <a href="genres.html">Euro</a>
                          </li>
                          <li>
                            <a href="genres.html">India</a>
                          </li>
                          <li>
                            <a href="genres.html">Korea</a>
                          </li>
                          <li>
                            <a href="genres.html">United Kingdom</a>
                          </li>
                        </ul>
                      </div>
                      <div className="clearfix"></div>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/list">Danh sách A-Z</Link>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MyNavBar;
