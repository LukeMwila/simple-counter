import { watchForStoreResultSaga } from './storeResult'
import { watchForDeleteResultSaga } from './deleteResult'
// The root saga is a single entry point to start all the root sagas at once
export function * rootSaga(){
    yield [
        watchForStoreResultSaga(),
        watchForDeleteResultSaga()
    ]
}