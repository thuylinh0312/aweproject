import React from 'react'
import {ScrollView, TouchableOpacity, Text, TextInput, View, StyleSheet, Image} from 'react-native'
import { images } from '../../../assets'

export const ListTask = ({tasks, editingTask, setEditingTask, setTasks}) => {

    return (
        <ScrollView style={styles.container}>
            {/* <View style = {styles.text}>
                <Text>Hello!</Text>
                <Text>{username}</Text>
            </View>
            <TouchableOpacity style ={styles.back} onPress={() => navigation.goBack()}>
                <Text>BACK</Text>
            </TouchableOpacity> */}
            {tasks.map((e, index) => {
                const isEditing = !!editingTask && editingTask.index === index

                return (
                    <TouchableOpacity style={styles.item}
                        key={index.toString()}
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
                    <TextInput 
                        onChangeText={(text) => setEditingTask({name: text, isDone: editingTask.isDone, index: editingTask.index})}
                        defaultValue={e.name} editable={isEditing} />
                    <View style = {{flexDirection: "row"}}>
                        <TouchableOpacity onPress={() => setEditingTask({...editingTask, isDone: !editingTask.isDone})} disabled={!isEditing}>
                            {(!!editingTask && editingTask.index === index ? editingTask.isDone : e.isDone) ? (<Image source={images.check} />) : (<Image source={images.x} />)} 
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                if (isEditing) {
                                    const newArray = [...tasks]
                                    newArray[editingTask.index] = editingTask
                                    setTasks(newArray)
                                    setEditingTask(undefined)
                                } else {
                                    setEditingTask(
                                        (!editingTask || e.name !== editingTask.name) 
                                        ? ({...e, index}) : undefined
                                    )
                                }
                                // if (!editingTask || e.name !== editingTask.name) { // false, undefined, null, 0, '',
                                //     setEditingTask({...e, index})
                                // } else {
                                //     setEditingTask(undefined)
                                // }
                            }}
                        >
                            {isEditing ? <Text>OK</Text> : <Image style = {{width:25, height:25}}
                                source={images.change}/>}
                        </TouchableOpacity>
                    </View>           
                </TouchableOpacity>
                
                )
            })}
            </ScrollView>
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