import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const TanksScreen = () => {
  const navigation = useNavigation();
  const [tanks, setTanks] = useState([]);

  const addTank = (tank) => {
    setTanks([...tanks, tank]);
  };

  const deleteTank = (index) => {
    const newTanks = tanks.filter((_, i) => i !== index);
    setTanks(newTanks);
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
          <Text style={styles.inputLabel}>Liste des cuves :</Text>
          <FlatList data={tanks} renderItem={({ item, index }) => (
              <View style={styles.tankItem}>
                <Text style={styles.tankText}>{item}</Text>
                <TouchableOpacity onPress={() => deleteTank(index)}>
                  <FontAwesome5 name="times" size={20} color="red" />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}/>
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddTanks', { addTank })}>
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
  tankItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tankText: {
    fontSize: 17,
    fontFamily: 'Nunito-Regular',
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
  inputLabel: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 5,
    fontFamily: 'Nunito-Bold',
  },
});

export default TanksScreen;
