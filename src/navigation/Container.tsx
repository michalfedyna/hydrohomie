import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import type {Component} from '@types';
import Main from './Main';

const Container: Component = () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};

export default Container;
