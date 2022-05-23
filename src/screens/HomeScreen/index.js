import React, {useEffect, useState} from 'react'
import {Text, View, StyleSheet, Keyboard, TouchableOpacity} from 'react-native'
import {ListTask} from '../../components/ListTask'
import { AddTask } from '../../components/AddTask'
import { EditingTask } from '../../components/EditingTask'
import AsyncStorage from '@react-native-async-storage/async-storage'

// set tasks -> lưu local storage
// mở app lại -> load từ local storage và set vào state

export const HomeScreen = ({navigation, route}) => {
    const [tasks, setTasks] = useState([{name: 'Lau nhà', isDone: false}, {name: 'Nấu cơm', isDone: false}, {name: 'Lau nhà 1', isDone: false}])
    const [taskInput, setTaskInput] = useState('')
    const [editingTask, setEditingTask] = useState(undefined)


    useEffect(() => {
        AsyncStorage.getItem('@KEY_tasks').then(data => {
            const savedTasks = JSON.parse(data)
            if (data !== null) {
                setTasks(savedTasks)
            }
        })
    }, [])
 
    return (
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                <Text>Go to Coin tab</Text>
            </TouchableOpacity>
            <Text style ={styles.title}>TODO LIST</Text>
            <ListTask setTasks={setTasks} tasks={tasks} editingTask={editingTask} setEditingTask={setEditingTask} />
            <EditingTask setTasks={setTasks} tasks={tasks} editingTask={editingTask} setEditingTask={setEditingTask}/>
            <AddTask 
                taskInput={taskInput} 
                placeholder='Thêm công việc'
                setTasks={setTasks}
                setTaskInput={setTaskInput}
                onAdd={()=>{
                    if(taskInput === ""){
                        alert("Vui lòng thêm công việc")
                    } else {
                        setTaskInput('')
                        const newTasks = tasks.concat({name: taskInput, isDone: false})
                        setTasks(newTasks)
                        const stringTasks = JSON.stringify(newTasks)
                        AsyncStorage.setItem('@KEY_tasks', stringTasks)
                        Keyboard.dismiss()
                    }
                }} 
            />
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
    },
    editingTask: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingHorizontal: 12
    }
})