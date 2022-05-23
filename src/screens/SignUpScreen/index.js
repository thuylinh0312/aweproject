import React from 'react'
import {Text, View, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

export let data = [
  {username: 'phantrungviet1', password: '1234561'},
  {username: 'phantrungviet2', password: '1234562'},
  {username: 'phantrungviet3', password: '1234563'},
]

export const SignUpScreen = ({navigation}) => {

  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');   
  const [confirmPass, onChangeConfirmPass] = React.useState(''); 
  return (
        <View style ={styles.container}>
            <Text style ={styles.title}>SIGN UP</Text>
            <TextInput 
              onChangeText={onChangeUsername}
              placeholder='username' 
              style={styles.textInput}  />

            <TextInput 
              onChangeText={onChangePassword}
              placeholder='password' 
              style={styles.textInput} />

            <TextInput 
              onChangeText={onChangeConfirmPass}
              placeholder='confirm password' 
              style={styles.textInput} />
            <TouchableOpacity
              onPress={() => {
                  const check = data.some((element) => element.username === username) // true / false 
                  if(check === false){
                    if (password===confirmPass && password !== ""){
                      alert("Dang ky thanh cong!!!");
                      data = data.concat({username: username, password: confirmPass});
                    }else alert("Vui long xac nhan lai mat khau")
                  }
                  if(check === true){
                    alert("Tai khoan da ton tai")
                  }
              }}
              
            >
              <Text style ={styles.text}>
                  Sign up
              </Text>
            </TouchableOpacity>
            
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