import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import * as actionTypes from '../constants/constants'

export function * deleteResultSaga(action){
    try{
        const updatedArray = yield action.results.filter(result => result.id !== action.resultElId)
        yield put({ type: actionTypes.DELETE_RESULT, results: updatedArray })
    }catch(e){
        // act on error
        console.log(e)
    }
}

export function * watchForDeleteResultSaga(){
    yield takeEvery(actionTypes.INITIATE_DELETE_RESULT, deleteResultSaga)
}