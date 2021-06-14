import { Button } from "@material-ui/core";
import React, { Component } from "react";

class NotFound extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <div className="header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable page-loading">
          <div className="d-flex flex-column flex-root"> */}
        {/* <!--begin::Error--> */}
        {/* <div
              className="d-flex flex-row-fluid flex-column bgi-size-cover bgi-position-center bgi-no-repeat p-10 p-sm-30"
              style={{
                backgroundImage: "url(assets/media/error/bg1.jpg)",
              }}
            > */}
        {/* <!--begin::Content--> */}
        {/* <h1
                className="font-weight-boldest text-dark-75 mt-15"
                style={{ fontSize: "10rem" }}
              >
                404
              </h1>
              <p className="font-size-h3 text-muted font-weight-normal">
                این صفحه وجود ندارد.
              </p> */}
        {/* <!--end::Content--> */}
        {/* </div> */}
        {/* <!--end::Error--> */}
        {/* </div>
        </div> */}
        <div
          style={{
            textAlign: "center",
            marginTop: "6rem",
          }}
        >
          <h1
            style={{
              fontSize: "10rem",
              color: "white",
              textShadow: "2px 2px 4px #000000",
            }}
          >
            404
          </h1>
          <p
            style={{
              color: "black",
              fontSize: "2rem",
              textShadow: "2px 2px 4px #000000",
            }}
          >
            این صفحه وجود ندارد.
          </p>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "2rem", fontSize: "1.5rem" }}
          >
            <a href="/" style={{ textDecoration: "none", color: "fff" }}>
              بازگشت به داشبورد
            </a>
          </Button>
        </div>
      </div>
    );
  }
}

export default NotFound;
