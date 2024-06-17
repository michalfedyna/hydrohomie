import React from 'react';
import {MainView} from '@views';
import type {Component} from '@types';
import type {MainStackScreenProps} from '@navigation';

const MainScreen: Component<MainStackScreenProps<'Main'>> = ({navigation}) => {
  const onNavigate = () => {
    navigation.navigate('Settings');
  };

  return <MainView onNavigate={onNavigate} />;
};

export default MainScreen;
