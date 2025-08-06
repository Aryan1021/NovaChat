import { CometChat } from '@cometchat-pro/chat';
import { COMETCHAT_AUTH_KEY } from '@env';

export const loginWithCometChat = async (uid: string) => {
  try {
    const user = await CometChat.login(uid, COMETCHAT_AUTH_KEY);
    console.log('Login successful:', user);
    return user;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
