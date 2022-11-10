import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch/useFetch';

import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const API_URL = 'https://fakestoreapi.com/products';

const Detail = ({ route }) => {
  const { id } = route.params;

  const { loading, error, data } = useFetch(`${API_URL}/${id}`);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image }} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price} $</Text>
      </View>
    </View>
  );
};

export default Detail;
