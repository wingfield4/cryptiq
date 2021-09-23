import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Conversation from './Conversation';
import Overview from './Overview';

const Screens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Overview"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Overview"
        component={Overview}
      />
      <Stack.Screen
        name="Conversation"
        component={Conversation}
      />
    </Stack.Navigator>
  )
}

export default Screens;

const Stack = createNativeStackNavigator();
