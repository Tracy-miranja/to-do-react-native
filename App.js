
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { useState } from 'react';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos]= useState([
    {text:'buy brakfast', key:'1'},
    {text:'go shopping', key:'2'},
    {text:'buy sapper', key:'3'},
    {text:'Arrange the table', key:'4'}
  ])
  const pressHandler= (key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key !=key)
    })
  }
  const submitHandler=(text)=>{
    setTodos((prevTodos)=>{
      return [
        {text:text, key:Math.random().toString()},
        ...prevTodos
      ]

    })

  }
  return (
    <View style={styles.container}>
     {/* header*/}
     <Header/>
     <View style={styles.content}>
      {/*to do form*/}
      <AddTodo submitHandler={submitHandler}/>
      <View style={styles.lists}>
        <FlatList
          data={todos}
          renderItem={({item})=>(
            <TodoItem item={item} pressHandler={pressHandler}/>
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
  },
  content: {
    padding: 40.
  },
  lists:{
    margin:20
  }

});
