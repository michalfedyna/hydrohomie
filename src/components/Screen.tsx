import React from 'react';
import type {ComponentWithChildren} from '@types';
import View from './View';

const Screen: ComponentWithChildren = ({children}) => {
  return <View>{children}</View>;
};

export default Screen;
