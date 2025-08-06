import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { loginWithCometChat } from '../services/cometchat-service';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: Props) => {
  const [uid, setUid] = useState('');

  const handleLogin = async () => {
    if (!uid) {
      Alert.alert('Error', 'Please enter your UID');
      return;
    }

    try {
      await loginWithCometChat(uid);
      navigation.navigate('Home'); // ✅ Assuming 'Home' is in your Stack Navigator
    } catch (error) {
      Alert.alert('Login Failed', (error as Error).message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter UID"
        value={uid}
        onChangeText={setUid}
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
