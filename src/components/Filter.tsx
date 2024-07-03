import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from 'src/utils/colors';
import {useAppContext} from 'src/context/AppContext';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome';

export default function Filter() {
  const {filterName, setFilterName, filterStatus, setFilterStatus} =
    useAppContext();

  const onClearPress = () => {
    setFilterName('');
    setFilterStatus('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.filterInput}
        placeholder="Type a name"
        value={filterName}
        onChangeText={setFilterName}
        testID="filter_name"
      />
      <TextInput
        style={styles.filterInput}
        placeholder="Type a status"
        value={filterStatus}
        onChangeText={setFilterStatus}
        testID="filter_status"
      />
      <TouchableOpacity
        style={styles.clearButtonContainer}
        onPress={onClearPress}
        testID="clear_button">
        <FontAwesome6Icon name="close" size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 12,
  },
  filterInput: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: Colors.Gray,
    height: 40,
    paddingLeft: 12,
    flex: 1,
    marginRight: 24,
  },
  clearButtonContainer: {
    alignSelf: 'center',
    right: 12,
  },
});
