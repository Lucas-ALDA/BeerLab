import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProgressBar from 'react-native-progress/Bar';

const HomePrep = () => {
  const [tanksData, setTanksData] = useState([]);

  useEffect(() => {
    retrieveTanksData();
  }, []);

  const retrieveTanksData = async () => {
    try {
      const tanksDataFromStorage = await AsyncStorage.getItem('tanks');
      if (tanksDataFromStorage) {
        setTanksData(JSON.parse(tanksDataFromStorage));
      }
    } catch (error) {
      console.error('Error retrieving tanks data:', error);
    }
  };

  const calculateProgress = (beginDate, endDateValue) => {
    const currentDate = new Date();
    const startDate = new Date(beginDate);
    const endDate = new Date(endDateValue);
    const totalTime = endDate - startDate;
    const elapsedTime = currentDate - startDate;
    return (elapsedTime / totalTime) * 100;
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="beer" size={60} color="#fff" />
        </View>
        <View style={styles.dataContainer}>
          <View style={styles.row}>
            <Text style={styles.TitleCuve}>{item.tankName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Recette :</Text>
            <Text style={styles.text}>{item.selectedRecipe}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Statut :</Text>
            <Text style={styles.text}>{item.status}</Text>
          </View>
          <View style={{ display: 'none' }}>
            <Text style={styles.text}>{item.beginDate}</Text>
          </View>
          <View style={{ display: 'none' }}>
            <Text style={styles.text}>{item.endDate}</Text>
          </View>
        </View>
        <View style={styles.progressBar}>
          <View style={styles.row}>
            <Text style={styles.label}>Temps restant :</Text>
            <Text style={styles.text}>{calculateRemainingTime(item.endDate)}</Text>
          </View>
          <ProgressBar progress={calculateProgress(item.beginDate, item.endDate) / 100} width={null} />
        </View>
      </View>
    );
  };

  const calculateRemainingTime = (endDate) => {
    const currentTime = new Date();
    const endTime = new Date(endDate);
    const remainingTime = endTime - currentTime;
    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tanksData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={[styles.flatListContent]}
        showsVerticalScrollIndicator={false} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    flatListContent: {
      marginTop: 10,
      alignItems: 'center',
    },
    card: {
      backgroundColor: '#E8D038',
      borderRadius: 20,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      flexDirection: 'row',
      width: 330,
      height: 330,
      marginBottom: 10,
      position: 'relative',
    },
    iconContainer: {
      width: '25%',
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    dataContainer: {
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      width: '65%',
      height: '65%',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    TitleCuve: {
      fontSize: 20,
      fontWeight: 'bold',
      marginRight: 5,
      fontFamily: 'Nunito-Bold',
    },
    label: {
      fontSize: 17,
      fontWeight: 'bold',
      marginRight: 5,
      fontFamily: 'Nunito-Bold',
    },
    text: {
      flex: 1,
      fontSize: 17,
      fontFamily: 'Nunito-Regular',
    },
    progressBar: {
      position: 'absolute',
      bottom: 40,
      left: '5%',
      width: '90%',
      height: 15,
      borderRadius: 5,
    },
  });

export default HomePrep;