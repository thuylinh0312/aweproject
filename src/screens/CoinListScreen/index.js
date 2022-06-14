import React, {useEffect, useState} from 'react'
import {View, FlatList, ActivityIndicator, Pressable, Text} from 'react-native'
import axios from 'axios'
import { CoinListHeader } from '../../components/CoinListHeader'
import { CoinListItem } from '../../components/CoinListItem'
import {connect} from 'react-redux'
import { addMoreData, setCoinList } from '../../actions/coinListActions'

//Load more Load 20 items
// onReachedEnd => goi API lấy các item tiếp theo

const CoinList = ({navigation, setCoinList, list, addMoreData}) => {
    

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
            const {data} = await axios.get(`https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start}&sort_dir=desc&limit=30`)
            // setList(list.concat(data.data))
            addMoreData(data.data)
        } catch (e) {
            console.log('eeeeeee', e)
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
            <Pressable onPress={() => navigation.navigate('CoinsSummary')}>
                <Text>Summary</Text>
            </Pressable>
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

const mapStateToProps = (state) => {
    return {list: state.coinList.list}
}
const mapDispatchToProps = (dispatch) => {
    return {
        setCoinList: (list) => dispatch(setCoinList(list)),
        addMoreData: (list) => dispatch(addMoreData(list))
    }
}

export const CoinListScreen = connect(mapStateToProps, mapDispatchToProps)(CoinList)