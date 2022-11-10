import React from 'react';
import { FlatList, Linking } from 'react-native';
import useFetch from '../hooks/useFetch';
import Card from '../components/Detail/Card';
import Loading from '../components/Loading';
import Error from '../components/Error';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const Detail = ({ route }) => {
  const { idMeal } = route.params;

  const { data, loading, error } = useFetch(`${API_URL}${idMeal}`);

  const handleSelect = (strYoutube) => {
    Linking.openURL(strYoutube);
  };

  const renderDetail = ({ item }) => <Card detail={item} onSelect={() => handleSelect(item.strYoutube)} />;

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return <FlatList data={data.meals} renderItem={renderDetail} />;
};

export default Detail;
