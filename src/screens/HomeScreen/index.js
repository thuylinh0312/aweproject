import React, {useState} from 'react'
import {Text, View, TouchableOpacity, TextInput, Alert, StyleSheet, ScrollView, Image} from 'react-native'
import { images } from '../../../assets'

export const HomeScreen = ({navigation, route}) => {
    const [tasks, setTasks] = useState([{name: 'Lau nhà', isDone: true}, {name: 'Nấu cơm', isDone: false}])
    const [taskInput, setTaskInput] = useState('')
    const [value, setValue] = useState('')
    const [taskName, setTaskName] = useState('')
    const [showAddTaskInput, setShowAddTaskInput] = useState(false)
    const [show, setShow] = useState(false)
    const [check, setCheck] = useState(false)
 
    return (
        <View style={{flex: 1}}>
            <Text style ={styles.title}>TODO LIST</Text>
            <ScrollView style={styles.container}>
            {/* <View style = {styles.text}>
                <Text>Hello!</Text>
                <Text>{username}</Text>
            </View>
            <TouchableOpacity style ={styles.back} onPress={() => navigation.goBack()}>
                <Text>BACK</Text>
            </TouchableOpacity> */}
            {tasks.map((e, index) => (
                <TouchableOpacity style={styles.item} 
                    onLongPress={() => {
                        Alert.alert(
                            "Xác nhận",
                            "Bạn có muốn xóa công việc này không ?",
                            [
                              {
                                text: "Thoát",
                                onPress: () => console.log("Cancel Pressed"),
                              },
                              { 
                               text: "Xóa",
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
                    <View style = {{flexDirection:"row"}}>
                        <TouchableOpacity>
                            {!e.isDone && (<Image source={images.x} />)}
                        </TouchableOpacity> 
                        <TouchableOpacity>
                            {e.isDone && (<Image source={images.check} />)} 
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                if (!showAddTaskInput) {
                                    setShowAddTaskInput(true)
                                } else {
                                    setShowAddTaskInput(false)
                                    
                                }
                            }}
                        >
                            <Image style = {{width:25, height:25}}
                            source={images.change}/>
                        </TouchableOpacity>
                        
                        
                        
                    </View>           
                </TouchableOpacity>
                
            ))}
            </ScrollView>

            {/* <View style={{position: 'absolute', bottom: 20, right: 20,}}>
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
            </View> */}
            {tasks.map((e, index) => (
            <View>
                
                {showAddTaskInput && (
                <View style = {{flexDirection:"row", justifyContent:"space-between"}} >
                    <TextInput onChangeText={setTaskName} placeholder= {e.name}/>
                    {!e.isDone && (<Image source={images.x} />)}
                    {e.isDone && (<Image source={images.check} />)} 
                    

                </View>)}
                
            </View>
            ))}
            <View style = {{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginHorizontal:25}}>
                <TextInput 
                    onChangeText={setTaskInput} 
                    placeholder='Thêm công việc' />
                <TouchableOpacity
                onPress={()=>{
                    if(taskInput === ""){
                        alert("Vui lòng thêm công việc")
                    }else {
                        setTasks(tasks.concat({name: taskInput, isDone: false}))
                        
                    }
                }}
                >
                    <Text style = {{backgroundColor:"gray", borderRadius:500, fontSize:20}}>  +  </Text>
                </TouchableOpacity>
                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal:25
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 15,
        alignSelf:"center"
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
        padding: 7,
        justifyContent: "space-between",
    },
    addButton: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})