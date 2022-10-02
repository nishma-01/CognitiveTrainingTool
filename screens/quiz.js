import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal, ActivityIndicator, Animated, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from "../utils/colors";

//moder fisher-yates shuffle function src: https://en.wikipedia.org/wiki/Fisher–Yates_shuffle#The_modern_algorithm
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
  const [score, setScore] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const getQuiz = async() => {
    setIsLoading(true)
    const url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple&encode=url3986';
    const response = await fetch(url);
    const data = await response.json();
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
      console.log(score)
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
    navigation.navigate('Results', { //have to ensure this is in the results screen too to pass score to results screen
    score: score
    })
  }

  // Progress bar - not fully implemented but since it's a 'could have' feature, have left for now, would return to if have time or future iterations
  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%','100%']
  })
  const renderProgressBar = () => {
    return (
      <View style={{
        width: '100%',
        height: 20,
        borderRadius: 20,
        backgroundColor: colors.salmonPink,
      }}>
        <Animated.View style={[{
          height: 20,
          borderRadius: 20,
          backgroundColor: colors.darkBlue,
        },
        {
          width: progressAnim
        }]}>
        </Animated.View>
    </View>
    )}

  return (
    <View style={styles.container}>

      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.container}>
            <AntDesign
              name="closecircle" 
              size={35} 
              color={colors.salmonPink} 
              style={styles.modalToggle}
              onPress={() => setModalOpen(false)}
            />

            <ScrollView>
            <View style={styles.modalSectionContainer}>
              <Text style={styles.modalSectionHeader}>Instructions:</Text>
              <Text style={styles.modalSectionMain}>
                This quiz presents 10 general knowledge questions. Read the question and tap your answer. 
                {"\n\n"}If you are stuck, tap the 'SKIP' button to move to the next question. 
                {"\n\n"}Your results will automatically display after you answer or skip the last question.
                </Text>
            </View>

            <View style={styles.modalSectionContainer}>
              <Text style={styles.modalSectionHeader}>Scoring:</Text>
              <Text style={styles.modalSectionMain}>
              Each correct answer scores you 10 points. A wrong answer or skipped question scores 0 points. 
              {"\n\n"}Your results are displayed at the end of the quiz and depending on your score, you will recieve a classification for your achievement level - try to beat this next time!
              </Text>
            </View>

            <View style={styles.modalSectionContainer}>
              <Text style={styles.modalSectionHeader}>Benefits:</Text>
              <Text style={styles.modalSectionMain}>
              Studies have shown that practicing quizzes improve memory, recall and cognition overall. 
              {"\n\n"}Evidence suggests that training memory results in 'transfer effects', meaning it improves other areas of cognition as a secondary effect. 
              {"\n\n"}Hence, training for a short time each day may improve memory, attention, processing speed and other areas of cognition too, with a hope to reduce cognitive decline.
              </Text>
            </View>
            </ScrollView>
        </View>
      </Modal>

        <AntDesign
              name="questioncircle" 
              size={35} 
              color={colors.salmonPink} 
              style={styles.modalToggle}
              onPress={() => setModalOpen(true)}
            />

      {isLoading ? 
          <View style={styles.loader}>
            <ActivityIndicator
              size={"large"}
              animating={true}
            />
            <Text style={styles.loaderText}>LOADING...</Text>
          </View> 
      : questions && (

      <View style={styles.parent}>
      <View style={styles.top}>

      <View style={styles.questionNumContainer}>
        <Text style={styles.questionNumber}>Q: {questionNumber+1}/10</Text>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.question}>{decodeURIComponent(questions[questionNumber].question)}</Text>
      </View>
      </View>

      { renderProgressBar() }

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
          <Text style={styles.buttonText}>SKIP TO RESULTS</Text>
        </TouchableOpacity> }

        <TouchableOpacity 
      onPress={() => navigation.navigate("Home")}
      style={styles.button}>
        <Text style={styles.buttonText}>RETURN HOME</Text>
      </TouchableOpacity>
      </View>
      </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
container: {
  backgroundColor: colors.backgroundColor,
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
  backgroundColor: colors.darkBlue,
  padding: 12,
  // paddingHorizontal: 20,
  borderRadius: 16,
  alignSelf: 'center',
  marginBottom: 100,
},
buttonText: {
  fontSize: 16,
  fontWeight: '500',
  color: colors.white,
},
questionNumContainer: {
  paddingHorizontal: 12,
},
questionContainer: {
  // paddingVertical: 16,
  marginVertical: 16,
  paddingHorizontal: 12,
},
question: {
  fontSize: 22,
  fontWeight: '500',
},
questionNumber: {
  fontSize: 20,
  fontWeight: '800'
},
optionsText: {
  fontSize: 18,
  fontWeight:'600',
  color: colors.white,
},
optionsButton: {
  paddingVertical: 16,
  marginVertical: 10,
  backgroundColor: colors.lightBlue,
  paddingHorizontal: 12,
  borderRadius: 12,
},
parent: {
  height: '100%',
},
modalToggle: {
  paddingTop: 30,
  paddingBottom: 20,
  alignSelf: 'center',
},
modalSectionContainer: {
  paddingVertical: 6,
  marginVertical: 8,
  borderColor: colors.lightBlue,
  borderWidth: 4,  
  paddingHorizontal: 12,
  borderRadius: 12,
},
modalSectionHeader: {
  fontSize: 24,
    fontWeight: '600',
    color: colors.salmonPink,
},
modalSectionMain: {
  textAlign: 'justify',
  fontSize: 16,
},
loader: {
  paddingTop: 100,
  alignSelf: 'center',
},
loaderText: {
  fontSize: 40,
  fontWeight: '500',
  color: colors.darkBlue,
  alignContent: 'center',
},
});