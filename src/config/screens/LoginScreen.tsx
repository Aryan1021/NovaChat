import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { loginWithCometChat } from '../services/cometchat-service';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [uid, setUid] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogin = async () => {
    try {
      await loginWithCometChat(uid);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Login Failed', 'Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to NovaChat</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default LoginScreen;
