import jwtDecode from "jwt-decode";
import axios from "axios";

import http from "./httpService";
import {apiUrl} from "../config.json";

const apiEndpoint = apiUrl + "api/";

export function postAuth(data) {
    console.log("post", data)
    return http.post(apiEndpoint + "Account/Login/", data);
}
export function getUserDataInfo() {
    return http.get(apiEndpoint + "Account/GetInfo/");
}
