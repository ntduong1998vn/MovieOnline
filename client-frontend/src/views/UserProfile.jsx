import React, { useState } from "react";
import withContext from "../ContextAuth/Context_HOC";
import { sendMail } from "../utils/AuthAPI";
import imgNone from "../assets/images/none.png";
import Alert from "react-s-alert";
import UserInfor from "../components/UserInfor/UserInfor";
import "../assets/list-css/list.css";

const UserProfile = props => {
  const [userInfor, setUser] = useState(props.context.currentUser);

  function eventSendMail() {
    sendMail()
      .then(result => Alert.success(result.message))
      .catch(err => Alert.error(err));
    reloadUser();
  }

  function reloadUser() {
    props.context.loadCurrentUser();
    setUser(props.context.currentUser);
  }

  return (
    <div style={{ margin: "20px" }}>
      <div className="user-infor">
        <UserInfor data={userInfor} reload={reloadUser} />
      </div>

      {userInfor.role.includes("VIP") ? null : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th />
                <th>Free</th>
                <th>VIP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Quảng cáo</td>
                <td>Có</td>
                <td>Không</td>
              </tr>
              <tr>
                <td>Chất lượng phim</td>
                <td>480p</td>
                <td>720p-1080p</td>
              </tr>
              <tr>
                <td>Giá</td>
                <td>Miễn phí</td>
                <td>150k/tháng</td>
              </tr>
              <tr>
                <td />
                <td />
                <td>
                  <div
                    onClick={() => eventSendMail()}
                    className="btn-fill btn-round btn btn-info"
                  >
                    Nâng cấp VIP
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default withContext(UserProfile);
