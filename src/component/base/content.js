import React, {Component} from "react";
import Main from "./Main";
import {loadDetectStat} from "../store/DetecDStat";
import {connect} from "react-redux";
import MaterialDatePickerRange from "../common/DatePickers/MaterialDatePickerRange";
import Breadcrumb from "./breadcrumb";
import PeriodListMenu from "./comman/periodListView";
import auth, {getCurrentUser} from "../service/authService";
import {Link} from "react-router-dom";
import {getUserDataInfo} from "../service/authenticated";
import {toast} from "react-toastify";

const options = {
    title: {
        text: "My stock chart",
    },
    series: [
        {
            data: [1, 2, 3],
        },
    ],
};

const user = getCurrentUser();

class Content extends Component {
    state = {
        userInfo: {
            fullName: '',
        },
    }
    handleDashboardState = (data) => {
        console.log(data);

        this.props.loadDetectStat(data);
    };
    handleLogout = () => {
        auth.logout();
        toast.success("شما از سامانه خارج شدید")
        setTimeout(window.location.reload(true), 4000);
    };

    componentDidMount = async () => {
        const {data} = await getUserDataInfo()
        this.setState({userInfo: data.result})
        console.log(":user", data)

    }

    render() {
        const {userInfo} = this.state
        return (
            <div
                className="d-flex flex-column flex-row-fluid wrapper"
                id="kt_wrapper"
            >
                <div id="kt_header" className="header header-fixed">
                    <div className="container-fluid d-flex align-items-stretch justify-content-between">
                        <div
                            className="header-menu-wrapper header-menu-wrapper-left"
                            id="kt_header_menu_wrapper"
                        >
                            <div
                                id="kt_header_menu"
                                className="header-menu header-menu-mobile header-menu-layout-default"
                            >
                                <ul className="menu-nav"></ul>
                            </div>
                        </div>
                        <div className="topbar">
                            <div class="topbar-item">
                                <div
                                    class="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2"
                                    id="kt_quick_user_toggle"
                                >
                                    <span
                                        class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1"></span>
                                    <span
                                        class="text-dark-75 font-weight-bolder font-size-base d-none d-md-inline mr-3">
                                                        {userInfo.fullName}

                  </span> <span
                                    class="text-dark-100 font-weight-bolder font-size-base d-none d-md-inline mr-3">
                                        {userInfo.userGroupName}

                  </span>
                                    <span class="symbol symbol-lg-35 symbol-25 symbol-light-success">
                    <span class="symbol-label font-size-h6-sm font-weight-bold">
                                                                {userInfo.userName}

                        {/*{userInfo.collegeName}*/}

                    </span>
                  </span>
                                </div>
                            </div>
                            <div className="dropdown" id="kt_quick_search_toggle">
                                {/*<div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">*/}
                                {/*    <div className="btn btn-icon btn-clean btn-lg btn-dropdown mr-1">*/}
                                {/*		<span className="svg-icon svg-icon-xl svg-icon-primary">*/}
                                {/*			<svg xmlns="http://www.w3.org/2000/svg"*/}
                                {/*                 xmlnsXlink="http://www.w3.org/1999/xlink" width="24px"*/}
                                {/*                 height="24px" viewBox="0 0 24 24" version="1.1">*/}
                                {/*				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">*/}
                                {/*					<rect x="0" y="0" width="24" height="24"/>*/}
                                {/*					<path*/}
                                {/*                        d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"*/}
                                {/*                        fill="#000000" fill-rule="nonzero" opacity="0.3"/>*/}
                                {/*					<path*/}
                                {/*                        d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"*/}
                                {/*                        fill="#000000" fill-rule="nonzero"/>*/}
                                {/*				</g>*/}
                                {/*			</svg>*/}
                                {/*		</span>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div
                                    className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
                                    <div
                                        className="quick-search quick-search-dropdown"
                                        id="kt_quick_search_dropdown"
                                    >
                                        {/*<form method="get" className="quick-search-form">*/}
                                        {/*    <div className="input-group">*/}
                                        {/*        <div className="input-group-prepend">*/}
                                        {/*				<span className="input-group-text">*/}
                                        {/*					<span className="svg-icon svg-icon-lg">*/}
                                        {/*						<svg xmlns="http://www.w3.org/2000/svg"*/}
                                        {/*                             xmlnsXlink="http://www.w3.org/1999/xlink"*/}
                                        {/*                             width="24px" height="24px" viewBox="0 0 24 24"*/}
                                        {/*                             version="1.1">*/}
                                        {/*							<g stroke="none" stroke-width="1" fill="none"*/}
                                        {/*                               fill-rule="evenodd">*/}
                                        {/*								<rect x="0" y="0" width="24" height="24"/>*/}
                                        {/*								<path*/}
                                        {/*                                    d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"*/}
                                        {/*                                    fill="#000000" fill-rule="nonzero"*/}
                                        {/*                                    opacity="0.3"/>*/}
                                        {/*								<path*/}
                                        {/*                                    d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"*/}
                                        {/*                                    fill="#000000" fill-rule="nonzero"/>*/}
                                        {/*							</g>*/}
                                        {/*						</svg>*/}
                                        {/*					</span>*/}
                                        {/*				</span>*/}
                                        {/*        </div>*/}
                                        {/*        <input type="text" className="form-control"*/}
                                        {/*               placeholder="Search..."/>*/}
                                        {/*        <div className="input-group-append">*/}
                                        {/*				<span className="input-group-text">*/}
                                        {/*					<i className="quick-search-close ki ki-close icon-sm text-muted"></i>*/}
                                        {/*				</span>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</form>*/}
                                        <div
                                            className="quick-search-wrapper scroll"
                                            data-scroll="true"
                                            data-height="325"
                                            data-mobile-height="200"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown">
                                <div
                                    className="topbar-item"
                                    data-toggle="dropdown"
                                    data-offset="10px,0px"
                                >
                    {/*                <div*/}
                    {/*                    className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 pulse pulse-primary">*/}
                    {/*<span className="svg-icon svg-icon-xl svg-icon-primary">*/}
                    {/*  <svg*/}
                    {/*      xmlns="http://www.w3.org/2000/svg"*/}
                    {/*      xmlnsXlink="http://www.w3.org/1999/xlink"*/}
                    {/*      width="24px"*/}
                    {/*      height="24px"*/}
                    {/*      viewBox="0 0 24 24"*/}
                    {/*      version="1.1"*/}
                    {/*  >*/}
                    {/*    <g*/}
                    {/*        stroke="none"*/}
                    {/*        stroke-width="1"*/}
                    {/*        fill="none"*/}
                    {/*        fill-rule="evenodd"*/}
                    {/*    >*/}
                    {/*      <rect x="0" y="0" width="24" height="24"/>*/}
                    {/*      <path*/}
                    {/*          d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z"*/}
                    {/*          fill="#000000"*/}
                    {/*          opacity="0.3"*/}
                    {/*      />*/}
                    {/*      <path*/}
                    {/*          d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z"*/}
                    {/*          fill="#000000"*/}
                    {/*      />*/}
                    {/*    </g>*/}
                    {/*  </svg>*/}
                    {/*</span>*/}
                    {/*                    <span className="pulse-ring"></span>*/}
                    {/*                </div>*/}
                                </div>
                                <div
                                    className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
                                    {/*<form>*/}
                                    {/*    <div*/}
                                    {/*        className="d-flex flex-column pt-12 bgi-size-cover bgi-no-repeat rounded-top"*/}
                                    {/*        // style="background-image: url(assets/media/misc/bg-1.jpg)"*/}
                                    {/*    >*/}
                                    {/*        <h4 className="d-flex flex-center rounded-top">*/}
                                    {/*            <span className="text-white">User Notifications</span>*/}
                                    {/*            <span*/}
                                    {/*                className="btn btn-text btn-success btn-sm font-weight-bold btn-font-md ml-2">23 new</span>*/}
                                    {/*        </h4>*/}
                                    {/*        <ul className="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-line-transparent-white nav-tabs-line-active-border-success mt-3 px-8"*/}
                                    {/*            role="tablist">*/}
                                    {/*            <li className="nav-item">*/}
                                    {/*                <a className="nav-link active show" data-toggle="tab"*/}
                                    {/*                   href="#topbar_notifications_notifications">Alerts</a>*/}
                                    {/*            </li>*/}
                                    {/*            <li className="nav-item">*/}
                                    {/*                <a className="nav-link" data-toggle="tab"*/}
                                    {/*                   href="#topbar_notifications_events">Events</a>*/}
                                    {/*            </li>*/}
                                    {/*            <li className="nav-item">*/}
                                    {/*                <a className="nav-link" data-toggle="tab"*/}
                                    {/*                   href="#topbar_notifications_logs">Logs</a>*/}
                                    {/*            </li>*/}
                                    {/*        </ul>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="tab-content">*/}
                                    {/*        <div className="tab-pane active show p-8"*/}
                                    {/*             id="topbar_notifications_notifications"*/}
                                    {/*             role="tabpanel">*/}
                                    {/*            <div className="scroll pr-7 mr-n7" data-scroll="true"*/}
                                    {/*                 data-height="300"*/}
                                    {/*                 data-mobile-height="200">*/}
                                    {/*                <div className="d-flex align-items-center mb-6">*/}
                                    {/*                    <div className="symbol symbol-40 symbol-light-primary mr-5">*/}
                                    {/*							<span className="symbol-label">*/}
                                    {/*								<span*/}
                                    {/*                                    className="svg-icon svg-icon-lg svg-icon-primary">*/}
                                    {/*									<svg xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*                                         xmlnsXlink="http://www.w3.org/1999/xlink"*/}
                                    {/*                                         width="24px" height="24px"*/}
                                    {/*                                         viewBox="0 0 24 24" version="1.1">*/}
                                    {/*										<g stroke="none" stroke-width="1"*/}
                                    {/*                                           fill="none" fill-rule="evenodd">*/}
                                    {/*											<rect x="0" y="0" width="24"*/}
                                    {/*                                                  height="24"/>*/}
                                    {/*											<path*/}
                                    {/*                                                d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"*/}
                                    {/*                                                fill="#000000"/>*/}
                                    {/*											<rect fill="#000000" opacity="0.3"*/}
                                    {/*                                                  transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)"*/}
                                    {/*                                                  x="16.3255682" y="2.94551858"*/}
                                    {/*                                                  width="3" height="18" rx="1"/>*/}
                                    {/*										</g>*/}
                                    {/*									</svg>*/}
                                    {/*								</span>*/}
                                    {/*							</span>*/}
                                    {/*                    </div>*/}
                                    {/*                    <div className="d-flex flex-column font-weight-bold">*/}
                                    {/*                        <a href="#"*/}
                                    {/*                           className="text-dark text-hover-primary mb-1 font-size-lg">Cool*/}
                                    {/*                            App</a>*/}
                                    {/*                        <span*/}
                                    {/*                            className="text-muted">Marketing campaign planning</span>*/}
                                    {/*                    </div>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="d-flex align-items-center mb-6">*/}
                                    {/*                    <div className="symbol symbol-40 symbol-light-warning mr-5">*/}
                                    {/*							<span className="symbol-label">*/}
                                    {/*								<span*/}
                                    {/*                                    className="svg-icon svg-icon-lg svg-icon-warning">*/}
                                    {/*									<svg xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*                                         xmlnsXlink="http://www.w3.org/1999/xlink"*/}
                                    {/*                                         width="24px" height="24px"*/}
                                    {/*                                         viewBox="0 0 24 24" version="1.1">*/}
                                    {/*										<g stroke="none" stroke-width="1"*/}
                                    {/*                                           fill="none" fill-rule="evenodd">*/}
                                    {/*											<rect x="0" y="0" width="24"*/}
                                    {/*                                                  height="24"/>*/}
                                    {/*											<path*/}
                                    {/*                                                d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"*/}
                                    {/*                                                fill="#000000" fill-rule="nonzero"*/}
                                    {/*                                                transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"/>*/}
                                    {/*											<path*/}
                                    {/*                                                d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"*/}
                                    {/*                                                fill="#000000" fill-rule="nonzero"*/}
                                    {/*                                                opacity="0.3"/>*/}
                                    {/*										</g>*/}
                                    {/*									</svg>*/}
                                    {/*								</span>*/}
                                    {/*							</span>*/}
                                    {/*                    </div>*/}
                                    {/*                    <div className="d-flex flex-column font-weight-bold">*/}
                                    {/*                        <a href="#"*/}
                                    {/*                           className="text-dark-75 text-hover-primary mb-1 font-size-lg">Awesome*/}
                                    {/*                            SAAS</a>*/}
                                    {/*                        <span*/}
                                    {/*                            className="text-muted">Project status update meeting</span>*/}
                                    {/*                    </div>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="d-flex align-items-center mb-6">*/}
                                    {/*                    <div className="symbol symbol-40 symbol-light-success mr-5">*/}
                                    {/*							<span className="symbol-label">*/}
                                    {/*								<span*/}
                                    {/*                                    className="svg-icon svg-icon-lg svg-icon-success">*/}
                                    {/*									<svg xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*                                         xmlnsXlink="http://www.w3.org/1999/xlink"*/}
                                    {/*                                         width="24px" height="24px"*/}
                                    {/*                                         viewBox="0 0 24 24" version="1.1">*/}
                                    {/*										<g stroke="none" stroke-width="1"*/}
                                    {/*                                           fill="none" fill-rule="evenodd">*/}
                                    {/*											<rect x="0" y="0" width="24"*/}
                                    {/*                                                  height="24"/>*/}
                                    {/*											<path*/}
                                    {/*                                                d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z"*/}
                                    {/*                                                fill="#000000"/>*/}
                                    {/*											<path*/}
                                    {/*                                                d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z"*/}
                                    {/*                                                fill="#000000" opacity="0.3"/>*/}
                                    {/*										</g>*/}
                                    {/*									</svg>*/}
                                    {/*								</span>*/}
                                    {/*							</span>*/}
                                    {/*                    </div>*/}
                                    {/*                    <div className="d-flex flex-column font-weight-bold">*/}
                                    {/*                        <a href="#"*/}
                                    {/*                           className="text-dark text-hover-primary mb-1 font-size-lg">Claudy*/}
                                    {/*                            Sys</a>*/}
                                    {/*                        <span*/}
                                    {/*                            className="text-muted">Project Deployment &amp; Launch</span>*/}
                                    {/*                    </div>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="d-flex align-items-center mb-6">*/}
                                    {/*                    <div className="symbol symbol-40 symbol-light-danger mr-5">*/}
                                    {/*							<span className="symbol-label">*/}
                                    {/*								<span*/}
                                    {/*                                    className="svg-icon svg-icon-lg svg-icon-danger">*/}
                                    {/*									<svg xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*                                         xmlnsXlink="http://www.w3.org/1999/xlink"*/}
                                    {/*                                         width="24px" height="24px"*/}
                                    {/*                                         viewBox="0 0 24 24" version="1.1">*/}
                                    {/*										<g stroke="none" stroke-width="1"*/}
                                    {/*                                           fill="none" fill-rule="evenodd">*/}
                                    {/*											<rect x="0" y="0" width="24"*/}
                                    {/*                                                  height="24"/>*/}
                                    {/*											<path*/}
                                    {/*                                                d="M11.7573593,15.2426407 L8.75735931,15.2426407 C8.20507456,15.2426407 7.75735931,15.6903559 7.75735931,16.2426407 C7.75735931,16.7949254 8.20507456,17.2426407 8.75735931,17.2426407 L11.7573593,17.2426407 L11.7573593,18.2426407 C11.7573593,19.3472102 10.8619288,20.2426407 9.75735931,20.2426407 L5.75735931,20.2426407 C4.65278981,20.2426407 3.75735931,19.3472102 3.75735931,18.2426407 L3.75735931,14.2426407 C3.75735931,13.1380712 4.65278981,12.2426407 5.75735931,12.2426407 L9.75735931,12.2426407 C10.8619288,12.2426407 11.7573593,13.1380712 11.7573593,14.2426407 L11.7573593,15.2426407 Z"*/}
                                    {/*                                                fill="#000000" opacity="0.3"*/}
                                    {/*                                                transform="translate(7.757359, 16.242641) rotate(-45.000000) translate(-7.757359, -16.242641)"/>*/}
                                    {/*											<path*/}
                                    {/*                                                d="M12.2426407,8.75735931 L15.2426407,8.75735931 C15.7949254,8.75735931 16.2426407,8.30964406 16.2426407,7.75735931 C16.2426407,7.20507456 15.7949254,6.75735931 15.2426407,6.75735931 L12.2426407,6.75735931 L12.2426407,5.75735931 C12.2426407,4.65278981 13.1380712,3.75735931 14.2426407,3.75735931 L18.2426407,3.75735931 C19.3472102,3.75735931 20.2426407,4.65278981 20.2426407,5.75735931 L20.2426407,9.75735931 C20.2426407,10.8619288 19.3472102,11.7573593 18.2426407,11.7573593 L14.2426407,11.7573593 C13.1380712,11.7573593 12.2426407,10.8619288 12.2426407,9.75735931 L12.2426407,8.75735931 Z"*/}
                                    {/*                                                fill="#000000"*/}
                                    {/*                                                transform="translate(16.242641, 7.757359) rotate(-45.000000) translate(-16.242641, -7.757359)"/>*/}
                                    {/*											<path*/}
                                    {/*                                                d="M5.89339828,3.42893219 C6.44568303,3.42893219 6.89339828,3.87664744 6.89339828,4.42893219 L6.89339828,6.42893219 C6.89339828,6.98121694 6.44568303,7.42893219 5.89339828,7.42893219 C5.34111353,7.42893219 4.89339828,6.98121694 4.89339828,6.42893219 L4.89339828,4.42893219 C4.89339828,3.87664744 5.34111353,3.42893219 5.89339828,3.42893219 Z M11.4289322,5.13603897 C11.8194565,5.52656326 11.8194565,6.15972824 11.4289322,6.55025253 L10.0147186,7.96446609 C9.62419433,8.35499039 8.99102936,8.35499039 8.60050506,7.96446609 C8.20998077,7.5739418 8.20998077,6.94077682 8.60050506,6.55025253 L10.0147186,5.13603897 C10.4052429,4.74551468 11.0384079,4.74551468 11.4289322,5.13603897 Z M0.600505063,5.13603897 C0.991029355,4.74551468 1.62419433,4.74551468 2.01471863,5.13603897 L3.42893219,6.55025253 C3.81945648,6.94077682 3.81945648,7.5739418 3.42893219,7.96446609 C3.0384079,8.35499039 2.40524292,8.35499039 2.01471863,7.96446609 L0.600505063,6.55025253 C0.209980772,6.15972824 0.209980772,5.52656326 0.600505063,5.13603897 Z"*/}
                                    {/*                                                fill="#000000" opacity="0.3"*/}
                                    {/*                                                transform="translate(6.014719, 5.843146) rotate(-45.000000) translate(-6.014719, -5.843146)"/>*/}
                                    {/*											<path*/}
                                    {/*                                                d="M17.9142136,15.4497475 C18.4664983,15.4497475 18.9142136,15.8974627 18.9142136,16.4497475 L18.9142136,18.4497475 C18.9142136,19.0020322 18.4664983,19.4497475 17.9142136,19.4497475 C17.3619288,19.4497475 16.9142136,19.0020322 16.9142136,18.4497475 L16.9142136,16.4497475 C16.9142136,15.8974627 17.3619288,15.4497475 17.9142136,15.4497475 Z M23.4497475,17.1568542 C23.8402718,17.5473785 23.8402718,18.1805435 23.4497475,18.5710678 L22.0355339,19.9852814 C21.6450096,20.3758057 21.0118446,20.3758057 20.6213203,19.9852814 C20.2307961,19.5947571 20.2307961,18.9615921 20.6213203,18.5710678 L22.0355339,17.1568542 C22.4260582,16.76633 23.0592232,16.76633 23.4497475,17.1568542 Z M12.6213203,17.1568542 C13.0118446,16.76633 13.6450096,16.76633 14.0355339,17.1568542 L15.4497475,18.5710678 C15.8402718,18.9615921 15.8402718,19.5947571 15.4497475,19.9852814 C15.0592232,20.3758057 14.4260582,20.3758057 14.0355339,19.9852814 L12.6213203,18.5710678 C12.2307961,18.1805435 12.2307961,17.5473785 12.6213203,17.1568542 Z"*/}
                                    {/*                                                fill="#000000" opacity="0.3"*/}
                                    {/*                                                transform="translate(18.035534, 17.863961) scale(1, -1) rotate(45.000000) translate(-18.035534, -17.863961)"/>*/}
                                    {/*										</g>*/}
                                    {/*									</svg>*/}
                                    {/*								</span>*/}
                                    {/*							</span>*/}
                                    {/*                    </div>*/}
                                    {/*                    <div className="d-flex flex-column font-weight-bold">*/}
                                    {/*                        <a href="#"*/}
                                    {/*                           className="text-dark text-hover-primary mb-1 font-size-lg">Trilo*/}
                                    {/*                            Service</a>*/}
                                    {/*                        <span className="text-muted">Analytics &amp; Requirement Study</span>*/}
                                    {/*                    </div>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="d-flex align-items-center mb-6">*/}
                                    {/*                    <div className="symbol symbol-40 symbol-light-info mr-5">*/}
                                    {/*							<span className="symbol-label">*/}
                                    {/*								<span*/}
                                    {/*                                    className="svg-icon svg-icon-lg svg-icon-info">*/}
                                    {/*									<svg xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*                                         xmlnsXlink="http://www.w3.org/1999/xlink"*/}
                                    {/*                                         width="24px" height="24px"*/}
                                    {/*                                         viewBox="0 0 24 24" version="1.1">*/}
                                    {/*										<g stroke="none" stroke-width="1"*/}
                                    {/*                                           fill="none" fill-rule="evenodd">*/}
                                    {/*											<rect x="0" y="0" width="24"*/}
                                    {/*                                                  height="24"/>*/}
                                    {/*											<path*/}
                                    {/*                                                d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z"*/}
                                    {/*                                                fill="#000000" opacity="0.3"/>*/}
                                    {/*											<path*/}
                                    {/*                                                d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z"*/}
                                    {/*                                                fill="#000000" opacity="0.3"/>*/}
                                    {/*											<path*/}
                                    {/*                                                d="M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z"*/}
                                    {/*                                                fill="#000000" opacity="0.3"/>*/}
                                    {/*										</g>*/}
                                    {/*									</svg>*/}
                                    {/*								</span>*/}
                                    {/*							</span>*/}
                                    {/*                    </div>*/}
                                    {/*                    <div className="d-flex flex-column font-weight-bold">*/}
                                    {/*                        <a href="#"*/}
                                    {/*                           className="text-dark text-hover-primary mb-1 font-size-lg">Bravia*/}
                                    {/*                            SAAS</a>*/}
                                    {/*                        <span*/}
                                    {/*                            className="text-muted">Reporting Application</span>*/}
                                    {/*                    </div>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="d-flex align-items-center mb-6">*/}
                                    {/*                    <div className="symbol symbol-40 symbol-light-danger mr-5">*/}
                                    {/*							<span className="symbol-label">*/}
                                    {/*								<span*/}
                                    {/*                                    className="svg-icon svg-icon-lg svg-icon-danger">*/}
                                    {/*									<svg xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*                                         xmlnsXlink="http://www.w3.org/1999/xlink"*/}
                                    {/*                                         width="24px" height="24px"*/}
                                    {/*                                         viewBox="0 0 24 24" version="1.1">*/}
                                    {/*										<g stroke="none" stroke-width="1"*/}
                                    {/*                                           fill="none" fill-rule="evenodd">*/}
                                    {/*											<rect x="0" y="0" width="24"*/}
                                    {/*                                                  height="24"/>*/}
                                    {/*											<path*/}
                                    {/*                                                d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z"*/}
                                    {/*                                                fill="#000000"/>*/}
                                    {/*											<circle fill="#000000" opacity="0.3"*/}
                                    {/*                                                    cx="19.5" cy="17.5" r="2.5"/>*/}
                                    {/*										</g>*/}
                                    {/*									</svg>*/}
                                    {/*								</span>*/}
                                    {/*							</span>*/}
                                    {/*                    </div>*/}
                                    {/*                    <div className="d-flex flex-column font-weight-bold">*/}
                                    {/*                        <a href="#"*/}
                                    {/*                           className="text-dark text-hover-primary mb-1 font-size-lg">Express*/}
                                    {/*                            Wind</a>*/}
                                    {/*                        <span*/}
                                    {/*                            className="text-muted">Software Analytics &amp; Design</span>*/}
                                    {/*                    </div>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="d-flex align-items-center mb-6">*/}
                                    {/*                    <div className="symbol symbol-40 symbol-light-success mr-5">*/}
                                    {/*							<span className="symbol-label">*/}
                                    {/*								<span*/}
                                    {/*                                    className="svg-icon svg-icon-lg svg-icon-success">*/}
                                    {/*									<svg xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*                                         xmlnsXlink="http://www.w3.org/1999/xlink"*/}
                                    {/*                                         width="24px" height="24px"*/}
                                    {/*                                         viewBox="0 0 24 24" version="1.1">*/}
                                    {/*										<g stroke="none" stroke-width="1"*/}
                                    {/*                                           fill="none" fill-rule="evenodd">*/}
                                    {/*											<rect x="0" y="0" width="24"*/}
                                    {/*                                                  height="24"/>*/}
                                    {/*											<path*/}
                                    {/*                                                d="M5,5 L5,15 C5,15.5948613 5.25970314,16.1290656 5.6719139,16.4954176 C5.71978107,16.5379595 5.76682388,16.5788906 5.81365532,16.6178662 C5.82524933,16.6294602 15,7.45470952 15,7.45470952 C15,6.9962515 15,6.17801499 15,5 L5,5 Z M5,3 L15,3 C16.1045695,3 17,3.8954305 17,5 L17,15 C17,17.209139 15.209139,19 13,19 L7,19 C4.790861,19 3,17.209139 3,15 L3,5 C3,3.8954305 3.8954305,3 5,3 Z"*/}
                                    {/*                                                fill="#000000" fill-rule="nonzero"*/}
                                    {/*                                                transform="translate(10.000000, 11.000000) rotate(-315.000000) translate(-10.000000, -11.000000)"/>*/}
                                    {/*											<path*/}
                                    {/*                                                d="M20,22 C21.6568542,22 23,20.6568542 23,19 C23,17.8954305 22,16.2287638 20,14 C18,16.2287638 17,17.8954305 17,19 C17,20.6568542 18.3431458,22 20,22 Z"*/}
                                    {/*                                                fill="#000000" opacity="0.3"/>*/}
                                    {/*										</g>*/}
                                    {/*									</svg>*/}
                                    {/*								</span>*/}
                                    {/*							</span>*/}
                                    {/*                    </div>*/}
                                    {/*                    <div className="d-flex flex-column font-weight-bold">*/}
                                    {/*                        <a href="#"*/}
                                    {/*                           className="text-dark text-hover-primary mb-1 font-size-lg">Bruk*/}
                                    {/*                            Fitness</a>*/}
                                    {/*                        <span*/}
                                    {/*                            className="text-muted">Web Design &amp; Development</span>*/}
                                    {/*                    </div>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="d-flex flex-center pt-7">*/}
                                    {/*                <a href="#"*/}
                                    {/*                   className="btn btn-light-primary font-weight-bold text-center">See*/}
                                    {/*                    All</a>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="tab-pane" id="topbar_notifications_events"*/}
                                    {/*             role="tabpanel">*/}
                                    {/*            <div className="navi navi-hover scroll my-4" data-scroll="true"*/}
                                    {/*                 data-height="300" data-mobile-height="200">*/}
                                    {/*                <a href="#" className="navi-item">*/}
                                    {/*                    <div className="navi-link">*/}
                                    {/*                        <div className="navi-icon mr-2">*/}
                                    {/*                            <i className="flaticon2-line-chart text-success"></i>*/}
                                    {/*                        </div>*/}
                                    {/*                        <div className="navi-text">*/}
                                    {/*                            <div className="font-weight-bold">New report has*/}
                                    {/*                                been received*/}
                                    {/*                            </div>*/}
                                    {/*                            <div className="text-muted">23 hrs ago</div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </a>*/}
                                    {/*                <a href="#" className="navi-item">*/}
                                    {/*                    <div className="navi-link">*/}
                                    {/*                        <div className="navi-icon mr-2">*/}
                                    {/*                            <i className="flaticon2-paper-plane text-danger"></i>*/}
                                    {/*                        </div>*/}
                                    {/*                        <div className="navi-text">*/}
                                    {/*                            <div className="font-weight-bold">Finance report has*/}
                                    {/*                                been*/}
                                    {/*                                generated*/}
                                    {/*                            </div>*/}
                                    {/*                            <div className="text-muted">25 hrs ago</div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </a>*/}
                                    {/*                <a href="#" className="navi-item">*/}
                                    {/*                    <div className="navi-link">*/}
                                    {/*                        <div className="navi-icon mr-2">*/}
                                    {/*                            <i className="flaticon2-user flaticon2-line- text-success"></i>*/}
                                    {/*                        </div>*/}
                                    {/*                        <div className="navi-text">*/}
                                    {/*                            <div className="font-weight-bold">New order has been*/}
                                    {/*                                received*/}
                                    {/*                            </div>*/}
                                    {/*                            <div className="text-muted">2 hrs ago</div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </a>*/}
                                    {/*                <a href="#" className="navi-item">*/}
                                    {/*                    <div className="navi-link">*/}
                                    {/*                        <div className="navi-icon mr-2">*/}
                                    {/*                            <i className="flaticon2-pin text-primary"></i>*/}
                                    {/*                        </div>*/}
                                    {/*                        <div className="navi-text">*/}
                                    {/*                            <div className="font-weight-bold">New customer is*/}
                                    {/*                                registered*/}
                                    {/*                            </div>*/}
                                    {/*                            <div className="text-muted">3 hrs ago</div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </a>*/}
                                    {/*                <a href="#" className="navi-item">*/}
                                    {/*                    <div className="navi-link">*/}
                                    {/*                        <div className="navi-icon mr-2">*/}
                                    {/*                            <i className="flaticon2-sms text-danger"></i>*/}
                                    {/*                        </div>*/}
                                    {/*                        <div className="navi-text">*/}
                                    {/*                            <div className="font-weight-bold">Application has*/}
                                    {/*                                been*/}
                                    {/*                                approved*/}
                                    {/*                            </div>*/}
                                    {/*                            <div className="text-muted">3 hrs ago</div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </a>*/}
                                    {/*                <a href="#" className="navi-item">*/}
                                    {/*                    <div className="navi-link">*/}
                                    {/*                        <div className="navi-icon mr-2">*/}
                                    {/*                            <i className="flaticon2-pie-chart-3 text-warning"></i>*/}
                                    {/*                        </div>*/}
                                    {/*                        <div className="navinavinavi-text">*/}
                                    {/*                            <div className="font-weight-bold">New file has been*/}
                                    {/*                                uploaded*/}
                                    {/*                            </div>*/}
                                    {/*                            <div className="text-muted">5 hrs ago</div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </a>*/}
                                    {/*                <a href="#" className="navi-item">*/}
                                    {/*                    <div className="navi-link">*/}
                                    {/*                        <div className="navi-icon mr-2">*/}
                                    {/*                            <i className="flaticon-pie-chart-1 text-info"></i>*/}
                                    {/*                        </div>*/}
                                    {/*                        <div className="navi-text">*/}
                                    {/*                            <div className="font-weight-bold">New user feedback*/}
                                    {/*                                received*/}
                                    {/*                            </div>*/}
                                    {/*                            <div className="text-muted">8 hrs ago</div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </a>*/}
                                    {/*                <a href="#" className="navi-item">*/}
                                    {/*                    <div className="navi-link">*/}
                                    {/*                        <div className="navi-icon mr-2">*/}
                                    {/*                            <i className="flaticon2-settings text-success"></i>*/}
                                    {/*                        </div>*/}
                                    {/*                        <div className="navi-text">*/}
                                    {/*                            <div className="font-weight-bold">System reboot has*/}
                                    {/*                                been*/}
                                    {/*                                successfully completed*/}
                                    {/*                            </div>*/}
                                    {/*                            <div className="text-muted">12 hrs ago</div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </a>*/}
                                    {/*                <a href="#" className="navi-item">*/}
                                    {/*                    <div className="navi-link">*/}
                                    {/*                        <div className="navi-icon mr-2">*/}
                                    {/*                            <i className="flaticon-safe-shield-protection text-primary"></i>*/}
                                    {/*                        </div>*/}
                                    {/*                        <div className="navi-text">*/}
                                    {/*                            <div className="font-weight-bold">New order has been*/}
                                    {/*                                placed*/}
                                    {/*                            </div>*/}
                                    {/*                            <div className="text-muted">15 hrs ago</div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </a>*/}
                                    {/*                <a href="#" className="navi-item">*/}
                                    {/*                    <div className="navi-link">*/}
                                    {/*                        <div className="navi-icon mr-2">*/}
                                    {/*                            <i className="flaticon2-notification text-primary"></i>*/}
                                    {/*                        </div>*/}
                                    {/*                        <div className="navi-text">*/}
                                    {/*                            <div className="font-weight-bold">Company meeting*/}
                                    {/*                                canceled*/}
                                    {/*                            </div>*/}
                                    {/*                            <div className="text-muted">19 hrs ago</div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </a>*/}
                                    {/*                <a href="#" className="navi-item">*/}
                                    {/*                    <div className="navi-link">*/}
                                    {/*                        <div className="navi-icon mr-2">*/}
                                    {/*                            <i className="flaticon2-fax text-success"></i>*/}
                                    {/*                        </div>*/}
                                    {/*                        <div className="navi-text">*/}
                                    {/*                            <div className="font-weight-bold">New report has*/}
                                    {/*                                been received*/}
                                    {/*                            </div>*/}
                                    {/*                            <div className="text-muted">23 hrs ago</div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </a>*/}
                                    {/*                <a href="#" className="navi-item">*/}
                                    {/*                    <div className="navi-link">*/}
                                    {/*                        <div className="navi-icon mr-2">*/}
                                    {/*                            <i className="flaticon-download-1 text-danger"></i>*/}
                                    {/*                        </div>*/}
                                    {/*                        <div className="navi-text">*/}
                                    {/*                            <div className="font-weight-bold">Finance report has*/}
                                    {/*                                been*/}
                                    {/*                                generated*/}
                                    {/*                            </div>*/}
                                    {/*                            <div className="text-muted">25 hrs ago</div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </a>*/}
                                    {/*                <a href="#" className="navi-item">*/}
                                    {/*                    <div className="navi-link">*/}
                                    {/*                        <div className="navi-icon mr-2">*/}
                                    {/*                            <i className="flaticon-security text-warning"></i>*/}
                                    {/*                        </div>*/}
                                    {/*                        <div className="navi-text">*/}
                                    {/*                            <div className="font-weight-bold">New customer*/}
                                    {/*                                comment*/}
                                    {/*                                recieved*/}
                                    {/*                            </div>*/}
                                    {/*                            <div className="text-muted">2 days ago</div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </a>*/}
                                    {/*                <a href="#" className="navi-item">*/}
                                    {/*                    <div className="navi-link">*/}
                                    {/*                        <div className="navi-icon mr-2">*/}
                                    {/*                            <i className="flaticon2-analytics-1 text-success"></i>*/}
                                    {/*                        </div>*/}
                                    {/*                        <div className="navi-text">*/}
                                    {/*                            <div className="font-weight-bold">New customer is*/}
                                    {/*                                registered*/}
                                    {/*                            </div>*/}
                                    {/*                            <div className="text-muted">3 days ago</div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </a>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="tab-pane" id="topbar_notifications_logs"*/}
                                    {/*             role="tabpanel">*/}
                                    {/*            <div*/}
                                    {/*                className="d-flex flex-center text-center text-muted min-h-200px">All*/}
                                    {/*                caught up!*/}
                                    {/*                <br/>No new notifications.*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</form>*/}
                                </div>
                            </div>
                            <div className="dropdown">
                                <div
                                    className="topbar-item"
                                    data-toggle="dropdown"
                                    data-offset="10px,0px"
                                >
                                    <div className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1">
                    <span className="svg-icon svg-icon-xl svg-icon-primary">
                      <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                          >
                            <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24"/>
                              <path
                                  d="M7.62302337,5.30262097 C8.08508802,5.000107 8.70490146,5.12944838 9.00741543,5.59151303 C9.3099294,6.05357769 9.18058801,6.67339112 8.71852336,6.97590509 C7.03468892,8.07831239 6,9.95030239 6,12 C6,15.3137085 8.6862915,18 12,18 C15.3137085,18 18,15.3137085 18,12 C18,9.99549229 17.0108275,8.15969002 15.3875704,7.04698597 C14.9320347,6.73472706 14.8158858,6.11230651 15.1281448,5.65677076 C15.4404037,5.20123501 16.0628242,5.08508618 16.51836,5.39734508 C18.6800181,6.87911023 20,9.32886071 20,12 C20,16.418278 16.418278,20 12,20 C7.581722,20 4,16.418278 4,12 C4,9.26852332 5.38056879,6.77075716 7.62302337,5.30262097 Z"
                                  fill="#000000"
                                  fill-rule="nonzero"
                              />
                              <rect
                                  fill="#000000"
                                  opacity="0.3"
                                  x="11"
                                  y="3"
                                  width="2"
                                  height="10"
                                  rx="1"
                              />
                            </g>
                          </svg>
                    </span>
                                    </div>
                                </div>
                                <div
                                    className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
                                    {/*<div*/}
                                    {/*    className="d-flex flex-column flex-center py-10 bgi-size-cover bgi-no-repeat rounded-top"*/}
                                    {/*    // style="background-image: url(assets/media/misc/bg-1.jpg)"*/}
                                    {/*>*/}
                                    {/*    <h4 className="text-white font-weight-bold">Quick Actions</h4>*/}
                                    {/*    <span className="btn btn-success btn-sm font-weight-bold font-size-sm mt-2">99 tasks pending</span>*/}
                                    {/*</div>*/}
                                    <div className="row row-paddingless">
                                        {/*<div className="col-6">*/}
                                        {/*    <a href="#"*/}
                                        {/*       className="d-block py-10 px-5 text-center bg-hover-light border-right border-bottom">*/}
                                        {/*			<span className="svg-icon svg-icon-3x svg-icon-success">*/}
                                        {/*				<svg xmlns="http://www.w3.org/2000/svg"*/}
                                        {/*                     xmlnsXlink="http://www.w3.org/1999/xlink" width="24px"*/}
                                        {/*                     height="24px" viewBox="0 0 24 24" version="1.1">*/}
                                        {/*					<g stroke="none" stroke-width="1" fill="none"*/}
                                        {/*                       fill-rule="evenodd">*/}
                                        {/*						<rect x="0" y="0" width="24" height="24"/>*/}
                                        {/*						<path*/}
                                        {/*                            d="M4.3618034,10.2763932 L4.8618034,9.2763932 C4.94649941,9.10700119 5.11963097,9 5.30901699,9 L15.190983,9 C15.4671254,9 15.690983,9.22385763 15.690983,9.5 C15.690983,9.57762255 15.6729105,9.65417908 15.6381966,9.7236068 L15.1381966,10.7236068 C15.0535006,10.8929988 14.880369,11 14.690983,11 L4.80901699,11 C4.53287462,11 4.30901699,10.7761424 4.30901699,10.5 C4.30901699,10.4223775 4.32708954,10.3458209 4.3618034,10.2763932 Z M14.6381966,13.7236068 L14.1381966,14.7236068 C14.0535006,14.8929988 13.880369,15 13.690983,15 L4.80901699,15 C4.53287462,15 4.30901699,14.7761424 4.30901699,14.5 C4.30901699,14.4223775 4.32708954,14.3458209 4.3618034,14.2763932 L4.8618034,13.2763932 C4.94649941,13.1070012 5.11963097,13 5.30901699,13 L14.190983,13 C14.4671254,13 14.690983,13.2238576 14.690983,13.5 C14.690983,13.5776225 14.6729105,13.6541791 14.6381966,13.7236068 Z"*/}
                                        {/*                            fill="#000000" opacity="0.3"/>*/}
                                        {/*						<path*/}
                                        {/*                            d="M17.369,7.618 C16.976998,7.08599734 16.4660031,6.69750122 15.836,6.4525 C15.2059968,6.20749878 14.590003,6.085 13.988,6.085 C13.2179962,6.085 12.5180032,6.2249986 11.888,6.505 C11.2579969,6.7850014 10.7155023,7.16999755 10.2605,7.66 C9.80549773,8.15000245 9.45550123,8.72399671 9.2105,9.382 C8.96549878,10.0400033 8.843,10.7539961 8.843,11.524 C8.843,12.3360041 8.96199881,13.0779966 9.2,13.75 C9.43800119,14.4220034 9.7774978,14.9994976 10.2185,15.4825 C10.6595022,15.9655024 11.1879969,16.3399987 11.804,16.606 C12.4200031,16.8720013 13.1129962,17.005 13.883,17.005 C14.681004,17.005 15.3879969,16.8475016 16.004,16.5325 C16.6200031,16.2174984 17.1169981,15.8010026 17.495,15.283 L19.616,16.774 C18.9579967,17.6000041 18.1530048,18.2404977 17.201,18.6955 C16.2489952,19.1505023 15.1360064,19.378 13.862,19.378 C12.6999942,19.378 11.6325049,19.1855019 10.6595,18.8005 C9.68649514,18.4154981 8.8500035,17.8765035 8.15,17.1835 C7.4499965,16.4904965 6.90400196,15.6645048 6.512,14.7055 C6.11999804,13.7464952 5.924,12.6860058 5.924,11.524 C5.924,10.333994 6.13049794,9.25950479 6.5435,8.3005 C6.95650207,7.34149521 7.5234964,6.52600336 8.2445,5.854 C8.96550361,5.18199664 9.8159951,4.66400182 10.796,4.3 C11.7760049,3.93599818 12.8399943,3.754 13.988,3.754 C14.4640024,3.754 14.9609974,3.79949954 15.479,3.8905 C15.9970026,3.98150045 16.4939976,4.12149906 16.97,4.3105 C17.4460024,4.49950095 17.8939979,4.7339986 18.314,5.014 C18.7340021,5.2940014 19.0909985,5.62999804 19.385,6.022 L17.369,7.618 Z"*/}
                                        {/*                            fill="#000000"/>*/}
                                        {/*					</g>*/}
                                        {/*				</svg>*/}
                                        {/*			</span>*/}
                                        {/*        <span*/}
                                        {/*            className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">Accounting</span>*/}
                                        {/*        <span className="d-block text-dark-50 font-size-lg">eCommerce</span>*/}
                                        {/*    </a>*/}
                                        {/*</div>*/}
                                        <div className="col-12">
                                            <a onClick={this.handleLogout}
                                                // to="/logout"
                                               className="d-block py-10 px-5 text-center bg-hover-light border-bottom"
                                            >
                        <span className="svg-icon svg-icon-3x svg-icon-success">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                          >
                            <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24"/>
                              <path
                                  d="M7.62302337,5.30262097 C8.08508802,5.000107 8.70490146,5.12944838 9.00741543,5.59151303 C9.3099294,6.05357769 9.18058801,6.67339112 8.71852336,6.97590509 C7.03468892,8.07831239 6,9.95030239 6,12 C6,15.3137085 8.6862915,18 12,18 C15.3137085,18 18,15.3137085 18,12 C18,9.99549229 17.0108275,8.15969002 15.3875704,7.04698597 C14.9320347,6.73472706 14.8158858,6.11230651 15.1281448,5.65677076 C15.4404037,5.20123501 16.0628242,5.08508618 16.51836,5.39734508 C18.6800181,6.87911023 20,9.32886071 20,12 C20,16.418278 16.418278,20 12,20 C7.581722,20 4,16.418278 4,12 C4,9.26852332 5.38056879,6.77075716 7.62302337,5.30262097 Z"
                                  fill="#000000"
                                  fill-rule="nonzero"
                              />
                              <rect
                                  fill="#000000"
                                  opacity="0.3"
                                  x="11"
                                  y="3"
                                  width="2"
                                  height="10"
                                  rx="1"
                              />
                            </g>
                          </svg>
                        </span>
                                                <span
                                                    className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">
                          خروج
                        </span>
                                                <span className="d-block text-dark-50 font-size-lg">
                          کنسول
                        </span>
                                            </a>
                                        </div>
                                        {/*<div className="col-6">*/}
                                        {/*    <a href="#"*/}
                                        {/*       className="d-block py-10 px-5 text-center bg-hover-light border-right">*/}
                                        {/*			<span className="svg-icon svg-icon-3x svg-icon-success">*/}
                                        {/*				<svg xmlns="http://www.w3.org/2000/svg"*/}
                                        {/*                     xmlnsXlink="http://www.w3.org/1999/xlink" width="24px"*/}
                                        {/*                     height="24px" viewBox="0 0 24 24" version="1.1">*/}
                                        {/*					<g stroke="none" stroke-width="1" fill="none"*/}
                                        {/*                       fill-rule="evenodd">*/}
                                        {/*						<rect x="0" y="0" width="24" height="24"/>*/}
                                        {/*						<path*/}
                                        {/*                            d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z"*/}
                                        {/*                            fill="#000000"/>*/}
                                        {/*						<path*/}
                                        {/*                            d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z"*/}
                                        {/*                            fill="#000000" opacity="0.3"/>*/}
                                        {/*					</g>*/}
                                        {/*				</svg>*/}
                                        {/*			</span>*/}
                                        {/*        <span*/}
                                        {/*            className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">Projects</span>*/}
                                        {/*        <span*/}
                                        {/*            className="d-block text-dark-50 font-size-lg">Pending Tasks</span>*/}
                                        {/*    </a>*/}
                                        {/*</div>*/}
                                        {/*<div className="col-6">*/}
                                        {/*    <a href="#" className="d-block py-10 px-5 text-center bg-hover-light">*/}
                                        {/*			<span className="svg-icon svg-icon-3x svg-icon-success">*/}
                                        {/*				<svg xmlns="http://www.w3.org/2000/svg"*/}
                                        {/*                     xmlnsXlink="http://www.w3.org/1999/xlink" width="24px"*/}
                                        {/*                     height="24px" viewBox="0 0 24 24" version="1.1">*/}
                                        {/*					<g stroke="none" stroke-width="1" fill="none"*/}
                                        {/*                       fill-rule="evenodd">*/}
                                        {/*						<polygon points="0 0 24 0 24 24 0 24"/>*/}
                                        {/*						<path*/}
                                        {/*                            d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"*/}
                                        {/*                            fill="#000000" fill-rule="nonzero" opacity="0.3"/>*/}
                                        {/*						<path*/}
                                        {/*                            d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"*/}
                                        {/*                            fill="#000000" fill-rule="nonzero"/>*/}
                                        {/*					</g>*/}
                                        {/*				</svg>*/}
                                        {/*			</span>*/}
                                        {/*        <span*/}
                                        {/*            className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">Customers</span>*/}
                                        {/*        <span*/}
                                        {/*            className="d-block text-dark-50 font-size-lg">Latest cases</span>*/}
                                        {/*    </a>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="content d-flex flex-column flex-column-fluid"
                    id="kt_content"
                >
                    <div
                        className="subheader py-2 py-lg-4 subheader-solid"
                        id="kt_subheader"
                    >
                        <div
                            className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                            <div className="d-flex align-items-center flex-wrap mr-2">
                                <Breadcrumb/>
                                {/*<span className="text-muted font-weight-bold mr-4">#XRS-45670</span>*/}
                                {/*<a href="#" className="btn btn-light-warning font-weight-bolder btn-sm">Add New</a>*/}
                            </div>

                            <div className="d-flex align-items-center">
                                {/*<a*/}
                                {/*  href="#"*/}
                                {/*  className="btn btn-clean btn-sm font-weight-bold font-size-base mr-1"*/}
                                {/*>*/}
                                {/*  /!*<MaterialDatePicker/>*!/*/}
                                {/*</a>*/}
                                {/*<a*/}
                                {/*  href="#"*/}
                                {/*  onClick={() => this.handleDashboardState("hour")}*/}
                                {/*  className="btn btn-clean btn-sm font-weight-bold font-size-base mr-1"*/}
                                {/*>*/}
                                {/*  امروز*/}
                                {/*</a>*/}
                                {/*<a*/}
                                {/*  href="#"*/}
                                {/*  className="btn btn-clean btn-sm font-weight-bold font-size-base mr-1"*/}
                                {/*  onClick={() => this.handleDashboardState("day")}*/}
                                {/*>*/}
                                {/*  ماه*/}
                                {/*</a>*/}
                                {/*<div*/}
                                {/*  href="#"*/}
                                {/*  className="btn btn-clean btn-sm font-weight-bold font-size-base mr-1"*/}
                                {/*>*/}
                                {/*  <PeriodListMenu></PeriodListMenu>*/}
                                {/*</div>*/}

                                {/*<a href="#"*/}
                                {/*   className="btn btn-clean btn-sm font-weight-bold font-size-base mr-1">Year</a>*/}
                                {/*    <a href="#" className="btn btn-sm btn-light font-weight-bold mr-2"*/}
                                {/*       id="kt_dashboard_daterangepicker" data-toggle="tooltip"*/}
                                {/*       title="Select dashboard daterange" data-placement="left">*/}
                                {/*<span className="text-muted font-size-base font-weight-bold mr-2"*/}
                                {/*      id="kt_dashboard_daterangepicker_title">Today</span>*/}
                                {/*        <span className="text-primary font-size-base font-weight-bolder"*/}
                                {/*              id="kt_dashboard_daterangepicker_date">Aug 16</span>*/}
                                {/*    </a>*/}
                                {/*<div className="dropdown dropdown-inline" data-toggle="tooltip"*/}
                                {/*     title="Quick actions"*/}
                                {/*     data-placement="left">*/}
                                {/*    <a href="#" className="btn btn-sm btn-clean btn-icon" data-toggle="dropdown"*/}
                                {/*       aria-haspopup="true" aria-expanded="false">*/}
                                {/*		<span className="svg-icon svg-icon-success svg-icon-lg">*/}
                                {/*			<svg xmlns="http://www.w3.org/2000/svg"*/}
                                {/*                 xmlnsXlink="http://www.w3.org/1999/xlink" width="24px"*/}
                                {/*                 height="24px" viewBox="0 0 24 24" version="1.1">*/}
                                {/*				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">*/}
                                {/*					<polygon points="0 0 24 0 24 24 0 24"/>*/}
                                {/*					<path*/}
                                {/*                        d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"*/}
                                {/*                        fill="#000000" fill-rule="nonzero" opacity="0.3"/>*/}
                                {/*					<path*/}
                                {/*                        d="M11,14 L9,14 C8.44771525,14 8,13.5522847 8,13 C8,12.4477153 8.44771525,12 9,12 L11,12 L11,10 C11,9.44771525 11.4477153,9 12,9 C12.5522847,9 13,9.44771525 13,10 L13,12 L15,12 C15.5522847,12 16,12.4477153 16,13 C16,13.5522847 15.5522847,14 15,14 L13,14 L13,16 C13,16.5522847 12.5522847,17 12,17 C11.4477153,17 11,16.5522847 11,16 L11,14 Z"*/}
                                {/*                        fill="#000000"/>*/}
                                {/*				</g>*/}
                                {/*			</svg>*/}
                                {/*		</span>*/}
                                {/*    </a>*/}
                                {/*    <div*/}
                                {/*        className="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right py-3">*/}
                                {/*        <ul className="navi navi-hover py-5">*/}
                                {/*            <li className="navi-item">*/}
                                {/*                <a href="#" className="navi-link">*/}
                                {/*					<span className="navi-icon">*/}
                                {/*						<i className="flaticon2-drop"></i>*/}
                                {/*					</span>*/}
                                {/*                    <span className="navi-text">New Group</span>*/}
                                {/*                </a>*/}
                                {/*            </li>*/}
                                {/*            <li className="navi-item">*/}
                                {/*                <a href="#" className="navi-link">*/}
                                {/*					<span className="navi-icon">*/}
                                {/*						<i className="flaticon2-list-3"></i>*/}
                                {/*					</span>*/}
                                {/*                    <span className="navi-text">Contacts</span>*/}
                                {/*                </a>*/}
                                {/*            </li>*/}
                                {/*            <li className="navi-item">*/}
                                {/*                <a href="#" className="navi-link">*/}
                                {/*					<span className="navi-icon">*/}
                                {/*						<i className="flaticon2-rocket-1"></i>*/}
                                {/*					</span>*/}
                                {/*                    <span className="navi-text">Groups</span>*/}
                                {/*                    <span className="navi-link-badge">*/}
                                {/*						<span*/}
                                {/*                            className="label label-light-primary label-inline font-weight-bold">new</span>*/}
                                {/*					</span>*/}
                                {/*                </a>*/}
                                {/*            </li>*/}
                                {/*            <li className="navi-item">*/}
                                {/*                <a href="#" className="navi-link">*/}
                                {/*					<span className="navi-icon">*/}
                                {/*						<i className="flaticon2-bell-2"></i>*/}
                                {/*					</span>*/}
                                {/*                    <span className="navi-text">Calls</span>*/}
                                {/*                </a>*/}
                                {/*            </li>*/}
                                {/*            <li className="navi-item">*/}
                                {/*                <a href="#" className="navi-link">*/}
                                {/*					<span className="navi-icon">*/}
                                {/*						<i className="flaticon2-gear"></i>*/}
                                {/*					</span>*/}
                                {/*                    <span className="navi-text">Settings</span>*/}
                                {/*                </a>*/}
                                {/*            </li>*/}
                                {/*            <li className="navi-separator my-3"></li>*/}
                                {/*            <li className="navi-item">*/}
                                {/*                <a href="#" className="navi-link">*/}
                                {/*					<span className="navi-icon">*/}
                                {/*						<i className="flaticon2-magnifier-tool"></i>*/}
                                {/*					</span>*/}
                                {/*                    <span className="navi-text">Help</span>*/}
                                {/*                </a>*/}
                                {/*            </li>*/}
                                {/*            <li className="navi-item">*/}
                                {/*                <a href="#" className="navi-link">*/}
                                {/*					<span className="navi-icon">*/}
                                {/*						<i className="flaticon2-bell-2"></i>*/}
                                {/*					</span>*/}
                                {/*                    <span className="navi-text">Privacy</span>*/}
                                {/*                    <span className="navi-link-badge">*/}
                                {/*						<span*/}
                                {/*                            className="label label-light-danger label-rounded font-weight-bold">5</span>*/}
                                {/*					</span>*/}
                                {/*                </a>*/}
                                {/*            </li>*/}
                                {/*        </ul>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column-fluid">
                        <div className="container">
                            <Main/>

                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card card-custom card-stretch gutter-b"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="footer bg-white py-4 d-flex flex-lg-column" id="kt_footer">*/}
                {/*    <div*/}
                {/*        className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">*/}
                {/*        <div className="text-dark order-2 order-md-1">*/}
                {/*            <span className="text-muted font-weight-bold mr-2">2020©</span>*/}
                {/*            <a href="http://keenthemes.com/metronic" target="_blank"*/}
                {/*               className="text-dark-75 text-hover-primary">Keenthemes</a>*/}
                {/*        </div>*/}
                {/*        <div className="nav nav-dark">*/}
                {/*            <a href="http://keenthemes.com/metronic" target="_blank"*/}
                {/*               className="nav-link pl-0 pr-5">About</a>*/}
                {/*            <a href="http://keenthemes.com/metronic" target="_blank"*/}
                {/*               className="nav-link pl-0 pr-5">Team</a>*/}
                {/*            <a href="http://keenthemes.com/metronic" target="_blank"*/}
                {/*               className="nav-link pl-0 pr-0">Contact</a>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    detectStat: state.entities.detectStat,
});
const mapDispatchToProps = (dispatch) => ({
    loadDetectStat: (state) => dispatch(loadDetectStat(state)),
    // loadDetectStatBaseOnPeriodReceive: (start, end) => dispatch(loadDetectStatBaseOnPeriodReceive(start, end)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
