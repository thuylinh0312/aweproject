import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const CoinListHeader = ({}) => {
    return (
        <View style = {styles.header}>
            <View style={{ alignItems:"center",flex: 2}} >
                <Text style = {styles.text_header}>Name</Text>
            </View>
            <View style={{flex: 1}} />
            <View style={{ alignItems:"center"}}>
                <Text style = {styles.text_header}> Price    24h %    7d % </Text>
            </View>
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
})