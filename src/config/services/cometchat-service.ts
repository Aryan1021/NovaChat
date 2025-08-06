import { CometChat } from '@cometchat-pro/chat';
import { COMETCHAT_APP_ID, COMETCHAT_REGION, COMETCHAT_AUTH_KEY } from '@env';

export const initCometChat = async () => {
  const appID = COMETCHAT_APP_ID;
  const region = COMETCHAT_REGION;

  const appSetting = new CometChat.AppSettingsBuilder()
    .subscribePresenceForAllUsers()
    .setRegion(region)
    .build();

  try {
    await CometChat.init(appID, appSetting);
    console.log('✅ CometChat initialized successfully');
  } catch (error) {
    console.error('❌ CometChat initialization failed', error);
  }
};

export const loginWithCometChat = async (uid: string) => {
  try {
    const user = await CometChat.login(uid, COMETCHAT_AUTH_KEY);
    console.log('✅ Login successful:', user);
    return user;
  } catch (error) {
    console.error('❌ Login failed:', error);
    throw error;
  }
};
