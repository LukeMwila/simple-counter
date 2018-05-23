// import * as actionTypes from '../actions'
import {
    STORE_RESULT,
    DELETE_RESULT
} from '../constants/constants'

const initialState = {
    results: []
}

const reducer = ( state = initialState, action ) => {
    switch( action.type ){
        case STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result})
            }
        case DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId)
            return {
                ...state,
                results: updatedArray
            }
    }
    return state
}

export default reducer