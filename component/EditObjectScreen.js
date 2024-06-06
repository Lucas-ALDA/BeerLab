import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditObjectScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { objectIndex, object, editObject } = route.params;

  const [name, setName] = useState(object.name);
  const [id, setId] = useState(object.id);
  // Ajoutez d'autres champs selon les besoins

  const saveChanges = async () => {
    const updatedObject = { name, id }; // Ajoutez d'autres champs ici
    editObject(objectIndex, updatedObject);
    
    // Mettez à jour AsyncStorage
    try {
      const storedObjects = await AsyncStorage.getItem('ispindles');
      const objects = storedObjects ? JSON.parse(storedObjects) : [];
      objects[objectIndex] = updatedObject;
      await AsyncStorage.setItem('ispindles', JSON.stringify(objects));
    } catch (error) {
      console.error('Error updating object:', error);
    }
    
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={require('../assets/beerlab-logo.png')} style={styles.logo} />
      </View>
      <View style={styles.overlay} />
      <View style={styles.contentContainer}>
        <View style={styles.mainContainer}>
          <TouchableOpacity style={[styles.option, styles.backButton]} onPress={() => navigation.goBack()}>
            <FontAwesome5 name="arrow-left" size={20} color="#1B1B1B" />
          </TouchableOpacity>
          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>Nom de l'iSpindle</Text>
            <TextInput
              style={styles.inputText}
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>ID de l'iSpindle</Text>
            <TextInput
              style={styles.inputText}
              value={id}
              onChangeText={setId}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={saveChanges}>
            <Text style={styles.loginText}>Enregistrer</Text>
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
    height: '70%',
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
  datePickerButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePickerText: {
    fontSize: 15,
    color: '#111111',
    fontFamily: 'Nunito-Regular',
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


export default EditObjectScreen;
