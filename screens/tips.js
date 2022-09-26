
import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground } from 'react-native';
import Title from "../components/title";
import { colors } from "../utils/colors";

const Tips = ({navigation}) => {
  
  let Facts = [
    { category: 'Lets get physical...',
      content: 'Exercise improves the structure and funciton of the brain and reduces the risk of dementia - get up and start the day with a brisk 30 minute walk!'
    },
    { category: 'Lets eat...',
      content: 'Omega-3 fatty acids maintain a healthy brain. Fish or supplements are a great source!'
    },
    { category: 'Lets talk...',
      content: 'Did you know, those with fewer social ties may be at risk of cognitive decline? Catch up with an old friend, or join a weekly activity class such as pottery to keep up socialising!'
  },
    { category: 'Stay Zen...',
      content: 'Meditation improves sleep, memory and attention. Close your eyes and focus on your breathing, forgetting about the world for 5 minutes...'
  },
    ]; 

  return (
    <View style={styles.container}> 
    <View style={styles.bannerContainer}>
      <ImageBackground 
      source={require('../assets/logo.jpg')}
      style={styles.firstBanner}
      resizeMode='contain'>
        </ImageBackground>
      <Title titleText='Cognition Tips' />
        </View>
        
      {Facts.map((Fact, Index) => {
        return (
          <View key={Index}>
          <View style={styles.categoryContainer}>
          
          <Text
          style={styles.category}>
          {Fact.category}
          </Text>
          </View>
          
          <View style={styles.tipContainer}>
          <Text
          style={styles.tip}>
            {Fact.content}
          </Text>
            </View>

          </View>
          )
        })}
      
      <TouchableOpacity
        onPress={() => {navigation.navigate("Home")}}
        style={styles.button}>
        <Text style={styles.buttonText}>RETURN HOME</Text>
      </TouchableOpacity>
      </View>
  );
};

export default Tips;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.screenBackground,
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
    height: '100%',
  },
  bannercontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  firstBanner: {
    height: 80,
    width:80,
    alignSelf: 'center',
  },
  category: {
    fontSize: 26,
    fontWeight: '600',
    color: colors.salmonPink
  },
  tip: {
    fontSize: 18,
  },
  categoryContainer: {
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  tipContainer: {
    paddingBottom: 12,
  
    paddingHorizontal: 12,
  },
  button: {
    width: '100%',
    backgroundColor: colors.darkBlue,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.white
  },
});

