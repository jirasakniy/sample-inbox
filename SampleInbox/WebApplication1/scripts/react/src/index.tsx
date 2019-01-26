import * as React from "react";
import * as ReactDOM from "react-dom";
import Inbox from "./inbox/components/inbox";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/style.css";


const Root = document.querySelector(".container");

ReactDOM.render(
    <Inbox></Inbox>,
    document.getElementById('root')
)