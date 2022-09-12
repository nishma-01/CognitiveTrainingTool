import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from "../components/title";

const Home = ({navigation}) => {
  return (
     <View style={styles.container}>
      <Title titleText='Cognitive Training Tool' />
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
        <Text style={styles.buttonText} >Tip of the Day</Text>
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
    backgroundColor: '#F8EDEB',

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
