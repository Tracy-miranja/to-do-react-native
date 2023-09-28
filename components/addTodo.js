import { StyleSheet, Text, View,Button,TextInput} from 'react-native';
import React from 'react'; 
import { useState } from 'react';


export default function AddTodo(){
    const [text, setText]= useState('')
    const changeHandler=(val)=>{
       setText(val);
    }
    return(
        <View>
        <TextInput 
        style={styles.input}
        placeholder='new Todo...'
        onChangeText={changeHandler}
        />
      <Button onPress={()=>text} title='Add todo' color='coral'/>
      </View>
    )
}

const styles= StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical: 6,
        borderBottomWidth:1,
        borderColor:'#bbb'
        
    }

})