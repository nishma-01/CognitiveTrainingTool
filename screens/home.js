import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from "../components/title";

const Home = () => {
  return (
     <View>
      <Title />
      <View style={styles.container}>
      <ImageBackground 
      source={require('../assets/home-img1.png')}
      style={styles.image}
      resizeMode='contain'>
        </ImageBackground>
      </View>
      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
