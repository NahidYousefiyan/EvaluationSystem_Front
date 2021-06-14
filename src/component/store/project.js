import {createAction, createReducer,createSlice} from '@reduxjs/toolkit'

// export const bugAdded = createAction('bugAdded')
// export const bugRemove = createAction('bugRemove')
let lastId = 0
const slice=createSlice({
    name:'bugs',
    initialState:[],
    reducers:{
         projectAdded: ((state, action) => {
            state.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: true
            });
        })
        ,
        projectRemove: ((state, action) => {
            state = state.filter(m => m.id === action.payload.id)
        })

    }
});
export const { projectAdded ,projectRemove}=slice.actions;
export default slice.reducer;




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