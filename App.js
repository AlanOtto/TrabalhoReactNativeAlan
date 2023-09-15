import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import CountryListScreen from './src/screens/CountryListScreen';
import CountryDetailScreen from './src/screens/CountryDetailScreen';
import { Text, StyleSheet } from "react-native";
import JediInfoScreen from './src/screens/JediInfoScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Countries" component={CountryListScreen} />
        <Stack.Screen name="CountryDetail" component={CountryDetailScreen} />
        <Stack.Screen name="JediInfo" component={JediInfoScreen} />       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  Title: {
      color: '#fff',
      fontSize: 18,
  }
})

export default App;