import { createStore, combineReducers } from 'redux'
import { quiz } from './reducers'

const reducers = {
    quiz,
}

const rootReducer = combineReducers(reducers)

export const configureStore = () => createStore(rootReducer)