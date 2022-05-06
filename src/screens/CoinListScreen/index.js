import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
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

        axios.get('https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&sort_dir=desc&limit=100')
            .then(({data}) => {
                setList(data.data)
            })
    }, []) // array dependencies

    console.log('list12312312321312312312312312', list)


    console.log('Chay return')
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={list}
                renderItem={({item, index}) => {
                    return <Text>{item.name}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }
})