import { CometChat } from '@cometchat-pro/chat';
import { COMETCHAT_APP_ID, COMETCHAT_REGION } from '@env';

const appID = COMETCHAT_APP_ID;
const region = COMETCHAT_REGION;

const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .build();

export const initCometChat = async () => {
  try {
    await CometChat.init(appID, appSetting);
    console.log('CometChat initialized successfully');
  } catch (error) {
    console.error('CometChat initialization failed', error);
  }
};
