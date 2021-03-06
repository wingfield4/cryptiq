import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Account from './Account';
import Contacts from './Contacts';
import ConversationsStack from './ConversationsStack';
import NavigationContainer from '../../components/common/NavigationContainer';
import NotificationManager from '../../components/managers/NotificationManager';
import Privacy from './Privacy';
import Settings from './Settings';

import ConnectionManager from '../../components/managers/ConnectionManager';
import Icon from '../../components/common/Icon';

const MainTabs = () => {
  return (
    <>
      <NavigationContainer>
        {/* managers for logged-in users */}
        {/* <ConnectionManager /> */}
        <NotificationManager />
        
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
              tabBarIcon: ({ color, size }) => (
                <Icon 
                  name="message-text" 
                  size={size} 
                  color={color} 
                />
              )
            })}
          />

          <Tab.Screen
            name="Contacts"
            component={Contacts}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon 
                  name="contacts" 
                  size={size} 
                  color={color} 
                />
              )
            }}
          />

          <Tab.Screen
            name="My Account"
            component={Account}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon 
                  name="account-circle" 
                  size={size} 
                  color={color} 
                />
              )
            }}
          />

          <Tab.Screen
            name="Privacy"
            component={Privacy}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon 
                  name="eye-off" 
                  size={size} 
                  color={color} 
                />
              )
            }}
          />

          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon 
                  name="cog" 
                  size={size} 
                  color={color} 
                />
              )
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

export default MainTabs;

const Tab = createBottomTabNavigator();
