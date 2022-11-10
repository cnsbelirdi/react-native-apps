import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Product from './pages/Products/Product';
import Detail from './pages/Detail/Detail';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsPage"
          component={Product}
          options={{
            title: 'SHOP',
            headerStyle: { backgroundColor: '#64b5f6' },
            headerTitleStyle: { color: 'white' },
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Detail',
            headerStyle: { backgroundColor: '#64b5f6' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
