import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from 'src/navigation/Routes';
import {AppContextProvider} from 'src/context/AppContext';

export default function App() {
  return (
    <NavigationContainer>
      <AppContextProvider>
        <Routes />
      </AppContextProvider>
    </NavigationContainer>
  );
}
