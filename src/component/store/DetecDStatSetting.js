import {createAction, createReducer, createSlice} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
import {apiCallBegan} from "./api";
import {toast} from "react-toastify";

const slice = createSlice({
    name: 'detectStatSetting',

    initialState: {
        settings: {},
        features: [],
        count: 0,
        loading: false,

    },
    reducers: {

        detectSettingSave: ((state, action) => {
            console.log("pay", action.payload)
            state.setting = action.payload
            state.loading = false
            toast.success("ذخیره شده")
            // state.count = action.payload.count
        }),
        detectFeature: ((state, action) => {

            state.features = action.payload
            state.loading = false
            // state.count = action.payload.count
        }),
        DetectSetting: ((state, action) => {
            state.settings = action.payload
            state.loading = false
            // state.count = action.payload.count
        }),



    }
});
export const {detectSettingSave,detectFeature,DetectSetting} = slice.actions;
export default slice.reducer;
//selector
export const getResoled = state =>
    state.entities.bugs.filter(m => !m.resolved)

//memorized

createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => !bug.resolved)
)
//actioncreatoy
export const SaveDetectSetting= (data) => apiCallBegan({
        url: `/Detectd/`,
        onSuccess: detectSettingSave.type,
        method: 'POST',
        data: data,
        // loading: detectSettingSave.type
        // onError: apiCallFail.type
    }
)
export const getDetectFeature= () => apiCallBegan({
        url: `/Detectd/features/`,
        onSuccess: detectFeature.type,
        method: 'GET',

        // loading: detectSettingSave.type
        // onError: apiCallFail.type
    }
)
export const getDetectSetting= (depId) => apiCallBegan({

        url: `/Detectd/${depId}/department/`,
        onSuccess: DetectSetting.type,
        method: 'GET',

        // loading: detectSettingSave.type
        // onError: apiCallFail.type
    }
)

