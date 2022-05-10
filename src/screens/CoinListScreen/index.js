import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import axios from 'axios'
import { images } from '../../../assets'

// sau khi render => goi API, lay data => set data vao state,
// dung state de render component

// Get logo
// https://s2.coinmarketcap.com/static/img/coins/64x64/1.png?_=5bcdbc6



//Load more
// Load 20 items
// onReachedEnd => goi API lấy các item tiếp theo

export const CoinListScreen = () => {
    const [list, setList] = useState([])

    const getCoinList = (start) => {
        axios.get(`https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start}&sort_dir=desc&limit=20`)
                        .then(({data}) => {
                            console.log('data tu coinmarketcap', data)
                            setList(list.concat(data.data))
                        })
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

    //console.log('list12312312321312312312312312', list)


    console.log('Chay return')
    return (
        <View style={styles.wrapper}>
            <View>
                <Text>Day la header </Text>
            </View>
            <FlatList
                ListHeaderComponent={(
                    <View>
                        <Text>Day la header 
                    
                        </Text>
                    </View>
                )}
                ListFooterComponent={(
<View>
                        <Text>Day la footer 
                    
                        </Text>
                    </View>
                )}
                onEndReached={() => getCoinList(list.length + 1)}
                data={list}
                renderItem={({item, index}) => {
                    return (
                        <View style = {styles.container}>
                            <Image 
                                style={{width: 30, height: 30, marginRight: 15}}
                                source={{uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png?_=5bcdbc6`}}
                            /> 
                            <View style={{flex: 2}}>
                                <Text style={{fontSize: 10 , fontWeight:"bold" }}>{item.name}</Text>
                                <View style = {{flexDirection: "row"}}>
                                    <View style={{width: '25%'}}>
                                        <View style={{width: 14, height: 14, borderRadius: 7, justifyContent: 'center', alignItems: 'center', backgroundColor: "lightgray", }}>
                                            <Text style={styles.rank}>{item.cmc_rank}</Text>
                                        </View>
                                    </View>
                                    <Text style={{fontSize: 8 }}>{item.symbol}</Text>
                                </View>
                            </View>
                            <View style={{flex: 1}} />
                            <View style = {[styles.price, {flex: 5}]}>
                                <Text style={{fontSize: 8, fontWeight:"bold", flex: 1}}>đ{(item.quote.USD.price*22.95250).toFixed(2)}</Text>
                                <View style = {[styles.price, {flex: 1, backgroundColor: 'pink'}]}>
                                    {item.quote.USD.percent_change_24h > 0 ?  <Image style = {[styles.icon, {tintColor: 'green'}]} source={images.up}/> : <Image style = {[styles.icon, {tintColor: 'red'}]} source={images.down}/>}
                                    <Text style = {item.quote.USD.percent_change_7d > 0 ? styles.up  : styles.down}>{Math.abs(item.quote.USD.percent_change_24h).toFixed(2)}%</Text>
                                </View>
                                <View style = {[styles.price, {flex: 1, backgroundColor: 'yellow', justifyContent: 'flex-start'}]}>
                                    {item.quote.USD.percent_change_7d > 0 ?  <Image  style = {styles.icon} source={images.up}/> : <Image style = {styles.icon} source={images.down}/>}
                                    <Text style = {item.quote.USD.percent_change_7d > 0 ? styles.up  : styles.down}>{Math.abs(item.quote.USD.percent_change_7d).toFixed(2)}%</Text>
                                </View>
                            </View>
                        </View>
                        
                    )
                        
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, 
    },
    container:{
        flexDirection: "row",
        marginBottom: 5,
        paddingHorizontal: 16
    },
    rank:{
        fontSize: 8 , 
        
    },
    price: {
        flexDirection: "row", 
        alignItems: "center",
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
    }
})