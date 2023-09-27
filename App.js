import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [todos, setTodos]= useState([
    {text:'buy brakfast', key:'1'},
    {text:'go shopping', key:'2'},
    {text:'buy sapper', key:'3'},
    {text:'Arrange the table', key:'4'}
  ])
  return (
    <View style={styles.container}>
     {/* header*/}
     <View style={styles.content}>
      {/*to do form*/}
      <View style={styles.lists}>
        <FlatList
          data={todos}
          renderItem={({item})=>(
            <Text>{item.text}</Text>
          )}
        />
      </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 40.
  },
  list:{
    margin:20
  }

});
