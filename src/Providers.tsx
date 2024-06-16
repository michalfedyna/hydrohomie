import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import type {Component, ComponentWithChildren} from '@types';

const Providers: ComponentWithChildren = ({children}) => {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
};

export function withProviders(WrappedComponent: Component) {
  return () => (
    <Providers>
      <WrappedComponent />
    </Providers>
  );
}
