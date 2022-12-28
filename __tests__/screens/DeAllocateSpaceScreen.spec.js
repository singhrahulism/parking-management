import '@testing-library/jest-native/extend-expect'
import React from "react";
import { render, screen } from '@testing-library/react-native'
import DeAllocateSpaceScreen from "../../src/screens/DeAllocateSpaceScreen";
import { renderWithRedux } from "../../helpers/testHelpers/renderWithRedux";
import { NavigationContainer } from "@react-navigation/native";

describe('DeAllocateSpaceScreen', () => {

    const route = {
        params: {
            car: {
                _id: '1',
                isAlloted: true,
                startTime: 'Mon Dec 05 2022 13:42:09 GMT+0530 (India Standard Time)',
                registrationNumber: 'ABCD'
            }
        }
    }

    it('renders correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <DeAllocateSpaceScreen route={route}/>
            </NavigationContainer>
        )
        expect(true).toEqual(true)
    })

    it('renders title correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <DeAllocateSpaceScreen route={route}/>
            </NavigationContainer>
        )
        expect(screen.getByTestId('dass-title')).toBeVisible()
    })

    // --> 1

    it('renders parking location correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <DeAllocateSpaceScreen route={route}/>
            </NavigationContainer>
        )
        // console.log(typeof screen.getByTestId('dass-parking-location')._fiber.stateNode.props.children)
        expect(screen.getByTestId('dass-parking-location')).toBeVisible()
        expect(screen.getByText('Parking location')).toBeVisible()
    })
    
    it('renders parking location value correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <DeAllocateSpaceScreen route={route}/>
            </NavigationContainer>
        )
        expect(screen.getByTestId('dass-parking-location-value')).toBeVisible()
        expect(screen.getByText('At parking slot 1')).toBeVisible()
    })

    // --> 2

    it('renders registration number correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <DeAllocateSpaceScreen route={route}/>
            </NavigationContainer>
        )
        expect(screen.getByTestId('dass-registration-number')).toBeVisible()
        expect(screen.getByText('Registration Number')).toBeVisible()
    })
    
    it('renders registration value correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <DeAllocateSpaceScreen route={route}/>
            </NavigationContainer>
        )
        expect(screen.getByTestId('dass-registration-number-value')).toBeVisible()
        expect(screen.getByText('ABCD')).toBeVisible()
    })

    // --> 3

    it('renders parked slot correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <DeAllocateSpaceScreen route={route}/>
            </NavigationContainer>
        )
        expect(screen.getByTestId('dass-parked-at')).toBeVisible()
        expect(screen.getByText('Parked at')).toBeVisible()
    })
    
    it('renders parked slot value correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <DeAllocateSpaceScreen route={route}/>
            </NavigationContainer>
        )
        expect(screen.getByTestId('dass-parked-at-value')).toBeVisible()
        expect(screen.getByText('Mon Dec 05 2022 13:42:09 GMT+0530 (India Standard Time)')).toBeVisible()
    })

    // --> 4

    it('renders current time correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <DeAllocateSpaceScreen route={route}/>
            </NavigationContainer>
        )
        expect(screen.getByTestId('dass-current-time')).toBeVisible()
        expect(screen.getByText('Current Time')).toBeVisible()
    })
    
    it('renders current time value correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <DeAllocateSpaceScreen route={route}/>
            </NavigationContainer>
        )
        expect(screen.getByTestId('dass-current-time-value')).toBeVisible()
    })

    // --> 5

    it('renders total time correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <DeAllocateSpaceScreen route={route}/>
            </NavigationContainer>
        )
        expect(screen.getByTestId('dass-total-time')).toBeVisible()
        expect(screen.getByText('Total time')).toBeVisible()
    })
    
    it('renders total time value correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <DeAllocateSpaceScreen route={route}/>
            </NavigationContainer>
        )
        expect(screen.getByTestId('dass-total-time-value')).toBeVisible()
    })

    // --> 6

    it('renders total charges correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <DeAllocateSpaceScreen route={route}/>
            </NavigationContainer>
        )
        expect(screen.getByTestId('dass-total-charges')).toBeVisible()
        expect(screen.getByText('Total charges')).toBeVisible()
    })
    
    it('renders total charges value correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <DeAllocateSpaceScreen route={route}/>
            </NavigationContainer>
        )
        expect(screen.getByTestId('dass-total-charges-value')).toBeVisible()
    })


})