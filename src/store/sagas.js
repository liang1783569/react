import { takeEvery } from 'redux-saga/effects'
import { sagas as item } from 'pages/home/index'



let { GETITEM } = item.types

function* sagas(){
    yield takeEvery(GETITEM,item.action)
}

export default sagas