import React from 'react';
import {Text, View} from '@components';
import type {Screen} from '@types';
import type {MainStackScreenProps} from '@navigation';

const SettingsScreen: Screen<MainStackScreenProps<'Settings'>> = () => {
  return (
    <View>
      <Text>Hello Settings!</Text>
    </View>
  );
};

export default SettingsScreen;
