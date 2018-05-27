import { watchForStoreResultSaga } from './storeResult'
// The root saga is a single entry point to start all the root sagas at once
export function * rootSaga(){
    yield [
        watchForStoreResultSaga()
    ]
}