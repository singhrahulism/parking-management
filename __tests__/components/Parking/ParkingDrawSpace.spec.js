import React from 'react'
import { renderWithRedux } from '../../../helpers/testHelpers/renderWithRedux'
import { render, screen } from '@testing-library/react-native'

import ParkingDrawSpace from '../../../src/components/Parking/ParkingDrawSpace'

describe('ParkingDrawSpace', () => {

    it('renders correctly', () => {
        renderWithRedux(
            <ParkingDrawSpace />
        )
    })

    describe('FlatList', () => {
        it('renders correctly', () => {
            renderWithRedux(
                <ParkingDrawSpace />
            )
            expect(screen.getByLabelText('parkingDraw-flatlist-parkingData')).toBeVisible()
        })
    })

})