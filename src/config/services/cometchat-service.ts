import { CometChat } from '@cometchat-pro/chat';
import { COMETCHAT_APP_ID, COMETCHAT_REGION, COMETCHAT_AUTH_KEY } from '@env';

let isInitialized = false;

export const initCometChat = async () => {
  if (isInitialized) return;
  const appSetting = new CometChat.AppSettingsBuilder()
    .subscribePresenceForAllUsers()
    .setRegion(COMETCHAT_REGION)
    .build();

  try {
    await CometChat.init(COMETCHAT_APP_ID, appSetting);
    console.log('✅ CometChat initialized');
    isInitialized = true;
  } catch (error) {
    console.error('❌ CometChat init failed', error);
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
