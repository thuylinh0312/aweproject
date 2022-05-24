import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import { images } from '../../../assets'

export const CoinListItem = ({item}) => {
    return (
        <View style = {styles.container}>
            <Image 
                style={styles.image}
                source={{uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png?_=5bcdbc6`}}
            /> 
            <View style={{flex: 2}}>
                <Text style={{fontSize: 10 , fontWeight:"bold" }}>{item.name}</Text>
                <View style = {{flexDirection: "row"}}>
                <View style={styles.rank}>
                            <Text style={{fontSize: 8}}>{item.cmc_rank}</Text>
                        </View>
                    <Text style={{fontSize: 8 }}>{item.symbol}</Text>
                </View>
            </View>

            <View style={{flex: 1}} />

            <View style = {styles.price}>
                <Text style={{fontSize: 8, fontWeight:"bold", flex: 1}}>đ{(item.quote.USD.price*22.95250).toFixed(2)}</Text>
                <View style = {styles.day}>
                    {item.quote.USD.percent_change_24h > 0 ?  <Image style = {styles.icon_up} source={images.up}/> : <Image style = {styles.icon_down} source={images.down}/>}
                    <Text style = {item.quote.USD.percent_change_7d > 0 ? styles.up  : styles.down}>{Math.abs(item.quote.USD.percent_change_24h).toFixed(2)}%</Text>
                </View>
                <View style = {styles.week}>
                    {item.quote.USD.percent_change_7d > 0 ?  <Image  style = {styles.icon_up} source={images.up}/> : <Image style = {styles.icon_down} source={images.down}/>}
                    <Text style = {item.quote.USD.percent_change_7d > 0 ? styles.up  : styles.down}>{Math.abs(item.quote.USD.percent_change_7d).toFixed(2)}%</Text>
                </View>
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
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
        minWidth: 14, 
        minHeight: 14,
        borderRadius: 7,
        paddingHorizontal: 2,
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