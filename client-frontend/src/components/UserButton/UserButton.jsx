import React from "react";
import "./userButton.css";
import { Button } from "react-bootstrap";
// import withContext from "../../ContextAuth/Context_HOC";
import { Link } from "react-router-dom";
import imgNone from "../../assets/images/none.png";

const UserButton = ({user , logOut}) => {
  // const userInfor = props.context.currentUser;

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
          {user.avatar == null ? (
            <img src={imgNone} alt="avatar" height="50px" width="50px" />
          ) : (
            <img
              src={`data:image/jpeg;base64,${user.avatar}`}
              alt="avatar"
              height="50px"
              width="50px"
            />
          )}
        </div>
        <ul>
          <li>
            <Link to="/user">
              <i className="fa fa-user" aria-hidden="true"></i>
              Trang cá nhân
            </Link>
          </li>
          {/* <li>
            <Button>
              <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>Nâng
              cấp VIP
            </Button>
          </li> */}
          <li>
            <Button onClick={() => logOut()}>
              <i className="fa fa-sign-out" aria-hidden="true"></i>Thoát
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserButton;
