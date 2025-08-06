import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { initCometChat } from './src/config/cometchat';

export default function App() {
  useEffect(() => {
    initCometChat();
  }, []);

  return (
    <View>
      <Text>NovaChat Initialized!</Text>
    </View>
  );
}
