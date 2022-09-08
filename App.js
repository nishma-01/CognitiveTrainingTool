import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Results from './screens/results';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text>this is the ctt!</Text> */}
      <Home />
      {/* <Quiz /> */}
      {/* <Results /> */}
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
