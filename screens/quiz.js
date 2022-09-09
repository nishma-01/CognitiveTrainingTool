import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i-- ) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({navigation}) => {
  
  const [questions, setQuestions] = useState();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);

  const getQuiz = async() => {
    const url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]))
  };

  useEffect(() => { getQuiz(); }, []);

  const handleNextPress=() => {
    setQuestionNumber(questionNumber + 1)
    setOptions(generateOptionsAndShuffle(questions[questionNumber + 1]))
  }

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers]
    options.push(_question.correct_answer)
    shuffleArray(options)
    return(options)
  }

  const handleSelectedOption = (_option) => {
    if(_option === questions[questionNumber].correct_answer) {
      setScore(score + 10)
      console.log(score);
    }
    if(questionNumber !== 9) {
      setQuestionNumber(questionNumber + 1)
      setOptions(generateOptionsAndShuffle(questions[questionNumber + 1]))
    }
  }

  return (
    <View style={styles.container}>
      {questions && (

      <View style={styles.parent}>
      <View style={styles.top}>
        <Text style={styles.question}>Q. {decodeURIComponent(questions[questionNumber].question)}</Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.optionsButton} onPress={() => handleSelectedOption(options[0])}>
          <Text style={styles.optionsText}>{decodeURIComponent(options[0])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionsButton} onPress={() => handleSelectedOption(options[1])}>
          <Text style={styles.optionsText}>{decodeURIComponent(options[1])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionsButton} onPress={() => handleSelectedOption(options[2])}>
          <Text style={styles.optionsText}>{decodeURIComponent(options[2])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionsButton} onPress={() => handleSelectedOption(options[3])}>
          <Text style={styles.optionsText}>{decodeURIComponent(options[3])}</Text>
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