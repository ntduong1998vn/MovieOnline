import React from "react";
import withContext from "../ContextAuth/Context_HOC";

const UserProfile = props => {
  console.log(props.context);
  return (
    <div>
      <div>
        Authenticate : {props.context.isAuthenticate ? "true" : "false"}
      </div>
      <div>User : {props.context.currentUser.name}</div>
    </div>
  );
};

export default withContext(UserProfile);
