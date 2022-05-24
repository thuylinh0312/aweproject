import React from "react";
import {Text, View, TouchableOpacity, FlatList, ActivityIndicator} from "react-native"
import axios from 'axios'
import { CoinListHeader } from '../../components/CoinListHeader'
import { CoinListItem } from '../../components/CoinListItem'


export class CoinFeed extends React.Component {
    state = {
        count: 0,
        list: [],
    }
    getCoinList = async (start) => {
        try {
            const {data} = await axios.get(`https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start}&sort_dir=desc&limit=20`)
            this.setState({
                list: this.state.list.concat(data.data)
            })
        } catch (e) {
            console.log('eeeeeee', error)
        }
    }
    async componentDidMount() {
        // const {data} = await axios.get(`https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=20&sort_dir=desc&limit=20`)
        // this.setState({
        //      list: this.state.list.concat(data.data)
        // })
        this.getCoinList(1)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        if (this.state.list.length > 100) {
            return false
        } else {
            console.log('this.state.list.length', this.state.list.length)
            return true
        }
    }

    render() {
        console.log('render')
        return (
            <View style={{flex: 1}}>
                <CoinListHeader />
                {this.state.list.length === 0 ? <ActivityIndicator /> : (
                    <FlatList
                    onEndReached={() => this.getCoinList(this.state.list.length + 1)}
                        data={this.state.list}
                        renderItem={({item, index}) => {
                            return (
                                <CoinListItem item={item} />
                            )     
                        }}
                        ListFooterComponent={<ActivityIndicator />}
                    />
                )}
            </View>
            // <View style={{flex: 1, alignItems: 'flex-start'}}>
            //     <TouchableOpacity
            //         onPress={() => this.setState({count: this.state.count + 1})}
            //         style={{padding: 10, backgroundColor: 'red', borderRadius: 10, marginTop: 20}}
            //     >
            //         <Text>Count</Text>
            //     </TouchableOpacity>
            //     <Text>{this.state.count}</Text>
            // </View>
        )
    }
}
