// import React, { useEffect, useState } from "react";
// import { TouchableOpacity, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
// import { Colors } from "react-native/Libraries/NewAppScreen";

// const Tips = ({navigation}) => {
//   const [facts, setFacts] = useState();
//   const [factNumber, setFactNumber] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);

//   const getFacts = async() => {
//     setIsLoading(true) 
//     const url = 'https://opentdb.com/api.php?amount=10&category=17&type=multiple&encode=url3986';
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data.results[0]);
//     setFacts(data.results);
//     setIsLoading(false);
// };
// //isLoading set to true when data is being fetched so 'loading...' shows, then once data is fetched, isLoading is set to false again so removes 'loading...' off the screen

// useEffect(() => { getFacts(); }, []);

// const handleNextPress = () => {
//   setFactNumber(factNumber + 1)
// }

//   return (
//     <View style={styles.container}> 
//     {isLoading ? 
//       <View style={styles.loader}>
//           <ActivityIndicator
//               size={"large"}
//               animating={true}
//               color={Colors.blue300}
//             />
//         <Text style={styles.loaderText}>LOADING...</Text>
//       </View> 
//       : 
// facts && (
//   <View style={styles.parent}>
//       <View style={styles.top}>
//         <Text style={styles.fact}> {decodeURIComponent(facts[factNumber].question)}</Text> 
//         {/* //have to pass in the variable name as per CLG  */}
//       </View>
      
//       <View style={styles.bottom}>
//       <TouchableOpacity
//         onPress={() => {navigation.navigate("Home"); {handleNextPress}}}
//         //can pass 2 functions through onPress as above.
//         style={styles.button}>
//         <Text style={styles.buttonText}>RETURN HOME</Text>
//       </TouchableOpacity>
//       </View>
//       </View>
// )} 
// </View>
//   );
// };

// export default Tips;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#F8EDEB',
//     paddingTop: 60,
//     paddingHorizontal: 20,
//     height: '100%',
//   },
//   top: {
//     marginVertical: 16,
//   },
//   button: {
//     width: '100%',
//     backgroundColor: '#008DB8',
//     padding: 16,
//     borderRadius: 16,
//     alignItems: 'center',
//   },
//   buttonText: {
//     fontSize: 22,
//     fontWeight: '600',
//     color: '#FFFF',
//   },
//   fact: {
//     paddingBottom: 50,
//     fontSize: 24,
//   },
//   parent: {
//     height: '100%',
//   },
//   loader: {
//     paddingTop: 100,
//     alignSelf: "center",
//   },
//   loaderText: {
//     fontSize: 40,
//     fontWeight: '500',
//     color: '#008DB8',
//     alignContent: "center",
//   },
// });



import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const Tips = ({navigation}) => {
  
  let Facts = [
    {id: '001', name: 'Exercise improves mood, self-esteem, anxiety, and sleep which in turn improves cognition - try to do a 30 minute brisk walk today!'},
    {name: 'another tip'},
    {name: 'another tip'},
    {name: 'another tip'},
    ]; 

  return (
    <View style={styles.container}> 
      <View style={styles.parent}>
      <View style={styles.top}>
        <Text style={styles.fact}> FACTS! </Text> 

        {Facts.map((Fact, Index) => {
          return (
            <Text
            key={Index}
            style={styles.fact}>
              {Fact.name}
            </Text>
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


