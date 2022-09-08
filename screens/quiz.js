import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Quiz = ({navigation}) => {

  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState();
  const getQuiz = async() => {
    const url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results[0]);
    setQuestions(data.results);
  };
  useEffect(() => { getQuiz() }, []);

  const handleNextPress=() => {
    setQuestionNumber(questionNumber + 1)
  }

  return (
    <View style={styles.container}>
      {questions && (

      <View style={styles.parent}>
      <View style={styles.top}>
        <Text style={styles.question}>Q. {decodeURIComponent(questions[questionNumber].question)}</Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.optionsButton}>
          <Text style={styles.optionsText}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionsButton}>
          <Text style={styles.optionsText}>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionsButton}>
          <Text style={styles.optionsText}>Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionsButton}>
          <Text style={styles.optionsText}>Option 4</Text>
        </TouchableOpacity>
      </View> 

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>

        {questionNumber !== 9 && <TouchableOpacity 
          style={styles.button}
          onPress = {handleNextPress}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity> }

        {questionNumber === 9 && <TouchableOpacity 
          style={styles.button}
          onPress = {() => null}>
          <Text style={styles.buttonText}>SHOW RESULTS</Text>
        </TouchableOpacity> }
      </View>
    </View>
      )}
      </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
container: {
  paddingTop: 40,
  paddingHorizontal: 20,
  height: '100%',
},
top: {
  marginVertical: 16,
},
options: {
  marginVertical: 16,
  flex: 1,
},
bottom: {
  marginBottom: 12,
  paddingVertical: 16,
  justifyContent: 'space-between',
  flexDirection: 'row',
},
button: {
  backgroundColor: '#008DB8',
  padding: 12,
  paddingHorizontal: 16,
  borderRadius: 16,
  alignItems: 'center',
  marginBottom: 30,
},
buttonText: {
  fontSize: 16,
  fontWeight: '500',
  color: '#FFFF'
},
question: {
  fontSize: 24,
},
optionsText: {
  fontSize: 16,
  color: '#FFFF',
},
optionsButton: {
  paddingVertical: 16,
  marginVertical: 10,
  backgroundColor: '#00AFB9',
  paddingHorizontal: 12,
  borderRadius: 12,
},
parent: {
  height: '100%',
},
});