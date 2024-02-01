 
const fetch = require('node-fetch');

const fetchChampionInformation = async (championName, role) => {
  const url = `https://league-of-legends-champions.p.rapidapi.com/champions/fr-fr?page=0&size=10&name=${championName}&role=${role}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3a80100cdbmshff733f3c7f226f8p10f585jsn038a38c5911c',
      'X-RapidAPI-Host': 'league-of-legends-champions.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchChampionsList = async (page, size) => {
    const url = `https://league-of-legends-champions.p.rapidapi.com/champions/fr-fr?page=${page}&size=${size}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3a80100cdbmshff733f3c7f226f8p10f585jsn038a38c5911c',
        'X-RapidAPI-Host': 'league-of-legends-champions.p.rapidapi.com',
      },
    };
  
    try {
      const response = await fetch(url, options);
      const championsList = await response.json();  
      return championsList;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  export { fetchChampionInformation, fetchChampionsList };
