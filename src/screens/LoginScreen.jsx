import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import MyButton from '../components/MyButton';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin@admin.com' && password === 'admin') {
      navigation.navigate('Home');
    } else {
      alert('Login falhou. Tente novamente.');
    }
  };

  return (
    <ImageBackground
      source={require('./taylorNotreDame.jpg')} // Substitua pelo caminho da sua imagem de fundo
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Faça Login</Text>
        <TextInput
          placeholder="E-mail"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
        <MyButton title="Login" onPressButton={handleLogin} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // ou 'stretch' para preencher todo o espaço disponível
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white', // Cor do texto
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Cor de fundo do input
  },
});

export default LoginScreen;
