import React from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import {Example1} from './src/Example1'

const data = [
  {username: 'phantrungviet1', password: '1234561'},
  {username: 'phantrungviet2', password: '1234562'},
  {username: 'phantrungviet3', password: '1234563'}
]

const YourApp = () => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  // return <Example1 />

  return(
    <View style={styles.container}>
      <View style = {styles.title}>       
        <Text>SIGN IN</Text>
        <Text>SIGN UP</Text>
      </View>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?k=20&m=1140180560&s=612x612&w=0&h=X_400OQDFQGqccORnKt2PHYvTZ3dBLeEnCH_hRiUQrY=',
        }}
      />
      <View style = {styles.input}>
        <TextInput
          style={styles.text}
          onChangeText={text => onChangeUsername(text)}
          placeholder="username"
        />
        <TextInput
          style={styles.text}
          onChangeText={onChangePassword}
          placeholder="password"
        />
        <TouchableOpacity>
          <Text style ={[styles.text, styles.textlogin]}>
            LOGIN
          </Text>
          <Text style ={styles.textforgotpass}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Text>Dang nhap thanh cong / Sai mat khau</Text> */}
    </View>
  )
}

export default YourApp
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    flexDirection: "row",
    fontSize: 20,
    fontWeight: "bold",
    justifyContent:"space-evenly",
    marginTop: 35
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 40,
    marginVertical: 12
  },
  input: {
    marginTop:20,
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
  textforgotpass: {
    marginTop: 80,
    alignSelf: 'center',
  }
})