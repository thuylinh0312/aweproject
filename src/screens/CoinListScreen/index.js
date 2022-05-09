import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import axios from 'axios'
import { images } from '../../../assets'

// sau khi render => goi API, lay data => set data vao state,
// dung state de render component

// Get logo
// https://s2.coinmarketcap.com/static/img/coins/64x64/1.png?_=5bcdbc6

export const CoinListScreen = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        // fetch('https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&sort_dir=desc&limit=100')
        //     .then(response => {
        //         response.json().then(data => setList(data.data))
        //     })

        axios.get('https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&sort_dir=desc&limit=20')
            .then(({data}) => {
                setList(data.data)
            })
    }, []) // array dependencies

    //console.log('list12312312321312312312312312', list)


    console.log('Chay return')
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={list}
                renderItem={({item, index}) => {
                    return (
                        <View style = {styles.container}>
                            <Image 
                                style={{width: 30, height: 30, marginRight: 15}}
                                source={{uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png?_=5bcdbc6`}}
                            /> 
                            <View>
                                <Text style={{fontSize: 10 , fontWeight:"bold" }}>{item.name}</Text>
                                <View style = {{flexDirection: "row"}}>
                                    <Text style={{width: "25%", fontSize: 8 , backgroundColor: "lightgray"}}>{item.cmc_rank}</Text>
                                    <Text style={{fontSize: 8 }}>{item.symbol}</Text>
                                </View>
                            </View>
                            <View style = {styles.price}>
                                <Text style={{fontSize: 9, fontWeight:"bold"}}>đ{(item.quote.USD.price*22.95250).toFixed(2)}</Text>
                                <View style = {styles.price}>
                                    {item.quote.USD.percent_change_24h > 0 ?  <Image  style = {{width:25, height:25}} source={images.up}/> : <Image style = {{width:25, height:25}} source={images.down}/>}
                                    <Text style = {item.quote.USD.percent_change_7d > 0 ? styles.up  : styles.down}>{Math.abs(item.quote.USD.percent_change_24h).toFixed(2)}%</Text>
                                </View>
                                <View style = {styles.price}>
                                    {item.quote.USD.percent_change_7d > 0 ?  <Image  style = {{width:25, height:25}} source={images.up}/> : <Image style = {{width:25, height:25}} source={images.down}/>}
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
        marginBottom: 5
    },
    price: {
        flexDirection: "row", 
        alignItems: "center"
    },
    up: {
        color: "blue",
        fontSize: 9 , 
        fontWeight:"bold"
    },
    down: {
        color: "red",
        fontSize: 9 , 
        fontWeight:"bold"
    }
})