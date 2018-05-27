import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import * as actionTypes from '../constants/constants'

function apiCallStoreResult(result){
    const data = {
      result: result
    }
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
            'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}

export function * storeResultSaga(action){
    try{
      const response = yield call(apiCallStoreResult, action.result)
      if(response){
        yield put({ type: actionTypes.STORE_RESULT, result: action.result })
      }
    }catch(e){
      // act on the error
      console.log(e)
    }
}

export function * watchForStoreResultSaga(){
    yield takeEvery(actionTypes.INITIATE_STORE_RESULT, storeResultSaga)
}