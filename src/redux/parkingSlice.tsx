import { createSlice } from "@reduxjs/toolkit";

type ParkedCarType = {
    _id: string,
    isAlloted: Boolean,
    startTime?: Date,
    registrationNumber?: string
}

type State = {
    parkingSpaces: number,
    parkedCars:ParkedCarType []
    parked: number[]
}

const initialState:State = {
    parkingSpaces: 14,
    parkedCars: [],
    parked: []
}

const getRandomParkingSpaceAvailable = (target: any, limit: number) => {
    while(true)
    {
        let num:number = (Math.floor(Math.random() * (limit))+1)
        if(!target.includes(num))
        {
            return num
        }
    }
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
        },
        parkCarInParkingLot: (state, action) => {
            let randomSpace = getRandomParkingSpaceAvailable(state.parked, state.parkingSpaces)
            console.log(randomSpace)
            state.parked.push(randomSpace)
            state.parkedCars[randomSpace-1].isAlloted = true
            state.parkedCars[randomSpace-1].startTime = action.payload.startDate
            state.parkedCars[randomSpace-1].registrationNumber = action.payload.registrationNumber
            // console.log(state.parked)
            // console.log(action)
        }
    }
})

export const { setParkingSpaces, generateParkingSpaces, parkCarInParkingLot } = parkingSlice.actions

export default parkingSlice.reducer