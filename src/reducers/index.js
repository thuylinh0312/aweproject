import { combineReducers } from 'redux'
import coinListReducer from './coinListReducer'
import testReducer from './testReducer'

export default combineReducers({
    coinList: coinListReducer,
    test: testReducer
})