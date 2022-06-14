import React from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'

const CoinsSummary = React.memo(({list}) => {
    return (
        <View>
            <Text>Sum of coins: {list.length}</Text>
        </View>
    )
})

const mapStateToProps = (state) => {
    return {list: state.coinList.list}
}

export default connect(mapStateToProps)(CoinsSummary)