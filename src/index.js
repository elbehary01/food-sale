import React from "react";
import ReactDOM from "react-dom";
//uas bootstrap as a style for the moment later style component
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
//uas sass stylw sheet
import "./sass/style.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
