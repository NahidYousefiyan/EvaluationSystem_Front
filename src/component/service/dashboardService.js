import jwtDecode from "jwt-decode";
import axios from "axios";

import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "api/Reporting/";

export  function getDashboardCollegeScore() {
  return http.get(apiEndpoint+"GetCollegeScore/" );
}
