import { createSlice } from "@reduxjs/toolkit";

type ParkedCarType = {
    _id: string,
    isAlloted: Boolean
}

type State = {
    parkingSpaces: number,
    parkedCars:ParkedCarType []

}

const initialState:State = {
    parkingSpaces: 14,
    parkedCars: []
}

const parkingSlice = createSlice({
    name: 'parking',
    initialState,
    reducers: {
        setParkingSpaces: (state, action) => {
            console.log('here')
            console.log(action)
            state.parkingSpaces = action.payload
        },
        generateParkingSpaces: (state, action) => {
            let space = []
            for(let i=0 ; i < state.parkingSpaces ; ++i)
            {
                space.push({
                    "_id": i+1,
                    isAlloted: false
                })
            }
            Object.assign(state.parkedCars, space)
        }
    }
})

export const { setParkingSpaces, generateParkingSpaces } = parkingSlice.actions

export default parkingSlice.reducer