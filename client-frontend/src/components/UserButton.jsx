import React from "react";
import { ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";

const UserButton = () => {
  return (
    <div className="dropdown">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
        Country <b className="caret"></b>
      </a>
      <ul
        className="dropdown-menu multi-column columns-3"
        style={{ display: "none" }}
      >
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
        </li>
      </ul>
    </div>
  );
};

export default UserButton;
