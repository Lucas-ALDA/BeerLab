import React, { useState,  useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecipesScreen = () => {
  const navigation = useNavigation();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    retrieveRecipes();
  }, []);

  useEffect(() => {
    storeRecipes();
  }, [recipes]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = (index) => {
    const newRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(newRecipes);
  };

  const editRecipe = (index, updatedRecipe) => {
    const updatedRecipes = [...recipes];
    updatedRecipes[index] = updatedRecipe;
    setRecipes(updatedRecipes);
  };

  const storeRecipes = async () => {
    try {
      await AsyncStorage.setItem('recipes', JSON.stringify(recipes));
    } catch (error) {
      console.error('Error storing recipes:', error);
    }
  };

  const retrieveRecipes = async () => {
    try {
      const recipesFromStorage = await AsyncStorage.getItem('recipes');
      if (recipesFromStorage) {
        setRecipes(JSON.parse(recipesFromStorage));
      }
    } catch (error) {
      console.error('Error retrieving recipes:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={require('../assets/beerlab-logo.png')} style={styles.logo} />
      </View>
      <View style={styles.overlay} />
      <View style={styles.contentContainer}>
        <View style={styles.mainContainer}>
          <TouchableOpacity style={[styles.option, styles.backButton]} onPress={() => navigation.navigate('Home')}>
            <FontAwesome5 name="arrow-left" size={20} color="#1B1B1B" />
          </TouchableOpacity>
          <Text style={styles.inputLabel}>Mes recettes</Text>
          {recipes.length > 0 ? (
            <FlatList
              data={recipes}
              renderItem={({ item, index }) => (
                <View style={styles.recipeItem}>
                  <Text style={styles.recipeText}>{item.name}</Text>
                  <View style={styles.iconContainer}>
                    <TouchableOpacity
                      style={styles.iconButton}
                      onPress={() => navigation.navigate('EditRecipe', { recipeIndex: index, recipe: item, editRecipe: editRecipe })}
                    >
                      <FontAwesome5 name="edit" size={20} color="#E8D038" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteRecipe(index)}>
                      <FontAwesome5 name="times" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : (
            <Text style={styles.noRecipesText}>Aucune recette</Text>
          )}
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddRecipes', { addRecipe: addRecipe })}>
            <FontAwesome5 name="plus" size={20} color="#FFFFFF" />
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
    fontSize: 20,
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
  recipeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  recipeText: {
    fontSize: 17,
    fontFamily: 'Nunito-Regular',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginRight: 10,
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
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E8D038',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
});

export default RecipesScreen;
