import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import parkingReducer from '../../src/redux/parkingSlice'
import { render } from '@testing-library/react-native'
import renderer from 'react-test-renderer'

export function renderWithRedux(renderedComponent) {
    const store = configureStore({
        reducer: {
            parking: parkingReducer
        }
    })

    return render(
        <Provider store={store}>
            {renderedComponent}
        </Provider>
    )
}

export function renderWithReduxCreate(renderedComponent) {
    const store = configureStore({
        reducer: {
            parking: parkingReducer
        }
    })

    return renderer.create(
        <Provider store={store}>
            {renderedComponent}
        </Provider>
    )
}
