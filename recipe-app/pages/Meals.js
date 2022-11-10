import React from 'react';
import { FlatList } from 'react-native';
import useFetch from '../hooks/useFetch';
import Card from '../components/Meal/Card';
import Loading from '../components/Loading';
import Error from '../components/Error';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

const Meals = ({ route, navigation }) => {
  const { strCategory } = route.params;
  const { data, loading, error } = useFetch(API_URL + strCategory);

  const handleSelect = (idMeal) => {
    navigation.navigate('Detail', { idMeal });
  };

  const renderMeal = ({ item }) => (
    <Card meal={item} onSelect={() => handleSelect(item.idMeal)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return <FlatList data={data.meals} renderItem={renderMeal} />;
};

export default Meals;
