import React from "react";
import { AuthContext } from "./AuthContextProvider";

export default function withContext(Component) {
  return function contextComponent(props) {
    return (
      <AuthContext.Consumer>
        {context => <Component {...props} context={context} />}
      </AuthContext.Consumer>
    );
  };
}
