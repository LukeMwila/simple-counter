/* export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD_COUNTER = 'ADD_COUNTER'
export const SUBTRACT_COUNTER = 'SUBTRACT_COUNTER'
export const STORE_RESULT = 'STORE_RESULT'
export const DELETE_RESULT = 'DELETE_RESULT' */
import {
    INCREMENT,
    DECREMENT,
    ADD_COUNTER,
    SUBTRACT_COUNTER,
    INITIATE_STORE_RESULT,
    INITIATE_DELETE_RESULT
} from '../constants/constants'

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add = (value) => {
    return {
        type: ADD_COUNTER,
        value: value
    }
}

export const subtract = (value) => {
    return {
        type: SUBTRACT_COUNTER,
        value: value
    }
}

export const storeResult = (value) => {
    return {
        type: INITIATE_STORE_RESULT,
        result: value
    }
}

export const deleteResult = (results, id) => {
    return {
        type: INITIATE_DELETE_RESULT,
        results: results,
        resultElId: id
    }
}