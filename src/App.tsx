import React from 'react';
import {NavigationContainer} from '@navigation';
import {withProviders} from './Providers';

function App() {
  return <NavigationContainer />;
}

export default withProviders(App);
