import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./taylorNotreDame.jpg')} // Substitua pelo caminho da sua imagem de fundo
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Bem-vindo à Tela Inicial</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CountryList')}
        >
          <Text style={styles.buttonText}>Ver informações de Países</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('JediInfo')}
        >
          <Text style={styles.buttonText}>Ver informações de Jedis</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Para cobrir todo o fundo
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo com transparência
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // Cor do texto
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3498db', // Cor de fundo do botão
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff', // Cor do texto do botão
    fontWeight: 'bold',
  },
});

export default HomeScreen;
