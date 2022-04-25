import React from 'react'
import {Text, View, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

export const SignUpScreen = ({navigation, route}) => {
    const { username } = route.params;

    return (
        <View>
            <TextInput placeholder='username' style={styles.textInput} defaultValue={username} />

            <TextInput placeholder='password' style={styles.textInput} />

            <TextInput placeholder='confirm password' style={styles.textInput} />
            
            <TouchableOpacity style={{backgroundColor: 'pink'}} onPress={() => navigation.goBack()}>
                <Text>Back</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        margin: 5,
    }
})