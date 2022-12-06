import React from 'react'
import { renderWithRedux } from '../../../helpers/testHelpers/renderWithRedux'
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import SingleParkingSpace from '../../../src/components/Parking/SingleParkingSpace'
import { NavigationContainer } from '@react-navigation/native'

describe('SingleParkingSpace', () => {

    const car1 = {
        _id: '1',
        isAlloted: true,
        startTime: 'Mon Dec 05 2022 13:42:09 GMT+0530 (India Standard Time)',
        registrationNumber: 'ABCD'
    }

    const car2 = {
        _id: '1',
        isAlloted: false,
        startTime: null,
        registrationNumber: null
    }

    it('renders correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <SingleParkingSpace car={car1} />
            </NavigationContainer>
        )
        expect(true).toEqual(true)
    })
    
    it('shows car id', () => {
        renderWithRedux(
            <NavigationContainer>
                <SingleParkingSpace car={car1} />
            </NavigationContainer>
        )
        expect(screen.getByText('1')).toBeVisible()
    })
    
    // it('navigates to DeAllocateSpace Screen if pressed because car.isAlloted is true', () => {
        
    //     const mockedNavigation = jest.fn();

    //     jest.mock('@react-navigation/native', () => {
    //     return {
    //         useNavigation: () => ({
    //             navigation: {
    //                 navigate: mockedNavigation
    //             }
    //         }),
    //     };
    //     });

    //     renderWithRedux(
    //         <NavigationContainer>
    //             <SingleParkingSpace car={car1} />
    //         </NavigationContainer>
    //     )
    //     expect(screen.getByTestId('sps-button')).toBeVisible()
    //     // jest.spyOn(Navigation, "useNavigation").mockReturnValue({navigate, mockedNavigation})
    //     fireEvent.press(screen.getByTestId('sps-button'))
    //     expect(mockedNavigation).toHaveBeenCalledWith('DeAllocateSpace')
    //     // expect(mockedNavigation).toBeCalled()
    //     // console.log(mockedNavigation.fn())
    // })

    it('shows registration number and parking time if car.isAlloted is true', () => {
        renderWithRedux(
            <NavigationContainer>
                <SingleParkingSpace car={car1} />
            </NavigationContainer>
        )
        expect(screen.getByTestId('sps-car-ia-1')).toBeVisible()
        expect(screen.getByTestId('sps-car-ia-2')).toBeVisible()
    })

    
    it('shows No car parked if car.isAlloted is false', () => {
        renderWithRedux(
            <NavigationContainer>
                <SingleParkingSpace car={car2} />
            </NavigationContainer>
        )
        expect(screen.getByTestId('sps-car-ina')).toBeVisible()
    })


})