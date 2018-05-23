// import * as actionTypes from '../actions'
import {
    INCREMENT,
    DECREMENT,
    ADD_COUNTER,
    SUBTRACT_COUNTER
} from '../constants/constants'

const initialState = {
    counter: 0
}

const reducer = ( state = initialState, action ) => {
    switch( action.type ){
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case SUBTRACT_COUNTER:
            return {
                ...state,
                counter: state.counter - action.value
            }
    }
    return state
}

export default reducer