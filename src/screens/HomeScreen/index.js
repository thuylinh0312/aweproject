import React from 'react'
import {Text, View, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

export const HomeScreen = ({navigation, route}) => {
    const { username } = route.params;

    return (
        <View style ={styles.container}>
            <View style = {styles.text}>
                <Text>Hello!</Text>
                <Text>{username}</Text>
            </View>
            <TouchableOpacity style ={styles.back} onPress={() => navigation.goBack()}>
                <Text>BACK</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    text: {
        fontWeight: "bold",
        marginVertical: 30,
        alignItems: "center",
        justifyContent: "center"
    }, 
    back: {
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 35,
        alignSelf: 'center',
        padding: 8,
        backgroundColor: 'lightblue',
        color: 'white',
      },
})