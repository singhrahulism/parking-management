import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { renderWithRedux } from '../../helpers/testHelpers/renderWithRedux'
import HomeScreen from '../../src/screens/HomeScreen'

describe('HomeScreen', () => {
    it('renders correctly', () => {
        renderWithRedux(
            <NavigationContainer>
                <HomeScreen />
            </NavigationContainer>
        )
    })
    
    describe('parking spaces TextInput', () => {  
        it('renders correctly', () => {
            renderWithRedux(
                <NavigationContainer>
                    <HomeScreen />
                </NavigationContainer>
            )
            expect(screen.getByTestId('hs-ti-parking-spaces')).toBeVisible()
        })
        
        it('updates input correctly', () => {
            renderWithRedux(
                <NavigationContainer>
                    <HomeScreen />
                </NavigationContainer>
            )
            fireEvent.changeText(screen.getByTestId('hs-ti-parking-spaces'), '123')
            expect(screen.getByTestId('hs-ti-parking-spaces')).toHaveProp('value', '123')
        })
        
        it('navigates on press', async() => {
            const mockedNavigation = jest.fn();
            
            const jestmock = jest.mock('@react-navigation/native', () => {
            return {
                useNavigation: () => ({
                navigate: mockedNavigation,
            }),
            };
            });

            console.log(jestmock.spyOn())
            
            renderWithRedux(
                <NavigationContainer>
                    <HomeScreen />
                </NavigationContainer>
            )

            await waitFor(() => {
                fireEvent.press(screen.getByTestId('hs-ti-parking-spaces'))
            })

            expect(mockedNavigation).toHaveBeenCalledWith('ParkingLot')
            
        })

    })
})