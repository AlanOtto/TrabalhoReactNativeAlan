import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const JediInfoScreen = () => {
  const [jedis, setJedis] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then((response) => {
        setJedis(response.data.results);
      })
      .catch((error) => {
        console.error('Erro ao buscar informações de Jedis:', error);
      });
  }, []);

  const renderJediItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.jediName}>{item.name}</Text>
      <Text><Text style={styles.label}>Altura:</Text> {item.height} cm</Text>
      <Text><Text style={styles.label}>Peso:</Text> {item.mass} kg</Text>
      <Text><Text style={styles.label}>Cor do cabelo:</Text> {item.hair_color}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Informações de Jedi</Text>
      <FlatList
        data={jedis}
        keyExtractor={(item) => item.name}
        renderItem={renderJediItem}
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
    marginBottom: 20,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
  },
  jediName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
  },
});

export default JediInfoScreen;