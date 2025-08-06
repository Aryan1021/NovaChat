import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/config/navigation/StackNavigator';
import { CometChat } from '@cometchat-pro/chat';
import { COMETCHAT_APP_ID, COMETCHAT_REGION } from '@env';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(); // Ignore warnings for now

const App = () => {
  useEffect(() => {
    const appSetting = new CometChat.AppSettingsBuilder()
      .subscribePresenceForAllUsers()
      .setRegion(COMETCHAT_REGION)
      .build();

    CometChat.init(COMETCHAT_APP_ID, appSetting).then(
      () => console.log('CometChat initialized successfully'),
      (error) => console.error('CometChat initialization failed', error)
    );
  }, []);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;