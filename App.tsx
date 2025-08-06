import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { initCometChat } from './src/config/services/cometchat-service';
import StackNavigator from './src/config/navigation/StackNavigator';

const App = () => {
  useEffect(() => {
    const initialize = async () => {
      await initCometChat();
    };
    initialize();
  }, []);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
