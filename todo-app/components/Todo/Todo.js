import React from 'react';
import { View, Text } from 'react-native';
import styles from './Todo.styles';

const Todo = ({ todo, handleCompleted, deleteTodo }) => {
  return (
    <View
      style={todo.completed ? styles.true_container : styles.false_container}>
      <Text
        style={todo.completed ? styles.true_title : styles.false_title}
        onPress={() => handleCompleted(todo.id)}
        onLongPress={() => deleteTodo(todo.id)}
        >
        {todo.content}
      </Text>
    </View>
  );
};
export default Todo;
