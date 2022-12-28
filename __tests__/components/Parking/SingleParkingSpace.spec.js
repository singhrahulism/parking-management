import '@testing-library/jest-native/extend-expect'
import React from 'react'
import { renderWithRedux, renderWithReduxCreate } from '../../../helpers/testHelpers/renderWithRedux'
import { fireEvent, render, screen, renderHook } from '@testing-library/react-native'
import SingleParkingSpace from '../../../src/components/Parking/SingleParkingSpace'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

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
        let {container} = renderWithRedux(
            <NavigationContainer>
                <SingleParkingSpace car={car1} />
            </NavigationContainer>
        )
        expect(container).toBeTruthy()
    })
    
    it('shows car id', () => {
        renderWithRedux(
            <NavigationContainer>
                <SingleParkingSpace car={car1} />
            </NavigationContainer>
        )
        expect(screen.getByText('1')).toBeVisible()
    })
    
    it('is ok', () => {
        let navigation = {
            navigate: jest.fn()
        }
        jest.spyOn(navigation, 'navigate')

        const tree = renderWithReduxCreate(
            <NavigationContainer>
                <SingleParkingSpace car={car1} />
            </NavigationContainer>
        )
        
        const btn = tree.root.findByProps({testID: 'sps-button'}).props
        btn.onPress()

        expect(navigation.navigate).toHaveBeenCalled()
    })
        
    it('shows toast message', () => {
        renderWithRedux(
            <NavigationContainer>
                <SingleParkingSpace car={car2} />
            </NavigationContainer>
        )
        fireEvent.press(screen.getByTestId('sps-button'))
            
    })
    
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