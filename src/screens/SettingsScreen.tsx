import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from '@components';
import type {MainStackScreenProps} from '@navigation';
import type {Component} from '@types';

const SettingsScreen: Component<MainStackScreenProps<'Settings'>> = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Settings!</Text>
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

export default SettingsScreen;
