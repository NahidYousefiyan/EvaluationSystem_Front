import React, { Component } from "react";
import Content from "./content";
import NavBar from "./navBar";
import Login from "../account/login";
import CL3 from "../account/custom-log-3";
import jwt from "jsonwebtoken";
import { getCurrentUser } from "../service/authService";

export default class Base extends Component {
  render() {
    var isExpired = false;
    console.log(getCurrentUser());

    const user = getCurrentUser();
    if (user === null) {
      return <Login />;
    }

    return (
      <div className="d-flex flex-row flex-column-fluid page">
        <NavBar />
        <Content />
      </div>
    );
  }
}
