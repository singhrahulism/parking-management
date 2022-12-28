import '@testing-library/jest-native/extend-expect'
import React from "react";
import { screen, render, fireEvent, container } from "@testing-library/react-native"; 
import AllocateSpaceScreen from "../../src/screens/AllocateSpaceScreen";
import { renderWithRedux } from "../../helpers/testHelpers/renderWithRedux";
import { NavigationContainer } from "@react-navigation/native";

describe('AllocateSpaceScreen', () => {
    it('renders correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <AllocateSpaceScreen />
            </NavigationContainer>
        )
        expect(true).toEqual(true)
    })
    
    it('shows Title correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <AllocateSpaceScreen />
            </NavigationContainer>
        )
        expect(screen.getByTestId('ass-title')).toBeVisible()
    })

    it('shows current time correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <AllocateSpaceScreen />
            </NavigationContainer>
        )
        expect(screen.getByTestId('ass-current-time')).toBeVisible()
    })
    
    describe('Registration Number TextInput', () => {
        
        it('renders correctly', () => {
            renderWithRedux(
                <NavigationContainer>
                    <AllocateSpaceScreen />
                </NavigationContainer>
            )
            expect(true).toEqual(true)
            
        })
        
        it('changes text correctly', () => {
            renderWithRedux(
                <NavigationContainer>
                    <AllocateSpaceScreen />
                </NavigationContainer>
            )
            fireEvent.changeText(screen.getByPlaceholderText('Enter Registration Number'), 'HR87G1111')
            expect(screen.getByPlaceholderText('Enter Registration Number')).toHaveProp('value', 'HR87G1111')
        })
        
    })
      
})