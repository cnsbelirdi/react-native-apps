import React from 'react';
import { SafeAreaView, ActivityIndicator, FlatList, Text } from 'react-native';
import styles from './Product.style';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const API_URL = 'https://fakestoreapi.com/products';

const Product = ({navigation}) => {
  const {error, loading, data} = useFetch(API_URL);

  const handleProductSelect = (id) => {
    navigation.navigate('DetailPage', {id});
  }

  const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />;

  if (loading) {
    return <Loading />;
  }
  if(error){
    return <Error />;
  }

  return (
      <FlatList data={data} renderItem={renderProduct} />
  );
};

export default Product;
