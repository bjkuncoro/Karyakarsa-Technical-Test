import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Flex ,Heading, Text, Image} from '@chakra-ui/react'
import BtcCard from './BtcCard'

const Landing = () => {
    // init all need
    const history = useHistory()
    const dispatch = useDispatch()
    const btcData = useSelector(state => state.btcData)

    // all component state
    const [currPrice, setcurrPrice] = useState(0)
    const [prevPrice, setprevPrice] = useState(0)
    const [updatedTime, setupdatedTime] = useState()
    const [status, setstatus] = useState('')

    //all function and hooks
    useEffect(() => {
        //get Data and start interval when component start
        const interval = setInterval(() => {
            dispatch({type:'btcData/GET_BTC_DATA'})
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        //do something if btcData updated
        console.log(`current:${btcData.currentPrice?.bpi?.USD.rate_float.toFixed(2)}, 5secago:${btcData.fiveSecondAgoPrice?.bpi?.USD.rate_float.toFixed(2)}`)
        setcurrPrice(btcData.currentPrice?.bpi?.USD.rate_float.toFixed(2))
        setprevPrice(btcData.fiveSecondAgoPrice?.bpi?.USD.rate_float.toFixed(2))
        setupdatedTime(btcData.currentPrice?.time?.updated)
        // compare current price with previous
        const status = btcData.currentPrice?.bpi?.USD.rate_float > btcData.fiveSecondAgoPrice?.bpi?.USD.rate_float?'naik':btcData.currentPrice?.bpi?.USD.rate_float < btcData.fiveSecondAgoPrice?.bpi?.USD.rate_float?'turun':'tetap'
        //status : string : naik || turun || tetap
        setstatus(status)
        console.log(status)
    }, [btcData.currentPrice])

    return (
        <Flex width='100%' minHeight='100vh' bg='#eeeeee' align='center' direction='column' p={3}>
            <BtcCard currPrice={currPrice} updatedTime={updatedTime} status={status} symbol={btcData.currentPrice?.bpi?.USD.symbol} />
            <Flex mt={10}>
                <Text color="#9a9a9a" fontSize="sm" textAlign='center' fontWeight='normal'>
                    Taken from coinbase Public Api <br/>
                    Made by BAGUS JATI KUNCORO
                </Text>
            </Flex>
        </Flex>
    )
}

export default Landing
