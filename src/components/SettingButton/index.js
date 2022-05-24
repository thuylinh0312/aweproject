import React from 'react'
import {TouchableOpacity, Text} from 'react-native'

// const SettingButton = ({onPress}) => {

// }

// export class SettingButton extends React.PureComponent {
//     // shouldComponentUpdate(nextProps, nextState) {
//     //     if (nextProps.onPress !== this.props.onPress) {
//     //         return true
//     //     } else {
//     //         return false
//     //     }
//     // }


//     render() {
//         console.log('SettingButton render')
//         return (
//             <TouchableOpacity
//                 onPress={() => this.props.onPress()}
//                 style={{padding: 10, backgroundColor: 'red', borderRadius: 10, marginTop: 20}}
//             >
//                 <Text>Count</Text>
//             </TouchableOpacity>
//         )
//     }
// }

export const SettingButton = React.memo(({onPress}) => {
    console.log('SettingButton render')

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{padding: 10, backgroundColor: 'red', borderRadius: 10, marginTop: 20}}
        >
            <Text>Count</Text>
        </TouchableOpacity>
    )
})