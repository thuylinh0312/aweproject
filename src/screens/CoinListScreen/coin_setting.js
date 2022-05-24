import React, {useState, useCallback} from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native"
import { SettingButton } from "../../components/SettingButton";


// export class CoinSetting extends React.Component {
//     state = {
//         count: 0,
//         count1: 0,
//         ///
//     }

//     onPressButton = () => this.setState({count: this.state.count + 1})

//     // Lifecycle

//     componentDidMount() {
//         // chi chay 1 lan duy nhat
//         // call API
//         console.log('componentDidMount', this.props, this.state)
//     }

//     componentDidUpdate(prevProps, prevState) { // previous
//         console.log('componentDidUpdate')
//         console.log('prevProps', prevProps)
//         console.log('prevState', prevState)
//         console.log('this.state', this.state)

//         if (prevState.count !== this.state.count) {

//         }
//     }

//     componentWillUnmount() {
//         // clear setInterval setTimeout, unsubcribe
//         console.log('componentWillUnmount')
//     }
    
//     render() {
//         console.log('component render')
//         return (
//             <View style={{flex: 1, alignItems: 'flex-start'}}>
//                 <SettingButton onPress={this.onPressButton} />
//                 <Text>{this.state.count}</Text>
//             </View>
//         )
//     }
// }


export const CoinSetting = ({navigation, route}) => {
    const [count, setCount] = useState(0)

    const onPressButton = useCallback(() => {
        setCount(c => c + 1)
    }, [])

    return (
        <View style={{flex: 1, alignItems: 'flex-start'}}>
            <SettingButton onPress={onPressButton} />
            <Text>{count}</Text>
        </View>
    )
}