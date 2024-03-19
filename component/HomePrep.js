// HomePrep.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import postApi from '../API/postApi';

const HomePrep = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await postApi.get('');
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
          <Text>Batterie : {data.battery}</Text>
          <Text>Gravité : {data.gravity}</Text>
          <Text>Température : {data.temperature}</Text>
          <Text>Inclinaison : {data.tilt}</Text>
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
