import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  storeResult: ['result'],
  deleteResult: ['results']
})

export const ResultTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  results: []
})

/* ------------- Reducers ------------- */

// Store result
export const storeResult = (state, { result }) => state.merge({ results: state.results.concat({ id: new Date(), value: result }) })

// Delete result
export const deleteResult = (state, { results }) => state.merge({ results: results })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.STORE_RESULT]: storeResult,
    [Types.DELETE_RESULT]: deleteResult
})