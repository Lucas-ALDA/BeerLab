import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image  } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const AddRecipesScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { addRecipe } = route.params || {};
  const [recipeName, setRecipeName] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleAddRecipe = () => {
    if (recipeName && duration && description && ingredients && instructions) {
      const recipe = {
        name: recipeName,
        duration: duration,
        description: description,
        ingredients: ingredients,
        instructions: instructions,
      };
      addRecipe(recipe);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={require('../assets/beerlab-logo.png')} style={styles.logo}/>
      </View>
      <View style={styles.overlay} />
      <View style={styles.contentContainer}>
        <View style={styles.mainContainer}>
          <TouchableOpacity style={[styles.option, styles.backButton]} onPress={() => navigation.navigate('Recipes')}>
            <FontAwesome5 name="arrow-left" size={20} color="#1B1B1B" />
          </TouchableOpacity>

          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>Nom de la recette :</Text>
            <TextInput style={styles.inputText} value={recipeName} onChangeText={setRecipeName}/>
          </View>

          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>Durée (en jours) :</Text>
            <TextInput style={styles.inputText} value={duration} onChangeText={setDuration}/>
          </View>

          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>Description :</Text>
            <TextInput style={[styles.inputText, styles.descriptionInput]} multiline numberOfLines={2} value={description} onChangeText={setDescription}/>
          </View>

          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>Ingrédients :</Text>
            <TextInput style={[styles.inputText, styles.descriptionInput]} multiline numberOfLines={2} value={ingredients} onChangeText={setIngredients}/>
          </View>

          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>Instructions :</Text>
            <TextInput style={[styles.inputText, styles.descriptionInput]} multiline numberOfLines={4} value={instructions} onChangeText={setInstructions}/>
          </View>

          <TouchableOpacity style={styles.loginBtn} onPress={handleAddRecipe}>
            <Text style={styles.loginText}>Ajouter la recette</Text>
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
    height: '75%',
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

export default AddRecipesScreen;
