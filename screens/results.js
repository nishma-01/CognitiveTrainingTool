import React from "react";
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View } from 'react-native';

const Results = ({navigation}) => {
  return (
  <View style={styles.container}>
    <View> 
      <Text>Results page</Text>
    </View>

    <View style={styles.bannerContainer}>
      <ImageBackground 
        source={require('../assets/home-img1.png')}
        style={styles.banner}
        resizeMode='contain'>
      </ImageBackground>
    </View>

    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>HOME</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};

export default Results;

const styles = StyleSheet.create({
  banner: {
  height: 300,
  width: 300,
},
  bannerContainer: {
  justifyContent: 'center',
  alignItems: 'center',
},
container: {
  paddingTop: 40,
  paddingHorizontal: 20,
  height: '100%',
},
});
