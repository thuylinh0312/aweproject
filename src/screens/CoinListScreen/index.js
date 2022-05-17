import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, FlatList, Image, ActivityIndicator} from 'react-native'
import axios from 'axios'
import { images } from '../../../assets'
import { CoinListHeader } from '../../components/CoinListHeader'
import { CoinListItem } from '../../components/CoinListItem'

// sau khi render => goi API, lay data => set data vao state,
// dung state de render component


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

    const getCoinList = async (start) => {
        try {
            const {data} = await axios.get(`https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start}&sort_dir=desc&limit=20`)
            setList(list.concat(data.data))
            console.log('awwwai')
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

    useEffect(() => {
        // 
    }, [list])

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

const styles = StyleSheet.create({
    header: {
        flexDirection: "row", 
        padding: 3 ,
        marginBottom: 5, 
        backgroundColor: "lightgray"
    },
    text_header: {
        fontSize: 13, 
        fontWeight: "bold"
    },
    container:{
        flexDirection: "row",
        marginBottom: 5,
        paddingHorizontal: 16
    },
    image: {
        width: 30, 
        height: 30, 
        marginRight: 15
    },
    rank:{
        width: 14, 
        height: 14, 
        borderRadius: 7, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: "lightgray"  
    },
    price: {
        flexDirection: "row", 
        alignItems: "center",
        flex: 5
    },
    day: {
        flexDirection: "row", 
        alignItems: "center",
        flex: 1, 
    },
    week: {
        flexDirection: "row", 
        alignItems: "center",
        flex: 1, 
        justifyContent: 'flex-start'
    },
    up: {
        color: "blue",
        fontSize: 8 , 
        fontWeight:"bold",  
    },
    down: {
        color: "red",
        fontSize: 8 , 
        fontWeight:"bold", 
    },
    icon:{
        width:25, 
        height:25
    },
    icon_up:{
        width:25, 
        height:25,
        tintColor: 'blue'
    },
    icon_down:{
        width:25, 
        height:25,
        tintColor: 'red'
    }
})