import axios from "axios";
import {toast} from "react-toastify";
import {getCurrentUser} from "./authService";

axios.interceptors.request.use(
    function (config) {

        const token = JSON.parse(getCurrentUser());
        if (token !== null) {
            config.headers.Authorization = token.accessToken;
            console.log("token call",token)
        }

        // Do something before request is sent
        config.withCredentials = false;
        return config;
    },
    // function (error) {
    //     // Do something with request error
    //     return Promise.reject(error);
    // }
);
axios.interceptors.response.use(null,
    error => {
        const expectedError =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (!expectedError) {
            console.log("error", error);
            // error.map((item, i) => {
            //     console.log(item)
            // })
            console.log("error", error);
            toast.error("خطا در برقراری ارتباط با سرور.");
        }
        console.log("errorali", error, error.response);

        if (error.response && error.response.data.non_field_errors) {
            error.response.data.non_field_errors.map((item, i) => (
                toast.error(item)
            ))
        }

        if (error.response && typeof (error.response.data.non_field_errors) === "array") {
            error.response.data.non_field_errors.map((item, i) => (
                toast.error(item)
            ))
        }

        return Promise.reject(error);
    });

// function setJwt(jwt) {
//   axios.defaults.headers.common["x-auth-token"] = jwt;
// }

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,

};
