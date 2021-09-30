
const initialState = {
  currentPrice: {},
  fiveSecondAgoPrice:{},
}

export default (state = initialState, action)=>{
  switch (action.type) {
    case 'btcData/SET_STATE':
      return { ...state, ...action.payload }
    default:
      return state
  }
}
