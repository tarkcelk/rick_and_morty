import {View, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Colors from 'src/utils/colors';

export default function ListHeader() {
  return (
    <View style={styles.container}>
      <Icon
        name="bars-staggered"
        size={26}
        color={Colors.Black}
        testID="bar_icon"
      />
      <View>
        <Icon name="bell" size={26} color={Colors.Black} testID="bell_icon" />
        <View style={styles.badge} testID="badge" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginHorizontal: 24,
  },
  badge: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    right: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
