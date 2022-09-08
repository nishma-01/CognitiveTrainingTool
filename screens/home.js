import React from "react";
import { SafeAreaView, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from "../components/title";

const Home = ({navigation}) => {
  return (
     <SafeAreaView>
      <Title />
      <View style={styles.container}>
      <ImageBackground 
      source={require('../assets/home-img1.png')}
      style={styles.image}
      resizeMode='contain'>
        </ImageBackground>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
        <Text>Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
