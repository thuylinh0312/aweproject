import React from 'react'
import {View, TextInput, TouchableOpacity, StyleSheet, Image, Text} from 'react-native'
import { images } from '../../../assets'

export const EditingTask = ({setEditingTask, editingTask, setTasks, tasks}) => {
    if (editingTask) {
        return (
            <View style={styles.editingTask}>
                <TextInput 
                    onChangeText={(text) => setEditingTask({name: text, isDone: editingTask.isDone, index: editingTask.index})} 
                    defaultValue={editingTask.name}
                />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => setEditingTask({...editingTask, isDone: !editingTask.isDone})}>
                        {editingTask.isDone ? <Image source={images.check} /> : <Image source={images.x} />}
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => {
                            const newArray = [...tasks]
                            newArray[editingTask.index] = editingTask
                            setTasks(newArray)
                            setEditingTask(undefined)
                        }} 
                        style={{marginLeft: 20}}>
                        <Text>OK</Text> 
                    </TouchableOpacity>
                </View>        
            </View>
        )
    } else {
        return null
    }
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