import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const HomePrep = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://automator.benazouz-ouilem.com/webhook/data');

        setData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'API :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Données de l'API :</Text>
      {data ? (
        <View style={styles.dataContainer}>
          <Text>Batterie : {data[0].body.battery}</Text>
          <Text>Gravité : {data[0].body.gravity}</Text>
          <Text>Température : {data[0].body.temperature}</Text>
          <Text>Inclinaison : {data[0].body.tilt}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dataContainer: {
    marginTop: 10,
  },
});

export default HomePrep;
