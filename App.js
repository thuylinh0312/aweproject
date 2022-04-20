import React from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
const YourApp = () => {
  const [text1, onChangeText1] = React.useState(null);
  const [text2, onChangeText2] = React.useState(null);
  return(
    <View style = {styles.container}>
      <Text style = {styles.title}>
        Sign In
      </Text>
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
  input: {
    marginTop: 250,
  },
  text: {
    backgroundColor: "white",
    marginHorizontal: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1
  },
  textlogin: {
    textAlign: 'center',
    marginHorizontal: 130,
  }
})