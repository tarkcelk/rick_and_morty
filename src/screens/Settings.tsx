import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useAppContext} from 'src/context/AppContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from 'src/utils/colors';

export default function Settings() {
  const {numOfColumns, setNumOfColumns} = useAppContext();

  const onMinusButtonPress = () => {
    if (numOfColumns === 1) return;
    setNumOfColumns(numOfColumns - 1);
  };

  const onPlusButtonPress = () => {
    if (numOfColumns === 2) return;
    setNumOfColumns(numOfColumns + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.numOfColumnsContainer}>
        <Text style={styles.numOfColumnsHeader}>Num Of Columns</Text>
        <View style={styles.updateNumOfColumnsContainer}>
          <TouchableOpacity
            onPress={onMinusButtonPress}
            testID="num_of_columns_minus_button">
            <Icon
              name="minus"
              size={24}
              color={numOfColumns === 1 ? Colors.Gray : Colors.Black}
            />
          </TouchableOpacity>
          <Text testID="num_of_columns" style={styles.numOfColumnsValue}>
            {numOfColumns}
          </Text>
          <TouchableOpacity
            onPress={onPlusButtonPress}
            testID="num_of_columns_plus_button">
            <Icon
              name="plus"
              size={24}
              color={numOfColumns === 2 ? Colors.Gray : Colors.Black}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 24,
  },
  numOfColumnsHeader: {
    fontSize: 24,
  },
  numOfColumnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  updateNumOfColumnsContainer: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 12,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numOfColumnsValue: {
    fontSize: 24,
    marginHorizontal: 16,
  },
});
