
import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const Tips = ({navigation}) => {
  
  let Facts = [
    { category: 'exercise',
      content: 'Exercise improves mood, self-esteem, anxiety, and sleep which in turn improves cognition - try to do a 30 minute brisk walk today!'
    },
    {category: 'diet',
      content: 'another tip'
    },
    {category: 'diet',
    content: 'another tip'
  },
    {category: 'diet',
    content: 'another tip'
  },
    ]; 

  return (
    <View style={styles.container}> 
      <View style={styles.parent}>
      <View style={styles.top}>
        <Text style={styles.fact}> FACTS! </Text> 

        {Facts.map((Fact, Index) => {
          return (
            <View key={Index}>
            
            <Text
            style={styles.fact}>
              {Fact.category}
            </Text>

            <Text
            style={styles.fact}>
              {Fact.content}
            </Text>
            </View>
          )
        })}
      </View>
      
      <View style={styles.bottom}>
      <TouchableOpacity
        onPress={() => {navigation.navigate("Home")}}
        style={styles.button}>
        <Text style={styles.buttonText}>RETURN HOME</Text>
      </TouchableOpacity>
      </View>
      </View>
</View>
  );
};

export default Tips;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8EDEB',
    paddingTop: 60,
    paddingHorizontal: 20,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  button: {
    width: '100%',
    backgroundColor: '#008DB8',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFF',
  },
  fact: {
    paddingBottom: 50,
    fontSize: 24,
  },
  parent: {
    height: '100%',
  },
  loader: {
    paddingTop: 100,
    alignSelf: "center",
  },
  loaderText: {
    fontSize: 40,
    fontWeight: '500',
    color: '#008DB8',
    alignContent: "center",
  },
});

