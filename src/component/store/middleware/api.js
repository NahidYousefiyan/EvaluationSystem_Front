import axios from 'axios'
import {apiCallBegan, apiCallFail, apiCallSuccess} from "../api";
import { toast } from "react-toastify";
import {apiUrl} from '../../config.json'

const api = ({dispatch}) => next => async action => {
    if (action.type !== apiCallBegan.type) return next(action)
    next(action)
    const {url, method, data, onSuccess, onError, login,loading} = action.payload
     if (loading) dispatch({type: loading, payload: "a"});
    try {
        const token = localStorage.getItem('token')
        let response = ''

            console.log("after")
            response = await axios.request({
                withCredentials: true,
                baseURL: apiUrl,
                url: url,
                method,
                data,
                headers: {

                }
            })
            //  response = await axios.get(
            //     'http://localhost:8000' + url,
            //
            //     {
            //         withCredentials: true
            //         // authorization: 'JWT ' + token
            //     }



        dispatch(apiCallSuccess(response.data))
        if (onSuccess) dispatch({type: onSuccess, payload: response.data})


    } catch (e) {
        console.log("asss")
        console.log("sssaa",e)
        toast.error("خطا در برقراری ارتباط با سرور.",e);

        apiCallFail(e)
        // console.log(ss.payload.response.status)
        if (onError) dispatch({type: onError, payload: e});
        dispatch(apiCallFail(e));
    }

}

export default api;