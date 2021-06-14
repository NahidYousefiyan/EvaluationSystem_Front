import React, { Component } from "react";
import auth from "../service/authService";
import {
  toast
} from "react-toastify";

class Logout extends Component {
  componentDidMount() {
    console.log("do logiout")
    console.log("do logiout")
    auth.logout();
    toast.success("شما از سامانه خارج شدید")
     setTimeout(window.location.reload(true), 4000);
    // window.location = "/";
  }

  render() {
    return null;
  }
}

export default Logout;
