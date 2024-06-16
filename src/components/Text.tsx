import React from 'react';
import {Text as RNText} from 'react-native';
import type {TextProps as RNTextProps} from 'react-native';
import type {Component} from '../Types';

interface TextProps extends RNTextProps {}

const Text: Component<TextProps> = ({children, ...props}) => {
  return <RNText {...props}>{children}</RNText>;
};

export default Text;
