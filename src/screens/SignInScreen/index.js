import React from 'react'
import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native'

const data = [
    {username: 'phantrungviet1', password: '1234561'},
    {username: 'phantrungviet2', password: '1234562'},
    {username: 'phantrungviet3', password: '1234563'},
  ]

export const SignInScreen = ({navigation}) => {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return(
        <View style={styles.container}>    
          <Text style = {styles.title}>SIGN IN</Text>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?k=20&m=1140180560&s=612x612&w=0&h=X_400OQDFQGqccORnKt2PHYvTZ3dBLeEnCH_hRiUQrY=',
            }}
          />
          <View >
            <TextInput
              style={styles.text}
              onChangeText={onChangeUsername}
              placeholder="Username"
            />
            <TextInput
              style={styles.text}
              onChangeText={onChangePassword}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TouchableOpacity 
            // onPress={() => {
            //   const isContains = data.some(
            //     (element) => element.username === username && element.password === password) // true / false 
            //   }
            // }
            
            
            onPress={() => navigation.navigate('Home', {username: username})}

            >
              <Text style ={[styles.text, styles.textlogin]}>
                LOGIN
              </Text>
            </TouchableOpacity>        
          </View>
          <View style = {styles.under}>
            <Text>Don't have an account?  </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Sign Up', {username: username})}>
              <Text style = {{fontWeight: "bold"}}>Sign up</Text>
            </TouchableOpacity>   
          </View>
        </View>
      )
}

const styles = StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      marginTop: 30,
      alignSelf:"center"
    },
    logo: {
      width: 120,
      height: 120,
      alignSelf: 'center',
      marginVertical: 30
    },
    text: {
      backgroundColor: "lightgray",
      borderRadius: 10,
      marginBottom: 10,
      marginHorizontal: 35
  
    },
    textlogin: {
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