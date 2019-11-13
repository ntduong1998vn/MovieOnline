import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import "react-table/react-table.css";
import App from "App.js";

import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
