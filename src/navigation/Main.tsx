import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen, SettingsScreen} from '@screens';
import type {Component} from '@types';
import type {MainStackParamList} from './types';

const Stack = createNativeStackNavigator<MainStackParamList>();

const Main: Component = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default Main;
