import React from 'react';
import {TouchableOpacity} from 'react-native';
import type {Component} from '@types';
import Text from './Text';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: Component<ButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
