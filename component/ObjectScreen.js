import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ObjectScreen = () => {
  const navigation = useNavigation();
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    retrieveObjects();
  }, []);

  const retrieveObjects = async () => {
    try {
      const objectsFromStorage = await AsyncStorage.getItem('ispindles');
      if (objectsFromStorage) {
        setObjects(JSON.parse(objectsFromStorage));
      }
    } catch (error) {
      console.error('Error retrieving objects:', error);
    }
  };

  const deleteObject = async (index) => {
    try {
      const updatedObjects = objects.filter((_, i) => i !== index);
      setObjects(updatedObjects);
      await AsyncStorage.setItem('ispindles', JSON.stringify(updatedObjects));
    } catch (error) {
      console.error('Error deleting object:', error);
    }
  };

  const editObject = (index, updatedObject) => {
    const updatedObjects = [...objects];
    updatedObjects[index] = updatedObject;
    setObjects(updatedObjects);
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
          <Text style={styles.inputLabel}>Mon iSpindle</Text>
          {objects.length > 0 ? (
            objects.map((item, index) => (
              <View key={index} style={styles.objectItem}>
                <View style={styles.objectInfo}>
                  <Text style={styles.objectText}>Nom: {item.name}</Text>
                  <Text style={styles.objectText}>ID: {item.id}</Text>
                </View>
                <View style={styles.iconContainer}>
                  <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('EditObject', { objectIndex: index, object: item, editObject: editObject })}>
                    <FontAwesome5 name="edit" size={20} color="#E8D038" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteObject(index)}>
                    <FontAwesome5 name="times" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.noObjectsText}>Aucun iSpindle connecté</Text>
          )}
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddObject')}>
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
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 90,
    alignItems: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  objectItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    width: '100%',
  },
  objectInfo: {
    flex: 1,
  },
  objectText: {
    fontSize: 17,
    fontFamily: 'Nunito-Regular',
    marginBottom: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  iconButton: {
    marginHorizontal: 10,
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
  inputLabel: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'Nunito-Bold',
  },
  noObjectsText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Nunito-Regular',
  },
});

export default ObjectScreen;
