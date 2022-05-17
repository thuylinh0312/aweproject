import React, {useEffect, useState, useRef} from "react";
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from "react-native"
import { delayPromise } from "../../utils/common";

// setTimeout, setInterval
// xử lý bất đồng bộ: asynchorous
// Promise

export const CoinHome = ({navigation})=> {
    const [check, setCheck] = useState(false)
    const [minute, setMinute] = useState(0)
    const [count, setCount] = useState(0)
    const interval = useRef()

   
    const startCount = () => {
        interval.current = setInterval(() => {
            setCount(count => count + 1)
            if (count === 59){
                setCount(0);
                setMinute(minute => minute + 1)
            }
        }, 100)
    }
    let time = [{minute: 0, second: 0}]
    const handle = () => {
        if(check === false){
            setCount(0);
            setMinute(0);
        } else {
            time = time.concat({minute: minute, second: count})
            console.log(time)  
        } 
    }
    // const callDelay = async () => {
    //     try {
    //         const data = await delayPromise(5000)
    //         //,,,,,,,,,
    //         alert(data)

    //         ///////
    //     } catch (e) {
    //         console.log(e)
    //     } finally {
    //         console.log('finallllllllllllllllyyy')
    //     }
    // }


    useEffect(() => {
    // callDelay()
        if (check === true){
            startCount()
        }
        
        return () => {
            clearInterval(interval.current)
        }
    }, [check, count])

    return (
        <View style={{ flex: 1}}>
            <View style = {styles.time}>
                <Text >{minute} : {count}</Text> 
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop:10}}>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress={() => setCheck(!check)}>
                    {check === false ? <Text>Bắt đầu</Text> : <Text>Tạm dừng</Text>}
                </TouchableOpacity>
                <TouchableOpacity  
                    style = {styles.button}
                    onPress={() => handle()}
                >
                    {check === false ? <Text>Đặt lại</Text> : <Text>Vòng chạy</Text>}
                </TouchableOpacity>
            </View>
            <View>
                    <FlatList
                    data={time}
                    renderItem={({item, index}) => {
                        return (    
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 15 , fontWeight:"bold" }}>{item.minute} : {item.second}</Text>   
                            </View>
                        )     
                    }}
                    />
            </View>
        </View>
    )
}
 const styles = StyleSheet.create({
     time: {
        backgroundColor: "white", 
        padding: 10, 
        alignItems: "center"
     },
     button: {
        backgroundColor: "white", 
        padding: 10, 
        borderColor: "black", 
        borderWidth:2, borderRadius:10
     }
})

 