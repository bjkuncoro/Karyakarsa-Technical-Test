import { all } from "redux-saga/effects";
// import user from '../redux/user'
import btcData from '../redux/btcData'

export default function* rootSagas(){
    yield all([
        // user(),
        btcData()
    ])
}