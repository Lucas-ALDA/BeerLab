import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';

const HomePrep = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://beerlab.jamy-app.fr/api/api/');
        setData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'API :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {data ? (
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <FontAwesome5 name="beer" size={60} color="#fff" />
          </View>
          <View style={styles.dataContainer}>
            <View style={styles.cardContent}>
              <Text style={styles.cardLabel}>Batterie :</Text>
              <Text style={styles.cardText}>{data[0].body.battery}</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardLabel}>Gravité :</Text>
              <Text style={styles.cardText}>{data[0].body.gravity}</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardLabel}>Température :</Text>
              <Text style={styles.cardText}>{data[0].body.temperature}</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardLabel}>Inclinaison :</Text>
              <Text style={styles.cardText}>{data[0].body.tilt}</Text>
            </View>
          </View>
        </View>
      ) : (
        <Text>Chargement des données...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 180,
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
      width: '145%'
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
