import React from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import {Example1} from './src/Example1'

const data = [
  {username: 'phantrungviet1', password: '123454546'},
  {username: 'phantrungviet2', password: '123454546'},
  {username: 'phantrungviet3', password: '123454546'}
]

const YourApp = () => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  // return <Example1 />

  return(
    <View style={styles.container}>
      <Text style = {styles.title}>
        Sign In
      </Text>
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
          placeholder="Password"
        />
        <TouchableOpacity>
          <Text style ={[styles.text, styles.textlogin]}>
            Login
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
    backgroundColor: "pink",
    // justifyContent: 'space-between',
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "black",
    backgroundColor: 'red',
  },
  logo: {
    width: 64,
    height: 64,
    backgroundColor: 'blue',
    alignSelf: 'center',
    marginVertical: 12
  },
  input: {
    backgroundColor: 'yellow',
    padding: 12
  },
  text: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 5,
    borderColor: 'red'
  },
  textlogin: {
    alignSelf: 'center',
    padding: 8,
    backgroundColor: 'blue',
    color: 'white',
  }
})