import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name="beer" size={60} color="#fff" />
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.cardContent}>
          <Text style={styles.cardLabel}>Nom de la cuve :</Text>
          <Text style={styles.cardText}>{item.tankName}</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardLabel}>Recette :</Text>
          <Text style={styles.cardText}>{item.selectedRecipe}</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardLabel}>Statut :</Text>
          <Text style={styles.cardText}>{item.status}</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardLabel}>Date de début :</Text>
          <Text style={styles.cardText}>{item.beginDate}</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardLabel}>Date de fin :</Text>
          <Text style={styles.cardText}>{item.endDate}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tanksData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
      marginLeft: 10,
    },
    flatListContent: {
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
      width: '97%',
      marginBottom: 10,
    },
    iconContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    dataContainer: {
      flex: 2,
      paddingLeft: 10,
    },
    cardContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    cardLabel: {
      fontWeight: 'bold',
    },
    cardText: {
      marginLeft: 10,
    },
  });
  
  export default HomePrep;
