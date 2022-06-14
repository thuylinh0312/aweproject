import React, {useContext}from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { ThemeContext } from './compA'
import { styles } from './styles'

const CompC = () => {
    const theme = useContext(ThemeContext)
    console.log(theme)
    return (
        <View>
        
            <Text >
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </Text>
            {/* <Text style ={styles.light}>gfdg</Text>
              */}
        </View>
    )
}
export default CompC
