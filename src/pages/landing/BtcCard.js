import React from 'react'
import { Flex ,Heading, Text, Image} from '@chakra-ui/react'

const BtcCard = ({updatedTime,currPrice,symbol,status}) => {

    const numberWithCommas = (x)=>{
        if(x) return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <Flex direction='column' boxShadow='xl' width={['100%','400px']} height='150'  bg='#fff' p={4} rounded='13'>
            <Flex flex={1} direction='row' justify='space-between'>
                <Heading fontWeight='bold' fontSize={14} color='darkslategray'>
                    Bitcoin Price 
                </Heading>
                <Text color="#9a9a9a" fontSize="sm" fontWeight='normal'>
                    {updatedTime}
                </Text>
            </Flex>
            <Flex flex={3} align='center' direction='row' justify='space-between'>
                <Flex>
                    <Heading orientation='horizontal' fontWeight='bold' fontSize={36} color={status=='naik'?'mediumseagreen':status=='turun'?'crimson':'dodgerblue'}>
                        <div dangerouslySetInnerHTML={{__html: symbol}}/>
                    </Heading>
                    <Heading data-testid='testbtcprice' ml={2} orientation='horizontal' fontWeight='bold' fontSize={36} color={status=='naik'?'mediumseagreen':status=='turun'?'crimson':'dodgerblue'}>
                        {numberWithCommas(currPrice)} 
                    </Heading>
                </Flex>
                <Flex>
                    <Image boxSize='40px' src={require(`./../../assets/img/${status=='naik'?'up':status=='turun'?'down':'rec'}.png`)}/>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default BtcCard
