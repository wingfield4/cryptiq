import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewUser from './NewUser';
import UserCreationOptions from './UserCreationOptions';

import NavigationContainer from '../../components/common/NavigationContainer';

const NewUserStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserCreationOptions"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="UserCreationOptions"
          component={UserCreationOptions}
        />

        <Stack.Screen
          name="NewUser"
          component={NewUser}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NewUserStack;

const Stack = createNativeStackNavigator();
