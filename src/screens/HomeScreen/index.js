import React, {useState} from 'react'
import {Text, View, TouchableOpacity, TextInput, Alert, StyleSheet, ScrollView, Image} from 'react-native'
import { images } from '../../../assets'

export const HomeScreen = ({navigation, route}) => {
    const [tasks, setTasks] = useState([{name: 'Lau nhà', isDone: true}, {name: 'Nấu cơm', isDone: false}])
    const [taskInput, setTaskInput] = useState('')
    const [showAddTaskInput, setShowAddTaskInput] = useState(false)

    return (
        <View style={{flex: 1}}>
            <ScrollView style={styles.container}>
            {/* <View style = {styles.text}>
                <Text>Hello!</Text>
                <Text>{username}</Text>
            </View>
            <TouchableOpacity style ={styles.back} onPress={() => navigation.goBack()}>
                <Text>BACK</Text>
            </TouchableOpacity> */}
            {tasks.map((e, index) => (
                <TouchableOpacity 
                    style={styles.item} 
                    onLongPress={() => {
                        Alert.alert(
                            "Xác nhận",
                            "Bạn có muốn xóa công việc này không ?",
                            [
                              {
                                text: "Không muốn",
                                onPress: () => console.log("Cancel Pressed"),
                              },
                              { 
                               text: "Đồng ý",
                               onPress: () => {
                                   const removed = tasks.filter((e, i) => index !== i)
                                   setTasks(removed)
                               }
                              }
                            ]
                          );
                    }}
                >
                    <Text key={index}>{e.name}</Text>
                    {e.isDone && (<Image source={images.check} />)}
                </TouchableOpacity>
            ))}
        </ScrollView>
        <View style={{position: 'absolute', bottom: 20, right: 20,}}>
            {showAddTaskInput && (<TextInput onChangeText={setTaskInput} placeholder='Nhập tên công việc' />)}
            <TouchableOpacity 
                style={styles.addButton}
                onPress={() => {
                    if (!showAddTaskInput) {
                        setShowAddTaskInput(true)
                    } else {
                        setShowAddTaskInput(false)
                        setTasks(tasks.concat({name: taskInput, isDone: false}))
                    }
                }}
            >
                <Text>{!showAddTaskInput ? 'Thêm công việc' : 'OK'}</Text>
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
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4
    },
    addButton: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})