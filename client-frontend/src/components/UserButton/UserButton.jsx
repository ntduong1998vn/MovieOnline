import React from "react";
import "./userButton.css";

const UserButton = props => {
  return (
    <div className="btn-group">
      <a
        className="dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Cá nhân
        <span className="caret"></span>
      </a>
      <div className="dropdown-menu custom-dropdown-menu">
        <div className="user--avatar">
          <img
            src="https://lh6.googleusercontent.com/-CDVxvPvmnIs/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3re-xaZRccNeekUjIQ_f5qggAiOgoQ/photo.jpg"
            alt="Lo"
            height="80"
            width="80"
          />
        </div>
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-user" aria-hidden="true"></i>
              Trang cá nhân
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>Nâng
              cấp VIP
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-sign-out" aria-hidden="true"></i>Thoát
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserButton;
