import React, { useState } from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import Todo from './components/Todo/Todo';
import TextBar from './components/TextBar/TextBar';
import uuid from 'react-native-uuid';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([
    { id: uuid.v4(), content: 'Homework will be checked', completed: false },
    { id: uuid.v4(), content: 'Dogs will be walked', completed: true },
    { id: uuid.v4(), content: 'Garbage will be thrown', completed: true },
    { id: uuid.v4(), content: 'House will be cleaned', completed: false },
  ]);

  const renderTodo = ({ item }) => (
    <Todo
      todo={item}
      handleCompleted={handleCompleted}
      deleteTodo={deleteTodo}
    />
  );

  const handleAddTodo = () => {
    if (todo.length > 0) {
      setTodos([
        {
          id: uuid.v4(),
          content: todo,
          completed: false,
        },
        ...todos,
      ]);
      setTodo('');
    } else {
      Alert.alert('Boş bir ekleme yapamazsınız...');
    }
  };

  const handleCompleted = (id) => {
    const newTodoList = todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodos(newTodoList);
  };

  const deleteTodo = (id) => {
    const newTodoList = todos.filter((item) => item.id !== id);
    setTodos(newTodoList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>Todos list</Text>
          <Text style={styles.counter}>
            {todos.filter((todo) => !todo.completed).length}
          </Text>
        </View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={todos}
          renderItem={renderTodo}
        />
      </View>
      <TextBar setTodo={setTodo} handleAddTodo={handleAddTodo} todo={todo} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, margin: 10, paddingTop: 8 },
  inner_container: { flex: 1, paddingTop: 8, marginTop: 10 },
  title_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: { color: 'orange', fontWeight: 'bold', fontSize: 28 },
  counter: { color: 'orange', fontSize: 28, fontWeight: 'bold' },
});
