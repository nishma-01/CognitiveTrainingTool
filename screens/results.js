import React from "react";
import { SafeAreaView, TouchableOpacity, ImageBackground, StyleSheet, Text, View } from 'react-native';

const Results = ({navigation}) => {
  return (
  <SafeAreaView>
    <View> 
      <Text>Results page</Text>
    </View>

    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/home-img1.png')}
        style={styles.image}
        resizeMode='contain'>
      </ImageBackground>
    </View>

    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>HOME</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
};

export default Results;

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
