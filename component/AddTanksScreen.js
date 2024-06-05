import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Picker } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddTanksScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { addTank } = route.params || {};
  const [tankName, setTankName] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState('');
  const [status, setStatus] = useState('active');
  const [beginDate, setBeginDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showBeginDatePicker, setShowBeginDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const recipes = ['Recette 1', 'Recette 2', 'Recette 3'];

  const handleAddTank = () => {
    if (tankName && selectedRecipe && status && beginDate && endDate) {
      addTank({
        tankName,
        selectedRecipe,
        status,
        beginDate,
        endDate,
      });
      navigation.navigate('Tanks');
    }
  };

  const onBeginDateChange = (event, selectedDate) => {
    setShowBeginDatePicker(false);
    if (selectedDate) {
      setBeginDate(selectedDate);
    }
  };

  const onEndDateChange = (event, selectedDate) => {
    setShowEndDatePicker(false);
    if (selectedDate) {
      setEndDate(selectedDate);
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

          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>Nom de la cuve</Text>
            <TextInput style={styles.inputText} value={tankName} onChangeText={setTankName} />
            <View style={styles.inputLine} />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>Ma recette</Text>
            <Picker selectedValue={selectedRecipe || ''} onValueChange={(itemValue) => setSelectedRecipe(itemValue)}>
              <Picker.Item label="Sélectionnez une recette" value="" />
              {recipes.map((recipe, index) => (
                <Picker.Item key={index} label={recipe} value={recipe} />
              ))}
            </Picker>
            <View style={styles.inputLine} />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>Statut</Text>
            <Picker selectedValue={status} onValueChange={(itemValue) => setStatus(itemValue)}>
              <Picker.Item label="Actif" value="active" />
              <Picker.Item label="Inactif" value="inactive" />
            </Picker>
            <View style={styles.inputLine} />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>Date de début</Text>
            <TouchableOpacity onPress={() => setShowBeginDatePicker(true)} style={styles.datePickerButton}>
              <Text style={styles.datePickerText}>{beginDate.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {showBeginDatePicker && (
              <DateTimePicker
                value={beginDate}
                mode="date"
                display="default"
                onChange={onBeginDateChange}
              />
            )}
            <View style={styles.inputLine} />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>Date de fin</Text>
            <TouchableOpacity onPress={() => setShowEndDatePicker(true)} style={styles.datePickerButton}>
              <Text style={styles.datePickerText}>{endDate.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {showEndDatePicker && (
              <DateTimePicker
                value={endDate}
                mode="date"
                display="default"
                onChange={onEndDateChange}
              />
            )}
            <View style={styles.inputLine} />
          </View>

          <TouchableOpacity style={styles.loginBtn} onPress={handleAddTank}>
            <Text style={styles.loginText}>Ajouter la cuve</Text>
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

export default AddTanksScreen;
