/* eslint-disable */
import { all, takeEvery, put, call, select, take } from 'redux-saga/effects'
import { getBtcData } from '../../service/btc.service'

function* SET_FIVE_SECOND_AGO_DATA(){
  const lastBtcData = yield select(state => state.btcData.currentPrice)
  // console.log(lastBtcData)
  yield put({
    type: 'btcData/SET_STATE',
    payload: {
      fiveSecondAgoPrice:lastBtcData,
    },
  })
}

export function* GET_BTC_DATA() {
  //set last data to previous data
  yield SET_FIVE_SECOND_AGO_DATA()
  // call axios service
  const success = yield call(getBtcData)
  // console.log(success)
  // set data from axios if fetching success
  if (success) {
    yield put({
      type: 'btcData/SET_STATE',
      payload: {
        currentPrice:success,
      },
    })
  }
}


export default function* rootSaga() {
  yield all([
    takeEvery('btcData/GET_BTC_DATA', GET_BTC_DATA),
  ])
}
