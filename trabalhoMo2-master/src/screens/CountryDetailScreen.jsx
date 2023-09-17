import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CountryDetailScreen = ({ route }) => {
  const { country } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{country.name.common}</Text>
      <Text><Text style={styles.label}>Continente:</Text> {country.region}</Text>
      <Text><Text style={styles.label}>População:</Text> {country.population}</Text>
      <Text><Text style={styles.label}>Área:</Text> {country.area} km²</Text>
      <Text><Text style={styles.label}>Moeda:</Text> {country.currencies[Object.keys(country.currencies)[0]].name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
  },
});

export default CountryDetailScreen;