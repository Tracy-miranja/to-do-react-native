import { StyleSheet, Text, View,FlatList } from 'react-native';
import React from 'react'; 

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My To-Do List</Text>
        </View>
    )

}

const styles= StyleSheet.create({
    header:{
        height: 80,
       paddingTop: 29,
       backgroundColor: 'coral',
       justifyContent:'center',
    },
    title: {
     fontWeight: 'bold',
     fontSize: 22,
     textAlign: "center",
     color:'#fff'


    }

});