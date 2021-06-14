import {createAction, createReducer, createSlice} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
import {apiCallBegan} from "./api";

const slice = createSlice({
    name: 'detectStat',
    initialState: {
        list: [],
        zoomList: [],
        count: 0,
        loading: false,

    },
    reducers: {

        detectStatReceive: ((state, action) => {
            console.log("pay", action.payload)
            state.list = action.payload
            state.loading = false
            // state.count = action.payload.count
        }),
        detectStatBaseOnPeriodReceive: ((state, action) => {
            state.list = action.payload
            state.count = action.payload.count
        }),
        detectStatFeatureZoom: ((state, action) => {
            state.zoomList = action.payload
            state.loading = false
            
            // state.count = action.payload.count
        }),
        detectStatLoading: ((state, action) => {
            state.loading = true

        })


    }
});
export const {detectStatReceive, detectStatFeatureZoom, detectStatLoading} = slice.actions;
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
export const loadDetectStat = (state) => apiCallBegan({
        url: `/DetectdStat/hour/?state=${state}`,
        onSuccess: detectStatReceive.type,
        method: 'GET',
        loading: detectStatLoading.type
        // onError: apiCallFail.type
    }
)
export const loadDetectStatZoom = (state, feature, start, end) => apiCallBegan({
        url: `/DetectdStat/zoom/?state=${state}`,
        onSuccess: detectStatFeatureZoom.type,
        data: {'start': start, "end": end,'feature':feature},
        method: 'POST',
        loading: detectStatLoading.type
    }
)
export const loadDetectStatBaseOnPeriodReceive = (start, end) => apiCallBegan({
        url: `/DetectdStat/zoom/`,
        onSuccess: detectStatReceive.type,
        data: {'start': start, "end": end},
        method: 'POST',
        loading: detectStatLoading.type
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