import React from 'react'
import {
    View,
    Text, 
    TextInput,
    ViewScrolling,
    TouchableOpacity
}

const Todo = () => {
    const [activity, setActivity] = useState('');

    if (activity == '') { 
        return 
    } 
        
    
return (

const Todo = () => {
        const [dataActivity, setDataActivity] = useState([""]);
        
        
}

{/* Header */ }
<View style={{
    height: 18,
    width: "100%",
    fontSize: 18,
    color: "green",
}}><ViewScrolling />
    ></View>
{/* input box */ }
<View style={{
    height: 40,
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10
}}>
    <Text style={{
        fontSize: 18,
        color: "black",
        padding: 10}}
    </View>

{/* input to do */ }
        <View style={{
            flexDirection: "row",
            padding: 10,
            backgroundColor: "white",
            borderRadius: 10,
            height: 40,
}}
><TextInput>{value}</TextInput></View>

{/* button sent*/ }
<TouchableOpacity>
<Text style={{color: "black", }}>Submit</Text></TouchableOpacity>
        )
    }
        

export default Todo