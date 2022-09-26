import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import Title from "../components/title";
import { colors } from "../utils/colors";

const Home = ({navigation}) => {
  return (
     <View style={styles.container}>
      <View style={styles.bannerContainer}>
      <ImageBackground 
      source={require('../assets/logo.jpg')}
      style={styles.firstBanner}
      resizeMode='contain'>
        </ImageBackground>
      <Title titleText='Cognitive Training Tool' />
        </View>
        
      <View style={styles.bannerContainer}>
      <Image
        source={{
          uri:'https://cdni.iconscout.com/illustration/premium/thumb/q-and-a-service-3678714-3098907.png',
        }}
      style={styles.banner}
      resizeMode='contain'
        />
      </View>
      
      <TouchableOpacity 
      onPress={() => navigation.navigate("Quiz")}
      style={styles.button}>
        <Text style={styles.buttonText} >Start</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => navigation.navigate("Tips")}
      style={styles.button}>
        <Text style={styles.buttonText} >Cognition Tips</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  firstBanner: {
    height: 80,
    width:80,
    alignSelf: 'center',
  },
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
  backgroundColor: colors.screenBackground,
  paddingTop: 60,
  paddingHorizontal: 20,
  alignItems: 'center',
  height: '100%',
},
button: {
  width: '100%',
  backgroundColor: colors.darkBlue,
  padding: 16,
  borderRadius: 16,
  alignItems: 'center',
  marginBottom: 30,
},
buttonText: {
  fontSize: 22,
  fontWeight: '700',
  color: colors.white,
},
});
