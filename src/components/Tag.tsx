import {View, Text, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import React from 'react';
import Colors from 'src/utils/colors';

export default function Tag(props: {
  tag: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}) {
  return (
    <View
      style={{...styles.tagContainer, ...props.containerStyle}}
      testID="tag_container">
      <Text style={{...styles.tag, ...props.textStyle}} testID="tag_text">
        {props.tag}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  tag: {
    color: Colors.LightCobaltBlue,
    fontSize: 10,
  },
  tagContainer: {
    height: 20,
    padding: 4,
    borderRadius: 12,
    backgroundColor: Colors.Lavender,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    width: 60,
  },
});
