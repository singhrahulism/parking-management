import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react-native'
import NewMessageForm from './NewMessageForm'

describe('New Message Form', () => {
    describe('clicking send', () => {
        it('clears the message field', () => {
            render(<NewMessageForm />)

            fireEvent.changeText(screen.getByPlaceholderText('Message'), 'New Message')
            fireEvent.press(screen.getByText('Send'))

            expect(screen.getByPlaceholderText('Message')).toHaveProp('value', '')
        })
    })
})