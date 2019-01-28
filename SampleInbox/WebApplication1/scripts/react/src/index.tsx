import * as React from "react";
import * as ReactDOM from "react-dom";
import Inbox from "./inbox/components/inbox";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/style.css";

const ROOT = document.querySelector(".container");

ReactDOM.render(<Inbox></Inbox>, ROOT)