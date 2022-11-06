import React, { useState } from 'react';
import { FlatList, View, StyleSheet, SafeAreaView } from 'react-native';
import music_data from './src/music-data.json';
import SongCard from './components/SongCard/SongCard';
import SearchBar from './components/SearchBar/SearchBar';

export default function App() {
  const [list, setList] = useState(music_data);
  const renderSong = ({ item }) => <SongCard song={item} />;
  const renderSeparator = () => <View style={styles.separator} />;

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchBar onSearch={handleSearch} />
        <FlatList
          keyExtractor={(item) => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 10 },
  separator: { borderWidth: 1, borderColor: '#e0e0e0'}
});
