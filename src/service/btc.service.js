import axios from 'axios'

export async function getBtcData() {
    return axios
    .get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    .then(res => {
      //cek respone data
      // console.log(res.data)
      if (res.status==200) {
        return res.data
      }else{
        return false
      }
    })
    .catch(err => console.log({ err }))
}


