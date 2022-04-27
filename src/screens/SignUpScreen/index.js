import React from 'react'
import {Text, View, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

export const SignUpScreen = ({navigation}) => {

    return (
        <View style ={styles.container}>
            <Text style ={styles.title}>SIGN UP</Text>
            <TextInput placeholder='username' style={styles.textInput}  />

            <TextInput placeholder='password' style={styles.textInput} />

            <TextInput placeholder='confirm password' style={styles.textInput} />
            
            <Text style ={styles.text}>
                Sign up
            </Text>
            <View style = {styles.under}>
            <Text>Have an account?  </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style = {{fontWeight: "bold"}}>Sign in</Text>
            </TouchableOpacity>   
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    textInput: {
        borderWidth: 1,
        margin: 10,
        padding:10
    },
    title: {
        fontSize: 30,
      fontWeight: "bold",
      marginTop: 30,
      alignSelf:"center"
      },
    text: {
        backgroundColor: "lightgray",
        borderRadius: 10,
        marginVertical: 20,
        marginHorizontal: 35,
        alignSelf: 'center',
        padding: 8,
        backgroundColor: 'lightblue',
        color: 'white',
      },
    under: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
      },
})