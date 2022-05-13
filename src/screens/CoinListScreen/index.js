import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import axios from 'axios'
import { images } from '../../../assets'

// sau khi render => goi API, lay data => set data vao state,
// dung state de render component


//Load more
// Load 20 items
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

    //     console.log('sau then catch')

    // }

    const getCoinList = async (start) => {
        try {
            const {data} = await axios.get(`https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start}&sort_dir=desc&limit=20`)
            setList(list.concat(data.data))
            console.log('awwwai')
        } catch (e) {
            console.log('eeeeeee', error)
        }

        console.log('sau try catch')
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

    // console.log('Chay return')
    return (
        <View style={{flex: 1}}>
            <View style = {styles.header}>
                <View style={{ alignItems:"center",flex: 2}} >
                    <Text style = {styles.text_header}>Name</Text>
                </View>
                <View style={{flex: 1}} />
                <Text style = {styles.text_header}> Price    24h %    7d % </Text>
            </View>
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
                        <View style = {styles.container}>
                            <Image 
                                style={styles.image}
                                source={{uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png?_=5bcdbc6`}}
                            /> 
                            <View style={{flex: 2}}>
                                <Text style={{fontSize: 10 , fontWeight:"bold" }}>{item.name}</Text>
                                <View style = {{flexDirection: "row"}}>
                                    <View style={{width: '25%'}}>
                                        <View style={styles.rank}>
                                            <Text style={{fontSize: 8}}>{item.cmc_rank}</Text>
                                        </View>
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
                }}
            />
            {/* <View style = {styles.footer}>
                <Image  source={images.home}/>
                <Image  source={images.chart}/>
                <Image source={images.feed}/>
                <Image  source={images.setting}/>
            </View>   */}
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "lightgray",
        padding: 5 ,
        marginTop: 5, 
        flexDirection: "row", 
        justifyContent: "space-between"
    },
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