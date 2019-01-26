import * as React from "react";
import * as ReactDOM from "react-dom";
import Inbox from "./inbox/components/inbox";


const Root = document.querySelector(".container");

ReactDOM.render(
    <Inbox></Inbox>,
    document.getElementById('root')
)

