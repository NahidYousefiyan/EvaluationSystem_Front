import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import reducer from "./reducer";
import logger from './middleware/logger'
import func from "./middleware/func";
import api from "./middleware/api";

export default function configureAppStore() {
    return configureStore({
        reducer, middleware: [
            ...getDefaultMiddleware(),
            logger("ali"),
            api


        ]
    })

}