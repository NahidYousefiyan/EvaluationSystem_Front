import {createSlice} from '@reduxjs/toolkit'


let lastId = 0
const slice = createSlice({
    name: 'breadcrumb',
    initialState: {
        data: {payload: {main: "", part: []}},
        loading: false,
    },
    reducers: {

        breadcrumbRecived: ((state, action) => {
            console.log("fuckkkkali", state, action.payload
            )
            state.data = action.payload
        })


    }
});
export const {breadcrumbRecived} = slice.actions;
export default slice.reducer;


//actioncreatoy
export const breadcrumbChange = (payload) => breadcrumbRecived({payload})


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