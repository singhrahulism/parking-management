import parkingSlice from "../../src/redux/parkingSlice";
import { setParkingSpaces } from "../../src/redux/parkingSlice";
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
    
    it("should add a car's data to the parking state", () => {
        let payload = {
            _id: '1',
            isAlloted: true,
            startTime: 'Mon Dec 05 2022 13:42:09 GMT+0530 (India Standard Time)',
            registrationNumber: 'HR87'
        }
        
        store.dispatch(
            parkingSlice.actions.setParkingSpaces(payload)
        )

        let state = store.getState().parking
        expect(state.parkedCars[0]).toEqual(payload)
        expect(state.parked.length).toEqual(1)
    })

})