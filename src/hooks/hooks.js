import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export const Hooks = ({navigation}) => {
    return (
        <View style = {{ flex: 1, padding: 10}}>
            <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                <Text>useContext</Text>
                <View style = {{flex: 1}}></View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("UseContext")}
                > 
                <Text style = {{backgroundColor: "lightblue", padding:5}}>X</Text>
                </TouchableOpacity>         
            </View> 

            <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                <Text>useRef</Text>
                <View style = {{flex: 1}}></View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("UseRef")}
                > 
                <Text style = {{backgroundColor: "lightblue", padding:5}}>X</Text>
                </TouchableOpacity>         
            </View> 

            <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                <Text>useReducer</Text>
                <View style = {{flex: 1}}></View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("UseReducer")}
                > 
                <Text style = {{backgroundColor: "lightblue", padding:5}}>X</Text>
                </TouchableOpacity>         
            </View> 

            <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                <Text>useCallback</Text>
                <View style = {{flex: 1}}></View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("UseCallback")}
                > 
                <Text style = {{backgroundColor: "lightblue", padding:5}}>X</Text>
                </TouchableOpacity>         
            </View>

            <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                <Text>useMemo</Text>
                <View style = {{flex: 1}}></View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("UseMemo")}
                > 
                <Text style = {{backgroundColor: "lightblue", padding:5}}>X</Text>
                </TouchableOpacity>         
            </View> 

            <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                <Text>useLayoutEffect</Text>
                <View style = {{flex: 1}}></View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("UseLayoutEffect")}
                > 
                <Text style = {{backgroundColor: "lightblue", padding:5}}>X</Text>
                </TouchableOpacity>         
            </View> 

            <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                <Text>useTransition</Text>
                <View style = {{flex: 1}}></View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("UseTransition")}
                > 
                <Text style = {{backgroundColor: "lightblue", padding:5}}>X</Text>
                </TouchableOpacity>         
            </View> 
            
            <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                <Text>useDeferredValue</Text>
                <View style = {{flex: 1}}></View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("UseDeferredValue")}
                > 
                <Text style = {{backgroundColor: "lightblue", padding:5}}>X</Text>
                </TouchableOpacity>         
            </View>

            <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                <Text>useImperativeHandle</Text>
                <View style = {{flex: 1}}></View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("UseImperativeHandle")}
                > 
                    <Text style = {{backgroundColor: "lightblue", padding:5}}>X</Text>
                </TouchableOpacity>         
            </View> 
            
        </View>
        
    )
}