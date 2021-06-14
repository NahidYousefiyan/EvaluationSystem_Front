import {createAction, createReducer, createSlice} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
import {apiCallBegan} from "./api";
import {toast} from "react-toastify";

const slice = createSlice({
    name: 'department',

    initialState: {
        list: [],
        count: 0,
        loading: false,

    },
    reducers: {

        departmentList: ((state, action) => {
            console.log("pay", action.payload)
            state.list = action.payload.results
            state.count = action.payload.count
            state.loading = false
        }),


    }
});
export const {departmentList} = slice.actions;
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
export const getDepartment = () => apiCallBegan({
        url: `/department/`,
        onSuccess: departmentList.type,
        method: 'GET',
    }
)

