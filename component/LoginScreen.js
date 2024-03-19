import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#1B1B1B', '#1B1B1B', '#E8D038']} locations={[0, 0.5, 1]} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={styles.container}>
      <Image source={require('../assets/beerlab-logo.png')} style={styles.logo}/>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Connexion</Text>
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput style={styles.inputText}/>
          <View style={styles.inputLine}/>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Mot de passe</Text>
          <TextInput style={styles.inputText} secureTextEntry={true}/>
          <View style={styles.inputLine}/>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Mot de passe oublié ?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginText}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signupText}>Pas de compte ? S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 150,
    marginBottom: 50,
  },
  formContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 30,
    marginBottom: 50,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 20,
    fontFamily: 'Nunito-Bold',
  },
  inputView: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 5,
    fontFamily: 'Nunito-Bold',
  },
  inputText: {
    color: '#111111',
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
    fontFamily: 'Nunito-Regular',
  },
  inputLine: {
    backgroundColor: 'black',
  },
  loginBtn: {
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'Nunito-Bold',
  },
  signupText: {
    color: 'black',
    fontSize: 14,
    marginTop: 10,
    fontFamily: 'Nunito-Bold',
  },
  forgotText: {
    color: 'black',
    textAlign: 'right',
    fontSize: 14,
    marginTop: 10,
    fontFamily: 'Nunito-Bold',
  },
});

export default LoginScreen;
