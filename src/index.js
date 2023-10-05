import React from "react";
import ReactDOM from "react-dom";
//import myName from './home.js';
//import {pi,name,fatherName,showFatherName} from './home.js';
import * as data from "./home.js";

console.log(data);
ReactDOM.render(
  <ul>
    <li>{data.default()}</li>
    <li>{data.pi}</li>
    <li>{data.name}</li>
    <li>{data.fatherName}</li>
    <li>{data.showFatherName()}</li>
  </ul>,
  document.getElementById("root")
);
