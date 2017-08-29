/**
 * Created by sonya on 20.08.17.
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { combineReducers } from 'redux'
import page from '../reducers/page-reducer'
import user from '../reducers/user'

export default function configureStore(initialState) {
    const logger = createLogger()
    const store = createStore(combineReducers({
        page,
        user
    }), initialState, applyMiddleware(thunk, logger))
    console.log(store.getState())
    return store
}