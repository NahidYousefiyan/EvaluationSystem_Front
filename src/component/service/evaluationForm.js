import jwtDecode from "jwt-decode";
import axios from "axios";

import http from "./httpService";
import {apiUrl} from "../config.json";

const apiEndpoint = apiUrl + "api/EvaluationForm/";

export function getNavBarForms() {
    return http.get(apiEndpoint + "GetFormList");
}
export function getNavBarFormsById(id) {
    return http.get(apiEndpoint + `GetFormDetail/?formId=${id}`);
}
export function postFormsAnswers(data) {
    console.log("post",JSON.stringify(data))
    return http.post(apiEndpoint ,data);
}