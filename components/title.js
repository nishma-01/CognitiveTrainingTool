import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = () => {
  return (
     <View style={styles.container}>
      <Text style={styles.title}>Cognitive Training Tool</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '600',
  },
  container: {
    paddingBottom: 20,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
