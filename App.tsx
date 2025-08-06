import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import StackNavigator from './src/config/navigation/StackNavigator';
import { initCometChat } from './src/config/services/cometchat-service';

const App = () => {
  useEffect(() => {
    // Initialize CometChat when the app loads
    initCometChat();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StackNavigator />
    </GestureHandlerRootView>
  );
};

export default App;
