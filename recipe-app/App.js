import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './pages/Categories';
import Detail from './pages/Detail';
import Meals from './pages/Meals';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            headerTitleStyle: { color: 'orange' },
            headerTintColor: 'orange',
          }}
        />
        <Stack.Screen
          name="Meals"
          component={Meals}
          options={{
            headerTitleStyle: { color: 'orange' },
            headerTintColor: 'orange',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTitleStyle: { color: 'orange' },
            headerTintColor: 'orange',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
