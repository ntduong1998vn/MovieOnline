import React from "react";
import withContext from "../ContextAuth/Context_HOC";
import { sendMail } from "../utils/AuthAPI";
import Alert from "react-s-alert";

const UserProfile = props => {
  console.log(props.context);

  function eventSendMail() {
    sendMail().then(result => console.log(result));
    Alert.success("Nâng cấp thành công!");
  }

  return (
    <div>
      <div>
        <img
          src={props.context.currentUser.imageUrl}
          alt="avatar"
          height="50px"
          width="50px"
        />
      </div>
      <div>User : {props.context.currentUser.name}</div>
      <div>Email: {props.context.currentUser.email}</div>
      <div className="table-responsive">
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
    </div>
  );
};

export default withContext(UserProfile);
