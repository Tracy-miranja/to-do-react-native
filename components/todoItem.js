import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react'; 

export default function TodoItem({item, pressHandler}){
    return(
     <TouchableOpacity onPress={()=>pressHandler(item.key)}>
        <Text style={styles.item}>{item.text}</Text>
     </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    item: {
        borderColor: '#bbb',
        borderWidth: 1,
        padding: 16,
        marginTop: 5,
        borderStyle: 'dotted',
        borderRadius: 10,
    }

})