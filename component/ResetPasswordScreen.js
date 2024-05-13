import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  const [accepted, setAccepted] = useState(false);

  const handleAcceptance = () => {
    setAccepted(!accepted);
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={require('../assets/beerlab-logo.png')} style={styles.logo}/>
      </View>
      <View style={styles.overlay} />
      <View style={styles.contentContainer}>
        <View style={styles.mainContainer}>
          <TouchableOpacity style={[styles.option, styles.backButton]} onPress={() => navigation.navigate('Settings')}>
            <FontAwesome5 name="arrow-left" size={20} color="#1B1B1B" />
          </TouchableOpacity>

          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>Votre mot de passe</Text>
            <TextInput style={styles.inputText} secureTextEntry={true}/>
            <View style={styles.inputLine}/>
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>Nouveau mot de passe</Text>
            <TextInput style={styles.inputText} secureTextEntry={true}/>
            <View style={styles.inputLine}/>
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>Répéter le nouveau mot de passe</Text>
            <TextInput style={styles.inputText} secureTextEntry={true}/>
            <View style={styles.inputLine}/>
          </View>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity style={styles.checkbox} onPress={handleAcceptance}>
              {accepted && <FontAwesome5 name="check-square" size={20} color="#1B1B1B" />}
              {!accepted && <FontAwesome5 name="square" size={20} color="#1B1B1B" />}
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>"J'accepte le changement de mon mot de passe"</Text>
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Confirmer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#1B1B1B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: 75,
    width: 300,
    height: 150,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  mainContainer: {
    position: 'absolute',
    top: 170,
    width: '90%',
    height: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 50,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Nunito-Regular',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#000000',
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default ResetPasswordScreen;
