import React, {useEffect} from 'react'
import {View, FlatList, ActivityIndicator, Pressable, Text} from 'react-native'
import { CoinListHeader } from '../../components/CoinListHeader'
import { CoinListItem } from '../../components/CoinListItem'
import {useSelector, useDispatch} from 'react-redux'
import {fetchCoinList} from '../../actions/coinListActions'

//Load more Load 20 items
// onReachedEnd => goi API lấy các item tiếp theo

export const CoinListScreen = ({navigation}) => {
    const dispatch = useDispatch()
    
    const list = useSelector(state => {
        return state.coinList.list
    })
    

    const getCoinList = async (start) => { //lazy load
        dispatch(fetchCoinList())
    }

    useEffect(() => {
        // fetch('https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&sort_dir=desc&limit=100')
        //     .then(response => {
        //         response.json().then(data => setList(data.data))
        //     })

        // axios.get('https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&sort_dir=desc&limit=20')
        //     .then(({data}) => {
        //         console.log('data tu coinmarketcap', data)
        //         setList(data.data)
        //     })
        getCoinList(1)
    }, []) 

    return (
        <View style={{flex: 1}}>
            <Pressable onPress={() => navigation.navigate('CoinsSummary')}>
                <Text>Summary</Text>
            </Pressable>
            <CoinListHeader />
            {list.length === 0 ? <ActivityIndicator /> : (
                <FlatList
                onEndReached={() => getCoinList(list.length + 1)}
                data={list ?? []} // fallback
                renderItem={({item, index}) => {
                    return (
                        <CoinListItem item={item} />
                    )     
                }}
                ListFooterComponent={<ActivityIndicator />}
            />
            )}
        </View>
    )
}


// const mapStateToProps = (state) => {
//     return {list: state.coinList.list}
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setCoinList: (list) => dispatch(setCoinList(list)),
//         addMoreData: (list) => dispatch(addMoreData(list))
//     }
// }

// connect