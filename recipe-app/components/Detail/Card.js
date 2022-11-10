import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Card.styles';

const Card = ({ detail, onSelect }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: detail.strMealThumb }} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{detail.strMeal}</Text>
        <Text style={styles.area}>{detail.strArea}</Text>
        <View style={styles.body_container}>
          <Text style={styles.instruction}>{detail.strInstructions}</Text>
          <TouchableOpacity style={styles.yt_button} onPress={onSelect}>
            <Text style={styles.yt_text}>Watch on Youtube</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;
