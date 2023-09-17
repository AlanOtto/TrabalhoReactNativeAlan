import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import CountryListScreen from './src/screens/CountryListScreen';
import CountryDetailScreen from './src/screens/CountryDetailScreen';
import JediInfoScreen from './src/screens/JediInfoScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CountryList" component={CountryListScreen} />
        <Stack.Screen name="CountryDetail" component={CountryDetailScreen} />
        <Stack.Screen name="JediInfo" component={JediInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;