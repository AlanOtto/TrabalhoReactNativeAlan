import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const CountryListScreen = () => {
  const [countries, setCountries] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar países:', error);
      });
  }, []);

  const handleCountryPress = (country) => {
    navigation.navigate('CountryDetail', { country });
  };

  const renderCountryCard = ({ item }) => (
    <TouchableOpacity onPress={() => handleCountryPress(item)}>
      <View style={styles.card}>
        <Image
          source={{ uri: item.flags['png'] }}
          style={styles.flag}
        />
        <View>
          <Text style={styles.countryName}>{item.name.common}</Text>
          {item.capital && (
            <Text><Text style={styles.label}>Capital:</Text> {item.capital[0]}</Text>
          )}

        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lista de Países</Text>
      <Text style={styles.headingDet}>Clique no Card para obter mais detalhes</Text>
      <FlatList
        data={countries}
        keyExtractor={(item) => item.cca3}
        renderItem={renderCountryCard}
      />
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
    fontWeight: 'bold',
  },
  headingDet: {
    fontSize: 16,
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
  },
  flag: {
    width: 60,
    height: 40,
    marginRight: 20,
  },
  countryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
  },
});

export default CountryListScreen;
