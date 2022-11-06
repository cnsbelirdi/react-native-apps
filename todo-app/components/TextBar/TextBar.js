import React from 'react';
import { View, TextInput, TouchableHighlight, Text } from 'react-native';
import styles from './TextBar.styles';

const TextBar = ({setTodo, handleAddTodo, todo}) => {
  
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={todo} placeholder="Todo.." onChangeText={(todo)=>setTodo(todo)} />
      <TouchableHighlight
        onPress={handleAddTodo}
        style={styles.button}
        underlayColor="orange">
        <View>
          <Text style={styles.button_text}>Save</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default TextBar;
