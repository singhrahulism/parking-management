import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import PrimaryButton from "../../../src/components/Button/PrimaryButton";

describe('PrimaryButton', () => {

    it('renders correctly', () => {
        render(<PrimaryButton />)
        expect(true).toEqual(true)
    })

    it('displays title', () => {
        render(
            <PrimaryButton title={'Rahul Singh'} />
        )
        expect(screen.getByText('Rahul Singh')).toBeVisible()
    })

    it('uses indicator if useIndicator=true', () => {
        render(
            <PrimaryButton useIndicator={true} />
        )
        expect(screen.getByLabelText('using-indicator')).toBeVisible()
    })

    it('does not uses indicator if useIndicator=false', () => {
        render(
            <PrimaryButton useIndicator={false} />
        )
        expect(screen.getByTestId('using-text')).toBeVisible()
    })

    it('button is pressed', () => {

        const buttonFn = jest.fn()

        render(
            <PrimaryButton handlePress={() => buttonFn()} />
        )
        expect(screen.getByTestId('button')).toBeVisible()
        fireEvent.press(screen.getByTestId('button'))
        expect(buttonFn).toBeCalled()
    })

    it('calls handlePressCallback() if button is pressed and isActive=true', () => {

        const buttonFn = jest.fn()

        render(
            <PrimaryButton handlePress={() => buttonFn()} isActive={true} />
        )
        expect(screen.getByTestId('button')).toBeVisible()
        fireEvent.press(screen.getByTestId('button'))
        expect(buttonFn).toBeCalled()
    })

    it('calls handlePressFallback() if button is pressed and isActive=false', () => {

        const buttonFn = jest.fn()

        render(
            <PrimaryButton handlePress={() => buttonFn()} isActive={false} />
        )
        expect(screen.getByTestId('button')).toBeVisible()
        fireEvent.press(screen.getByTestId('button'))
        expect(buttonFn).toHaveBeenCalledTimes(0)
    })

})