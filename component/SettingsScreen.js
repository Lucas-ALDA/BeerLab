import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={require('../assets/beerlab-logo.png')} style={styles.logo}/>
      </View>
      <View style={styles.overlay} />
      <View style={styles.contentContainer}>
        <View style={styles.mainContainer}>
          <TouchableOpacity style={[styles.option, styles.backButton]} onPress={() => navigation.navigate('Home')}>
            <FontAwesome5 name="arrow-left" size={20} color="#1B1B1B" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('ResetPassword')}>
            <View style={styles.iconBackground}>
              <FontAwesome5 name="key" size={20} color="#1B1B1B"/>
            </View>
            <Text style={[styles.optionText, { fontSize: 18 }]}>Modifier le mot de passe</Text>
          </TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('AddObject')}>
            <View style={styles.iconBackground}>
              <FontAwesome5 name="plus" size={20} color="#1B1B1B" />
            </View>
            <Text style={[styles.optionText, { fontSize: 18 }]}>Ajouter votre iSpindle</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={[styles.option, styles.logoutButton]} onPress={() => navigation.navigate('Login')}>
            <View style={[styles.iconBackground]}>
              <FontAwesome5 name="sign-out-alt" size={20} color="#1B1B1B" />
            </View>
            <Text style={[styles.optionText, { fontSize: 18 }]}>Déconnexion</Text>
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
  iconBackground: {
    width: 40,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
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
  optionText: {
    fontFamily: 'Nunito-Bold',
    marginLeft: 5,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#000000',
    marginBottom: 20,
  },
  logoutButton: {
    position: 'absolute',
    bottom: 10,
    marginLeft: 5,
    border: 1,
    borderColor: '1B1B1B',
    width: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default SettingsScreen;
