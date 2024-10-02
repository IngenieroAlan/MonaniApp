import React from 'react';

import { Navigator } from './src/navigation/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

export const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Navigator />
      </PaperProvider>
    </NavigationContainer>
  );
};
