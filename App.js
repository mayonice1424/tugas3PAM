import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomePage from './src/Screen/HomePage';
import ResultSearchPage from './src/Screen/ResultSearchPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ResultSearchPage" component={ResultSearchPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
