import React from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
const YourApp = () => {
  const [text1, onChangeText1] = React.useState(null);
  const [text2, onChangeText2] = React.useState(null);
  

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
          onChangeText={onChangeText1}
          placeholder="Username"
        />
        <TextInput
          style={styles.text}
          onChangeText={onChangeText2}
          placeholder="Password"
        />
        <TouchableOpacity>
          <Text style ={[styles.text, styles.textlogin]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default YourApp
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  title: {
    marginTop: 20,
    fontSize: 45,
    fontWeight: "bold",
    color: "black",
    textAlign: 'center'
  },
  logo: {
    width: 64,
    height: 64,
    backgroundColor: 'red'
  },
  input: {
    padding: 12,
    backgroundColor: 'yellow'
  },
  text: {
    backgroundColor: "white",
    marginHorizontal: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 5,
  },
  textlogin: {
    textAlign: 'center',
  }
})