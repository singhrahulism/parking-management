import { configureStore } from "@reduxjs/toolkit";
import parkingReducer from './parkingSlice'

const store = configureStore({
    reducer: {
        parking: parkingReducer
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }))
})

export type RootState = ReturnType<typeof store.getState>

export default store