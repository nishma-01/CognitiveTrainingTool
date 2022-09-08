import React from "react";
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View } from 'react-native';

const Results = () => {
  return (
  <View>
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
      <TouchableOpacity>
        <Text>HOME</Text>
      </TouchableOpacity>
    </View>
  </View>
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
