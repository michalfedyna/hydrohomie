import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from '@components';
import type {Screen} from '@types';
import type {MainStackScreenProps} from '@navigation';

const MainScreen: Screen<MainStackScreenProps<'Main'>> = () => {
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

export default MainScreen;
