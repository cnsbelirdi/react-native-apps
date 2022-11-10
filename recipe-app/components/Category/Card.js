import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './Card.styles';

const Card = ({ category, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.body_container}>
          <Image
            style={styles.image}
            source={{ uri: category.strCategoryThumb }}
          />
          <Text style={styles.text}>{category.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
