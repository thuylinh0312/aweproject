import React, {useEffect, useState, useRef} from "react";
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from "react-native"
import { TimerButton } from "../../components/TimerButton";

export const CoinHome = ({navigation})=> {
    const [check, setCheck] = useState(false)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const [time, setTime] = useState([{minute: 0, second: 0}])
    const interval = useRef()

    const startCount = () => {
        interval.current = setInterval(() => {
            let isAddMinute = false
            setSecond(sec => {
                if (sec === 59){
                    isAddMinute = true
                    return 0
                } else {
                    return sec + 1
                }
            })

            if (isAddMinute) {
                setMinute(min => {
                    return min + 1
                })
            }
        }, 100)
    }
    const handle = () => {
        if(check === false){
            setSecond(0);
            setMinute(0);
        } else {
           setTime(time.concat({minute, second}))
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

    const timeFormatted = time.map(({minute, second}) => {
        return {
            minute: minute + 'm',
            second: second + 's'
        }
    })

    useEffect(() => {
        if (check){
            startCount()
        }
        return () => {
            clearInterval(interval.current)
        }
    }, [check]) // array of dependencies
    return (
        <View style={{ flex: 1}}>
            <View style = {styles.time}>
                <Text >{minute} : {second}</Text> 
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop:10}}>
                <TimerButton 
                    onPressButton={() => setCheck(!check)} 
                    text={!check ? 'Bắt đầu' : 'Tạm dừng'} 
                />
                <TimerButton 
                    onPressButton={() => handle()} 
                    text={!check ? 'Đặt lại' : 'Vòng chạy'} 
                />
            </View>
            <View style={{flex: 1}}>
                    <FlatList
                        data={timeFormatted}
                        renderItem={({item, index}) => {
                            return (    
                                <Text style={{fontSize: 15 , fontWeight:"bold" }}>{item.minute} : {item.second}</Text>   
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

 