import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native"
export class CoinSetting extends React.Component {
    state = {
        count: 0,
        count1: 0,
        ///
    }

    // Lifecycle

    componentDidMount() {
        // chi chay 1 lan duy nhat
        // call API
        console.log('componentDidMount', this.props, this.state)
    }

    componentDidUpdate(prevProps, prevState) { // previous
        console.log('componentDidUpdate')
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        console.log('this.state', this.state)

        if (prevState.count !== this.state.count) {

        }
    }

    componentWillUnmount() {
        // clear setInterval setTimeout, unsubcribe
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate() {
        
    }

    render() {
        console.log('component render')
        return (
            <View style={{flex: 1, alignItems: 'flex-start'}}>
                <Text>Setting</Text>
                <TouchableOpacity
                    onPress={() => this.setState({count: this.state.count + 1})}
                    style={{padding: 10, backgroundColor: 'red', borderRadius: 10, marginTop: 20}}
                >
                    <Text>Count</Text>
                </TouchableOpacity>
                <Text>{this.state.count}</Text>
            </View>
        )
    }
}


/* export const CoinSetting = ({navigation, route}) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        // call API
        console.log('componentDidMount')
    }, [count])

    useEffect(() => {
        // call API
        console.log('componentDidMount')
    }, [count1])

    useEffect(() => {
        return () => {

        }
    }, [])

    return (
        component
    )
}
*/