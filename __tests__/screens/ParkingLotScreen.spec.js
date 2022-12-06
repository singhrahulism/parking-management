import React from 'react'
import { render, screen } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { renderWithRedux } from '../../helpers/testHelpers/renderWithRedux'
import ParkingLotScreen from '../../src/screens/ParkingLotScreen'

describe('HomeScreen', () => {
    it('renders correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <ParkingLotScreen />
            </NavigationContainer>
        )
    })

    describe('Primary Button', () => {

        it('shows Allocate space', () => {
            renderWithRedux(
                <NavigationContainer>
                    <ParkingLotScreen />
                </NavigationContainer>
            )
            expect(screen.getByText('Allocate Space')).toBeVisible()
        })
    })
})