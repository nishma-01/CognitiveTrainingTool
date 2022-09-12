import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Results from '../screens/results';
import Tips from '../screens/tips';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={Home} 
      options={{headerShown: false}} />
      <Stack.Screen 
      name="Quiz" 
      component={Quiz}
      options={{headerShown: false}} />
      <Stack.Screen 
      name="Results" 
      component={Results} 
      options={{headerShown: false}}/>
       <Stack.Screen 
      name="Tips" 
      component={Tips} 
      options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default MyStack;