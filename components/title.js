import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/colors';

const Title = ({titleText}) => {
  return (
     <View style={styles.container}>
      <Text style={styles.title}>{titleText}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    // color: colors.salmonPink,
    fontSize: 30,
    fontWeight: '700',
  },
  container: {
    paddingBottom: 20,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
