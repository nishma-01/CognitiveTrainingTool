import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import Title from "../components/title";
import { colors } from "../utils/colors";

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

    <View style={styles.bannerContainer}>
      <ImageBackground 
        source={require('../assets/logo.jpg')}
        style={styles.firstBanner}
        resizeMode='contain'>
      </ImageBackground>
      <Title titleText='Your Results'/>
    </View>
        
      <Text style={styles.scoreValue}>{score} out of 100</Text>
      <Text style={styles.classification}>{resultsClassification}</Text>

    <View style={styles.bannerImageContainer}>
    <Image
        source={{
          uri: resultsBanner,
        }}
        style={styles.banner}
        resizeMode='contain'
        />
    </View>
        <Text style={styles.note}>Keep training and make sure to check the cognition tips!</Text>

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
  bannerImagecontainer: {
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
    color: colors.white
  },
  scoreValue: {
    fontSize: 26,
    fontWeight: '600',
    paddingBottom: 20,
    alignSelf: 'center',
    fontStyle: "italic",
    color: colors.lightBlue,
    },
    note: {
      fontStyle: "italic",
      fontSize: 14,
      fontWeight: '600',
      justifyContent: 'center',
      paddingBottom: 20,
      color: colors.salmonPink,
    },
    classification: {
      fontSize: 26,
      fontWeight: '600',
      paddingBottom: 20,
      alignSelf: 'center',
      },
  });
