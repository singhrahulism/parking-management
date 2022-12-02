import { configureStore } from "@reduxjs/toolkit";
import parkingReducer from './parkingSlice'

export default configureStore({
    reducer: {
        parking: parkingReducer
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }))
})