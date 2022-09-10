import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import Title from "../components/title";

const Results = ({navigation, route}) => {
  const {score} = route.params
  
  const resultsBanner = 
    score < 30 ? "https://cdni.iconscout.com/illustration/premium/thumb/startup-3430726-2888289.png" :
    score > 70 ? "https://cdni.iconscout.com/illustration/premium/thumb/finished-product-purchase-process-3328216-2809502.png" :
    "https://cdni.iconscout.com/illustration/premium/thumb/young-woman-sitting-with-ipad-having-great-idea-5352699-4470467.png"

  const resultsClassification =
  score < 30 ? <Text>LEVEL: BEGINNER</Text> :
  score > 70 ? <Text>LEVEL: ADVANCED</Text> :
  <Text>LEVEL: INTERMEDIATE</Text>

  return (
  <View style={styles.container}>
      <Title titleText='RESULTS' />
      <Text style={styles.scoreValue}>{score}</Text>

    <View style={styles.bannerContainer}>
    <Image
        source={{
          uri: resultsBanner,
        }}
        style={styles.banner}
        resizeMode='contain'
        />
        <Text style={styles.scoreValue}>{resultsClassification}</Text>
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
  scoreValue: {
    fontSize: 26,
    fontWeight: '600',
    paddingBottom: 20,
    alignSelf: 'center',
    },
  });
