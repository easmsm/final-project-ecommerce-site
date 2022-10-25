import React from "react";
import ReactDom from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import "./index.css";

ReactDom.render(<NavBar />, document.getElementById("root"));
