import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {Text, View} from '@components';
import type {Screen} from '@types';
import type {MainStackScreenProps} from '@navigation';

const MainScreen: Screen<MainStackScreenProps<'Main'>> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Hello Main!</Text>
      <Button
        title="Click Me!"
        onPress={() => {
          navigation.navigate('Settings');
        }}
      />
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
