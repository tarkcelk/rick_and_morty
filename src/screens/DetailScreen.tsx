import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from 'src/types/navigationTypes';
import Colors from 'src/utils/colors';
import {IEpisode} from 'src/types/types';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppContext} from 'src/context/AppContext';
import Tag from 'src/components/Tag';
import Icon from 'react-native-vector-icons/FontAwesome';

type NavigationRouteProp = RouteProp<RootStackParamList, 'DetailScreen'>;

export default function DetailScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const {params} = useRoute<NavigationRouteProp>();
  const [lastSeenEpisode, setLastSeenEpisode] = useState<IEpisode>();
  const {favoriteCharacterIds, setFavoriteCharacterId} = useAppContext();

  const {item: character} = params;

  useEffect(() => {
    const lastEpisodeEndpoint = character.episode[character.episode.length - 1];
    axios.get(lastEpisodeEndpoint).then(result => {
      setLastSeenEpisode(result.data);
    });
  }, []);

  const onFavoritePress = () => {
    setFavoriteCharacterId(character.id);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: character.image}}
        style={styles.imageContainer}
        resizeMode="stretch">
        <FontAwesome6
          name="arrow-left"
          size={26}
          style={{marginTop: insets.top, marginLeft: 24}}
          color={Colors.White}
          onPress={navigation.goBack}
        />
      </ImageBackground>

      <View style={styles.infoContainer}>
        <View style={styles.rowSpaceBetween}>
          <Text style={styles.itemName} numberOfLines={1}>
            {character.name}
          </Text>
          <FontAwesome
            name={
              favoriteCharacterIds.includes(character.id) ? 'star' : 'star-o'
            }
            size={36}
            onPress={onFavoritePress}
            color={Colors.Orange}
          />
        </View>
        <Text style={styles.itemStatus}>
          <Icon name="tags" color={Colors.Orange} /> {character.episode.length}{' '}
          episode
          {character.episode.length > 1 ? 's' : ''}
        </Text>
        <View style={styles.rowSpaceBetween}>
          <Tag
            tag={character.status}
            containerStyle={styles.tagContainer}
            textStyle={styles.tagText}
          />
          <Tag
            tag={character.species}
            containerStyle={styles.tagContainer}
            textStyle={styles.tagText}
          />

          <Tag
            tag={character.gender}
            containerStyle={styles.tagContainer}
            textStyle={styles.tagText}
          />
        </View>
        <View style={styles.rowSpaceBetween}>
          <View style={{flex: 1}}>
            <Text style={styles.infoHeader}>Origin Location</Text>
            <Text style={styles.itemStatus}>{character.origin.name}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.infoHeader}>Last Known</Text>
            <Text style={styles.itemStatus}>{character.location.name}</Text>
          </View>
        </View>

        <View style={styles.rowSpaceBetween}>
          <View style={{flex: 1}}>
            <Text style={styles.infoHeader}>Last Episode</Text>
            <Text style={styles.itemStatus}>{lastSeenEpisode?.name}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.infoHeader}>Air Date</Text>
            <Text style={styles.itemStatus}>{lastSeenEpisode?.air_date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  imageContainer: {
    flex: 3,
  },
  infoContainer: {
    flex: 4,
    paddingLeft: 24,
    backgroundColor: Colors.White,
    borderRadius: 24,
    bottom: 24,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  itemStatus: {
    fontSize: 18,
    color: Colors.DarkGray,
    marginTop: 8,
    maxWidth: 200,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 16,
    marginTop: 18,
  },
  tagContainer: {height: 40, width: 100},
  tagText: {fontSize: 18},
  infoHeader: {
    color: Colors.Gray,
    fontSize: 16,
  },
});
