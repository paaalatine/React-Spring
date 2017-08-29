/**
 * Created by sonya on 19.08.17.
 */
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Main from '../containers/main-container'
import configureStore from '../store/configure-store'

const store = configureStore();

render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
)