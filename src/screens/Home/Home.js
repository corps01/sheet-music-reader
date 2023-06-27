import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import styles from "./Home.styles";

// Assuming you have a data source containing the available sheet music or audio tracks
const musicData = [
  { id: 7, title: "Canta Oh Buen Cristiano", composer: "Lowell Mason, 1864" },
  { id: 2, title: "Song 2", composer: "Composer 2" },
  { id: 3, title: "Song 3", composer: "Composer 3" },
  { id: 2, title: "Song 2", composer: "Composer 2" },
  { id: 3, title: "Song 3", composer: "Composer 3" },
  { id: 2, title: "Song 2", composer: "Composer 2" },
  { id: 3, title: "Song 3", composer: "Composer 3" },
  { id: 2, title: "Song 2", composer: "Composer 2" },
  { id: 3, title: "Song 3", composer: "Composer 3" },
  { id: 2, title: "Song 2", composer: "Composer 2" },
  { id: 3, title: "Song 3", composer: "Composer 3" },
  { id: 2, title: "Song 2", composer: "Composer 2" },
  { id: 3, title: "Song 3", composer: "Composer 3" },
  { id: 2, title: "Song 2", composer: "Composer 2" },
  { id: 3, title: "Song 3", composer: "Composer 3" },
  // Add more music data as needed
];

const Home = ({ navigation }) => {
  // State to hold the list of music data
  const [musicList, setMusicList] = useState([]);

  const handleSearch = (searchText) => {
    const filteredData = musicData.filter((song) => {
      const lowercaseSearchText = searchText.toLowerCase();
      const lowercaseTitle = song.title.toLowerCase();

      // Check if the lowercase title includes the lowercase search text
      return lowercaseTitle.startsWith(lowercaseSearchText);
    });

    setMusicList(filteredData); // Update the musicList state with the filtered data
  };

  useEffect(() => {
    // Fetch music data from your data source (API, database, etc.)
    // You can replace this with your actual data fetching logic
    setMusicList(musicData);
  }, []);

  // Render a single item in the music list
  const renderMusicItem = ({ item }) => (
    <TouchableOpacity
      style={styles.musicItemContainer}
      onPress={() => handleMusicPress(item)}
    >
      <Text style={styles.musicTitle}>{item.title}</Text>
      <Text style={styles.musicComposer}>{item.composer}</Text>
    </TouchableOpacity>
  );

  // Handle music item press
  const handleMusicPress = (item) => {
    // Navigate to the Sheet Music screen passing the selected music item
    navigation.navigate("SheetMusic", { musicItem: item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Salmos Himnos y Cantos Espirituales</Text>
      <SearchBar onSearch={handleSearch} />
      {musicList.length > 0 ? (
        <FlatList
          data={musicList}
          renderItem={renderMusicItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <Text style={styles.noDataText}>No hay cantos disponibles</Text>
      )}
    </View>
  );
};

export default Home;
