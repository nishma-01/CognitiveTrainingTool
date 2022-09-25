import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from "react-native/Libraries/NewAppScreen";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i-- ) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({navigation}) => {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [questions, setQuestions] = useState();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);


  const getQuiz = async() => {
    setIsLoading(true)
    const url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]))
    setIsLoading(false)
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
    if(questionNumber === 9) {
      handleShowResult()
    }
    
  }

  const handleShowResult = () => {
    navigation.navigate('Results', { //have to ensure this is in the results screen too
    score: score
    })
  }

  return (
    <View style={styles.container}>

      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.container}>
            <AntDesign
              name="closecircle" 
              size={30} 
              color="#F07167" 
              style={styles.modalToggle}
              onPress={() => setModalOpen(false)}
            />
          <Text style={styles.modalText}>
            {`INSTRUCTIONS: \nThis quiz presents 10 general knowledge questions. Read the question and select the answer you think is correct.
            \nIf you are stuck you may press the 'SKIP' button on the bottom left of the screen to skip the question. 
            \nAfter you have selected an answer, the question will automatically move on to the next. Once all questions have been answered, your results will automatically pop up.
            \nRESULTS: \nFor each correct answer you will score 10 points. Each wrong answer or skipped question will score 0 points. 
            \nYour results are displayed at the end of the quiz and depending on your score, you will recieve a classification for your achievement level - try to beat this next time!
            \nBENEFITS: \nStudies have shown that practicing quizzes improve memory, recall and ultimately cognition overall. 
            \nImproving memory has been shown to result in 'transfer effects', meaning it in turn improves other area of cognition as a secondary effect. Hence, training for a short time each day may improve these areas of cognition too.
          `}</Text>
        </View>
      </Modal>

        <AntDesign
              name="questioncircle" 
              size={30} 
              color="#F07167" 
              style={styles.modalToggle}
              onPress={() => setModalOpen(true)}
            />

      {isLoading ? 
          <View style={styles.loader}>
            <ActivityIndicator
              size={100}
              animating={true}
              color={Colors.blue300}
            />
            <Text style={styles.loaderText}>LOADING...</Text>
          </View> 
      : questions && (

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
        

        {questionNumber !== 9 && <TouchableOpacity 
          style={styles.button}
          onPress = {handleNextPress}>
          <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity> }

        {questionNumber === 9 && <TouchableOpacity 
          style={styles.button}
          onPress = {handleShowResult}>
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
  backgroundColor: '#F8EDEB',
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
  alignSelf: 'center',
  marginBottom: 70,
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
modalToggle: {
  paddingTop: 30,
  alignSelf: 'center',
},
modalText: {
  textAlign: 'justify',
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