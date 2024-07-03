import {
  View,
  Text,
  StyleSheet,
  ListRenderItemInfo,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {ICharacter} from 'src/types/types';
import Colors from 'src/utils/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Filter from 'src/components/Filter';
import Tag from 'src/components/Tag';

interface IProps {
  characters: ICharacter[];
  onPress: (item: ICharacter) => () => void;
  numOfColumns: number;
  favoriteCharacterIds: number[];
  onCharacterSetToFavorites: (characterId: number) => () => void;
  onEndReached: () => void;
}

export default function CharactersList(props: IProps) {
  const {
    characters,
    onPress,
    numOfColumns,
    favoriteCharacterIds,
    onCharacterSetToFavorites,
    onEndReached,
  } = props;
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const renderItem = ({item}: ListRenderItemInfo<ICharacter>) => {
    const isFavorite = favoriteCharacterIds.includes(item.id);

    return (
      <TouchableOpacity style={styles.itemContainer} onPress={onPress(item)}>
        <View style={styles.itemInfoContainer}>
          <Image
            source={{uri: item.image}}
            style={styles.itemImage}
            resizeMode="stretch"
          />
          <View style={styles.textsContainer}>
            <Text style={styles.itemName} numberOfLines={1}>
              {item.name}
            </Text>
            <View style={styles.row}>
              <Text style={styles.itemStatus}>{item.status}</Text>
              <TouchableOpacity
                style={styles.itemFavoriteContainer}
                onPress={onCharacterSetToFavorites(item.id)}>
                <FontAwesome
                  name={isFavorite ? 'star' : 'star-o'}
                  color={Colors.Orange}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.itemStatus}>{item.species}</Text>
            <Tag tag={item.gender} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const onFilterPress = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const ListHeaderComponent = useCallback(() => {
    return (
      <>
        <View style={styles.rowSpaceBetween}>
          <Text style={styles.header}>Character List</Text>
          <TouchableOpacity
            style={styles.filterContainer}
            onPress={onFilterPress}
            testID="filter_button">
            <Text testID="filter_button_text">
              Filter {isFilterVisible ? '-' : '+'}
            </Text>
          </TouchableOpacity>
        </View>
        {isFilterVisible ? <Filter /> : null}
      </>
    );
  }, [isFilterVisible]);

  return (
    <FlatList
      data={characters}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
      numColumns={numOfColumns}
      key={`${numOfColumns}_num_of_columns`}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
      onEndReached={onEndReached}
      keyExtractor={(item, index) => `${item.id}_${index}_${item.name}`}
      onEndReachedThreshold={0.9}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24,
    color: Colors.Black,
  },
  filterContainer: {
    marginTop: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.Gray,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
  },
  listContainer: {
    marginTop: 16,
    paddingBottom: 100,
    marginLeft: 24,
  },
  itemImage: {
    width: 96,
    height: 128,
    borderRadius: 16,
  },
  itemInfoContainer: {
    flexDirection: 'row',
  },
  itemContainer: {
    marginVertical: 16,
    height: 150,
    flex: 1,
  },
  textsContainer: {
    marginLeft: 16,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  itemName: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  itemStatus: {
    fontSize: 10,
    color: 'gray',
    marginTop: 10,
  },
  itemDate: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    width: 60,
  },
  itemDateIcon: {},
  itemFavoriteContainer: {
    marginLeft: 4,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
