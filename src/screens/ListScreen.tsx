import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import ListHeader from 'src/components/ListHeader';
import {ICharacter} from 'src/types/types';
import axios from 'axios';
import {endpoints} from 'src/utils/constants';
import CharactersList from 'src/components/CharactersList';
import {useNavigation} from '@react-navigation/native';
import {useAppContext} from 'src/context/AppContext';
import {RootStackParamList} from 'src/types/navigationTypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ListScreen'
>;

let searchTimeout: NodeJS.Timeout;

export default function ListScreen() {
  const navigation = useNavigation<NavigationProp>();
  const {
    numOfColumns,
    favoriteCharacterIds,
    setFavoriteCharacterId,
    characters,
    setCharacters,
    charactersPage,
    setCharactersPage,
    filterName,
    filterStatus,
  } = useAppContext();

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    debounce(getFilteredCharacters);
  }, [filterName, filterStatus]);

  const getCharacters = () => {
    axios
      .get(`${endpoints.characters}/?page=${charactersPage}`)
      .then(({data: {results}}) => {
        if (results.length > 0) {
          setCharacters([...characters, ...results]);
          setCharactersPage(charactersPage + 1);
        }
      });
  };

  const onItemPress = (item: ICharacter) => () => {
    navigation.navigate('DetailScreen', {item});
  };

  const onCharacterSetToFavorites = (characterId: number) => () => {
    setFavoriteCharacterId(characterId);
  };

  const debounce = (filterRequest: () => void) => {
    if (searchTimeout) clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      filterRequest();
    }, 500);
  };

  const getFilteredCharacters = () => {
    axios
      .get(`${endpoints.characters}?name=${filterName}&status=${filterStatus}`)
      .then(({data: {results}}) => {
        setCharacters(results);
        setCharactersPage(1);
      });
  };

  const onEndReached = () => {
    if (filterName || filterStatus) return;
    getCharacters();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ListHeader />
      <CharactersList
        characters={characters}
        onPress={onItemPress}
        numOfColumns={numOfColumns}
        favoriteCharacterIds={favoriteCharacterIds}
        onCharacterSetToFavorites={onCharacterSetToFavorites}
        onEndReached={onEndReached}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
