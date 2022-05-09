import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import axios from 'axios'

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
                                <Text style={{fontSize: 11 , fontWeight:"bold" }}>{item.name}</Text>
                                <View style = {{flexDirection: "row"}}>
                                    <Text style={{width: "25%", fontSize: 8 , backgroundColor: "lightgray"}}>{item.cmc_rank}</Text>
                                    <Text style={{fontSize: 8 }}>{item.symbol}</Text>
                                </View>
                            </View>
                            <Text style={{fontSize: 11 }}>đ{item.quote.USD.price*22.95250}</Text>
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
        

    }
})