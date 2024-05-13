import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import HomePrep from './HomePrep';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={require('../assets/beerlab-logo.png')} style={styles.logo}/>
      </View>
      <View style={styles.overlay} />
      <View style={styles.contentContainer}>
        <View style={styles.mainContainer} />
        <HomePrep/>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
            <View style={styles.iconBackground}>
              <FontAwesome5 name="home" size={24} color="black"/>
            </View>
            <Text style={styles.footerButtonText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Add')}>
            <View style={styles.iconBackground}>
              <FontAwesome5 name="plus" size={24} color="black"/>
            </View>
            <Text style={styles.footerButtonText}>Ajouter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Settings')}>
            <View style={styles.iconBackground}>
              <FontAwesome5 name="cog" size={24} color="black"/>
            </View>
            <Text style={styles.footerButtonText}>Paramètres</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B'
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
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    fontFamily: 'Nunito-Bold',
    marginTop: 5,
  },
  iconBackground: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    position: 'absolute',
    top: 170,
    width: '90%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
  },
});

export default HomeScreen;
