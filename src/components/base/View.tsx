import React from 'react';
import {View as RNView} from 'react-native';
import type {ViewProps as RNViewProps} from 'react-native';
import type {Component} from '../../Types';

interface ViewProps extends RNViewProps {}

const View: Component<ViewProps> = ({children, ...props}) => {
  return <RNView {...props}>{children}</RNView>;
};

export default View;
