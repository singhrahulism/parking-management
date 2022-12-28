import '@testing-library/jest-native/extend-expect'
import { setParkingSpaces, generateParkingSpaces, parkCarInParkingLot, freeCarInParkingLot } from "../../src/redux/parkingSlice";
import store from "../../src/redux/store";

describe('parkingSlice redux', () => {

    it('should initially set parkingSpaces to 0 and parkedCars and parked to an empty array', () => {
        let initialState = {
            parkingSpaces: 0,
            parkedCars: [],
            parked: []
        }
        const state = store.getState().parking
        expect(state).toEqual(initialState)
    })

    it('should set parking spaces to a definite number', () => {
        store.dispatch(setParkingSpaces(5))
        let state = store.getState().parking.parkingSpaces
        expect(state).toEqual(5)
    })
    
    it('should generate parking spaces', () => {
        let state

        store.dispatch(setParkingSpaces(1))
        state = store.getState().parking.parkingSpaces
        expect(state).toEqual(1)
    
        store.dispatch(generateParkingSpaces())
        state = store.getState().parking
        expect(state.parkedCars.length).toEqual(1)
        expect(state.parkedCars[0]).toEqual({
            "_id": 1,
            isAlloted: false
        })
    })

    it("should add a car's data to the parking state", () => {
        let state
        let startTime = Date()

        store.dispatch(setParkingSpaces(1))
        state = store.getState().parking.parkingSpaces
        expect(state).toEqual(1)

        store.dispatch(generateParkingSpaces())
        state = store.getState().parking
        expect(state.parkedCars.length).toEqual(1)
        expect(state.parkedCars[0]).toEqual({
            "_id": 1,
            isAlloted: false
        })

        store.dispatch(parkCarInParkingLot({
            startDate: startTime,
            registrationNumber: 'HR87'
        }))
        state = store.getState().parking
        expect(state.parked.length).toEqual(1)
        expect(state.parkedCars[0]).toEqual({
            _id: 1,
            isAlloted: true,
            startTime: startTime,
            registrationNumber: 'HR87'
        })
    })

    it("should free a car's data to the parking state", () => {
        let state
        let startTime = Date()

        store.dispatch(setParkingSpaces(1))
        state = store.getState().parking.parkingSpaces
        expect(state).toEqual(1)

        store.dispatch(generateParkingSpaces())
        state = store.getState().parking
        expect(state.parkedCars.length).toEqual(1)
        expect(state.parkedCars[0]).toEqual({
            "_id": 1,
            isAlloted: false
        })

        store.dispatch(parkCarInParkingLot({
            startDate: startTime,
            registrationNumber: 'HR87'
        }))
        state = store.getState().parking
        expect(state.parked.length).toEqual(1)
        expect(state.parkedCars[0]).toEqual({
            _id: 1,
            isAlloted: true,
            startTime: startTime,
            registrationNumber: 'HR87'
        })

        let prevParkedLength = store.getState().parking.parked.length
        store.dispatch(freeCarInParkingLot({
            _id: 1
        }))
        state = store.getState().parking
        expect(prevParkedLength-state.parked.length).toEqual(1)
        expect(state.parkedCars[0].isAlloted).toEqual(false)
        expect(state.parkedCars[0].startTime).toEqual(null)
        expect(state.parkedCars[0].registrationNumber).toEqual('')
    })

    

})