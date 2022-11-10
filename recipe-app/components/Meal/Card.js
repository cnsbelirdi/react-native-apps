import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import styles from './Card.styles';

const Card = ({ meal, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} resizeMode="cover" imageStyle={{ borderRadius: 10}} source={{ uri: meal.strMealThumb }} >
          <Text style={styles.text}>{meal.strMeal}</Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;