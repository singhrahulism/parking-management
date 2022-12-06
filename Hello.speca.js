import React from 'react'
import { render, screen } from '@testing-library/react-native'
import Hello from "./Hello";

describe('Hello', () => {
    it('renders the correct message', () => {
        render(<Hello name={'Rahul bro'} />);
        expect(screen.getByText('Hello, Rahul bro!')).toBeVisible()
    })
})