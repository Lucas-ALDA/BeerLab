import axios from 'axios';

// Fonction pour récupérer les données de l'API
export const fetchDataFromAPI = async () => {
  try {
    // Effectuer une requête GET vers l'URL de l'API
    const response = await axios.get('https://automator.benazouz-ouilem.com/webhook/data');

    // Retourner les données de la réponse
    return response.data;
  } catch (error) {
    // Gérer les erreurs en cas d'échec de la requête
    console.error('Erreur lors de la récupération des données de l\'API :', error);
    return null; // Retourner null ou une valeur par défaut en cas d'erreur
  }
};
