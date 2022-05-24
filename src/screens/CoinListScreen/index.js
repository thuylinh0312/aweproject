import React, {useEffect, useState} from 'react'
import {View, FlatList, ActivityIndicator} from 'react-native'
import axios from 'axios'
import { CoinListHeader } from '../../components/CoinListHeader'
import { CoinListItem } from '../../components/CoinListItem'

//Load more Load 20 items
// onReachedEnd => goi API lấy các item tiếp theo

export const CoinListScreen = () => {
    const [list, setList] = useState([])
    // const getCoinList = (start) => {
    //     axios.get(`https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start}&sort_dir=desc&limit=20`)
    //             .then(({data}) => {
    //                 setList(list.concat(data.data))
    //                 console.log('thennnnnnnnnnn')
    //             })
    //             .catch((error) => {
    //                 console.log('eeeeeee', error)
    //             })
    // console.log('sau then catch')
    // }

    const getCoinList = async (start) => { //lazy load
        try {
            const {data} = await axios.get(`https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start}&sort_dir=desc&limit=1000`)
            setList(list.concat(data.data))
        } catch (e) {
            console.log('eeeeeee', error)
        }
        //console.log('sau try catch')
    }

    useEffect(() => {
        // fetch('https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&sort_dir=desc&limit=100')
        //     .then(response => {
        //         response.json().then(data => setList(data.data))
        //     })

        // axios.get('https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&sort_dir=desc&limit=20')
        //     .then(({data}) => {
        //         console.log('data tu coinmarketcap', data)
        //         setList(data.data)
        //     })
        getCoinList(1)
    }, []) // array dependencies

    return (
        <View style={{flex: 1}}>
            <CoinListHeader />
            {list.length === 0 ? <ActivityIndicator /> : (
                <FlatList
                // ListHeaderComponent={(
                //     <View>
                //         <Text>Day la header </Text>
                //     </View>
                // )}
                // ListFooterComponent={(
                //     <View>
                //         <Text>Day la footer </Text>
                //     </View>
                // )}
                onEndReached={() => getCoinList(list.length + 1)}
                data={list}
                renderItem={({item, index}) => {
                    return (
                        <CoinListItem item={item} />
                    )     
                }}
                ListFooterComponent={<ActivityIndicator />}
            />
            )}
        </View>
    )
}

