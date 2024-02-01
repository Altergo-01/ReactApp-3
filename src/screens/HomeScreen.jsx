// src/screens/HomeScreen.jsx
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { fetchChampionsList } from '../services/LeagueOfLegendsService';

const HomeScreen = () => {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    const getChampionsList = async () => {
      try {
        const championsList = await fetchChampionsList(2, 10);
        console.log(championsList);  
        setChampions(championsList);
      } catch (error) {
         
        console.error(error);
      }
    };

    getChampionsList();
  }, []);

  const renderChampionCard = ({ item }) => {
    const champion = item.node;  
  
    return (
      <TouchableOpacity style={styles.card}>
        <View>
          <Text style={styles.cardText}>{champion.name}</Text>
 
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Liste des Champions : </Text>
      <FlatList
        data={champions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderChampionCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
