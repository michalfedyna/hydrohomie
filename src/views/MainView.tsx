import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {Text, View} from '@components';
import type {Component} from '@types';

interface MainViewProps {
  onNavigate: () => void;
}

const MainView: Component<MainViewProps> = ({onNavigate}) => {
  return (
    <View style={styles.container}>
      <Text>Hello Main!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainView;
