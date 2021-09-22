import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { connect } from 'react-redux';

import Account from './Account';
import BackButton from '../components/common/BackButton';
import ConversationsStack from './ConversationsStack';
import Icon from '../components/common/Icon';
import Privacy from './Privacy';
import Settings from './Settings';

const Screens = ({ colorMode, colors }) => {
  const theme = {
    ...DefaultTheme,
    dark: colorMode === 'dark',
    colors: {
      primary: colors.accent1,
      background: colors.pageBackground,
      card: colors.header,
      text: colors.text,
      border: colors.border,
      notification: colors.accent3
    }
  };

  return (
    <NavigationContainer
      theme={theme}
    >
      <Tab.Navigator
        initialRouteName="Conversations"
        backBehavior="none"
        screenOptions={{
          headerTitleStyle: {
            //fontFamily: 'Source Sans Pro',
          }
        }}
      >

        <Tab.Screen
          name="Conversations"
          component={ConversationsStack}
          options={({ navigation, route }) => ({
            tabBarIcon: ({ focused, size }) => (
              <Icon 
                name="message-text" 
                size={size} 
                color={focused ? colors.accent1 : colors.captionText} 
              />
            )
          })}
        />

        <Tab.Screen
          name="Privacy"
          component={Privacy}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <Icon 
                name="eye-off" 
                size={size} 
                color={focused ? colors.accent1 : colors.captionText} 
              />
            )
          }}
        />

        <Tab.Screen
          name="My Account"
          component={Account}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <Icon 
                name="account-circle" 
                size={size} 
                color={focused ? colors.accent1 : colors.captionText} 
              />
            )
          }}
        />

        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <Icon 
                name="cog" 
                size={size} 
                color={focused ? colors.accent1 : colors.captionText} 
              />
            )
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default connect(state => ({
  colorMode: state.colorMode,
  colors: state.colors
}))(Screens);

const Tab = createBottomTabNavigator();
