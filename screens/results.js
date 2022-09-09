import React from "react";
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Title from "../components/title";

const Results = ({navigation, route}) => {
  const params = route.params
  console.log(params)

  return (
  <View style={styles.container}>
      <Title titleText='RESULTS' />
    <View style={styles.bannerContainer}>
      <ImageBackground 
        source={require('../assets/home-img1.png')}
        style={styles.banner}
        resizeMode='contain'>
      </ImageBackground>
    </View>
      <TouchableOpacity 
      onPress={() => navigation.navigate("Home")}
      style={styles.button}>
        <Text style={styles.buttonText}>RETURN HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Results;

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
