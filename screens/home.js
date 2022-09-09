import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from "../components/title";

const Home = ({navigation}) => {
  return (
     <View style={styles.container}>
      <Title titleText='Cognitive Training Tool' />
      <View style={styles.bannerContainer}>
      <ImageBackground 
      source={require('../assets/home-img1.png')}
      style={styles.banner}
      resizeMode='contain'>
        </ImageBackground>
      </View>
      <TouchableOpacity 
      onPress={() => navigation.navigate("Quiz")}
      style={styles.button}>
        <Text style={styles.buttonText} >Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
banner: {
  height: 300,
  width: 300,
},
bannercontainer: {
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
},
container: {
  paddingTop: 40,
  paddingHorizontal: 20,
  alignItems: 'center',
  height: '100%',
},
button: {
  width: '100%',
  backgroundColor: '#008DB8',
  padding: 16,
  borderRadius: 16,
  alignItems: 'center',
  marginBottom: 30,
},
buttonText: {
  fontSize: 22,
  fontWeight: '600',
  color: '#FFFF'
},
});
