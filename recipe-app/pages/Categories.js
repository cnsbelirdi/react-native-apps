import React from 'react';
import { FlatList } from 'react-native';
import useFetch from '../hooks/useFetch';
import Card from '../components/Category/Card';
import Loading from '../components/Loading';
import Error from '../components/Error';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const Categories = ({ navigation }) => {
  const { data, loading, error } = useFetch(API_URL);

  const handleSelect = (strCategory) => {
    navigation.navigate('Meals', { strCategory });
  };

  const renderCat = ({ item }) => (
    <Card category={item} onSelect={() => handleSelect(item.strCategory)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return <FlatList data={data.categories} renderItem={renderCat} />;
};

export default Categories;
