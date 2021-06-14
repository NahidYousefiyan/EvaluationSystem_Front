import {createAction, createReducer, createSlice} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
import {apiCallBegan} from "./api";
import {ToastContainer, toast} from 'react-toastify';

// export const bugAdded = createAction('bugAdded')
// export const bugRemove = createAction('bugRemove')
let lastId = 0
const slice = createSlice({
    name: 'auth',
    initialState: {
        list: [],
        userInfo: {},
        extra: {},
        isAuthorize: false,
        loading: false,
    },
    reducers: {
        // bugAdded: ((state, action) => {
        //     state.push({
        //         id: ++lastId,
        //         description: action.payload.description,
        //         resolved: true
        //     });
        // })
        authReceived: ((state, action) => {
            console.log("pay",action.payload)
            state.token = action.payload.token
            state.userInfo = action.payload.user
            state.extra = action.payload.extra
            state.isAuthorize = true
            localStorage.setItem('info', JSON.stringify(action.payload))
            setTimeout(() => {
                window.location.reload(false);
            }, 500);

        }),
        authFail: ((state, action) => {
            console.log("Sss", action)
            toast.error("نام کاربری یا رمز عبور شما اشتباه است ")

            state.isAuthorize = false

            state.fail = true
        })
        ,
        // bugRemove: ((state, action) => {
        //     state = state.filter(m => m.id === action.payload.id)
        // })

    }
});
export const {authReceived, authFail} = slice.actions;
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
export const makeLogin = (username, password) => apiCallBegan({
        url: 'api/Account/Login/',
        onSuccess: authReceived.type,
        onError: authFail.type,
        data: {userName: username, password: password},
        method: 'post',
        login: true
        // onError: apiCallFail.type
    }
)


// export default function reducer () {
//     return createReducer([], {
//         [bugAdded.type]: ((state, action) => {
//             state.push({
//                 id: ++lastId,
//                 description: action.payload.description,
//                 resolved: true
//             });
//         })
//         ,
//         [bugRemove.type]: ((state, action) => {
//             state = state.filter(m => m.id === action.payload.id)
//         })
//     })
// }

// export function reducer(state = [], action) {
//     switch (action.type) {
//         case bugAdded.type:
//             return [
//                 ...state, {
//                     id: ++lastId,
//                     description: action.payload.description,
//                     resolved: true
//                 }
//             ];
//         case bugRemove.type:
//             return state.filter(m => m.id === action.payload.id)
//         default:
//             return state
//     }
// }