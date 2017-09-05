/**
 * Created by sonya on 20.08.17.
 */
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import page from '../reducers/page-reducer'

export default function configureStore(initialState) {
    const store = createStore(combineReducers({
        page
    }), initialState)
    console.log(store.getState())
    return store
}