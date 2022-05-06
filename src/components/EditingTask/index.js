import React from 'react'
import {View, TextInput, StatusBar, TouchableOpacity, StyleSheet, Image, Text} from 'react-native'
import { images } from '../../../assets'
import Modal from "react-native-modal";
export const EditingTask = ({setEditingTask, editingTask, setTasks, tasks}) => {


    return (
        <Modal isVisible={!!editingTask} animationIn='bounce' statusBarTranslucent >
        <View style={styles.edit}>
            <View style={{flexDirection: 'row', alignItems:"center"}}>
                <TextInput 
                    style={{flex: 4}}
                    onChangeText={(text) => setEditingTask({name: text, isDone: editingTask.isDone, index: editingTask.index})} 
                    defaultValue={editingTask && editingTask.name} // undefined, null, '', false, 0
                />
                <TouchableOpacity 
                    onPress={() => setEditingTask({...editingTask, isDone: !editingTask.isDone})}>
                    {editingTask && editingTask.isDone ? <Image source={images.check} /> : <Image source={images.x} />}
                </TouchableOpacity>
            </View>  
                <TouchableOpacity 
                    onPress={() => {
                        const newArray = [...tasks]
                        newArray[editingTask.index] = editingTask
                        if (editingTask.isDone === true){
                            alert("Cong viec da hoan thanh")
                            const newArray = tasks.filter((e, i) => editingTask.index !== i)
                            setTasks(newArray)
                        }else setTasks(newArray)
                        setEditingTask(undefined)
                    }}
                >
                <Text>OK</Text> 
                </TouchableOpacity>
                  
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    edit: {
        bottom: 170, 
        backgroundColor: "white", 
        marginHorizontal: 40,
        alignItems:"center", 
        padding:12, 
        borderRadius:15
    },
})