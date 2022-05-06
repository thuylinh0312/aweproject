import React, {useState} from 'react'
import {Text, View, StyleSheet, Keyboard} from 'react-native'
import {ListTask} from '../../components/ListTask'
import { AddTask } from '../../components/AddTask'
import { EditingTask } from '../../components/EditingTask'

export const HomeScreen = ({navigation, route}) => {
    const [tasks, setTasks] = useState([{name: 'Lau nhà', isDone: false}, {name: 'Nấu cơm', isDone: false}, {name: 'Lau nhà 1', isDone: false}])
    const [taskInput, setTaskInput] = useState('')
    const [editingTask, setEditingTask] = useState(undefined)
 
    return (
        <View style={{flex: 1}}>
            <Text style ={styles.title}>TODO LIST</Text>
            <ListTask setTasks={setTasks} tasks={tasks} editingTask={editingTask} setEditingTask={setEditingTask} />
            <EditingTask setTasks={setTasks} tasks={tasks} editingTask={editingTask} setEditingTask={setEditingTask}/>
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
            {/* {tasks.map((e, index) => (
                <View key={index.toString()}>
                    {showAddTaskInput && (
                    <View style = {{flexDirection:"row", justifyContent:"space-between"}} >
                        <TextInput onChangeText={setTaskName} placeholder= {e.name}/>
                        {!e.isDone && (<Image source={images.x} />)}
                        {e.isDone && (<Image source={images.check} />)} 
                        

                    </View>)}
                    
                </View>
            ))} */}
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
                            setTasks(tasks.concat({name: taskInput, isDone: false}))
                            Keyboard.dismiss()
                        }
                    }} />
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