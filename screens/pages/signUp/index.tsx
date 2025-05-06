/* eslint-disable prettier/prettier */

// notes
// fungsi: tampilkan halaman signUp

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';

import {NavigationProp} from '@react-navigation/native';
import {background, google} from '../../../src/assets';
import LogInTextButton from './logInTextButton';
import TextInputSignup from './textInputSignUp';
import Header from '../../../components/MOLEKUL/Headersyeela/headerSignUpLogIn';
import Text from '../../../components/ATOM/Text';
import Button from '../../../components/ATOM/buttonsyeela';
import COLORS from '../../../src/constants';

const MAX_TEXT_INPUT_LENGTH = 50;

interface SignUpProps {
  // props (parameter) untuk komponen
  navigation: NavigationProp<any>;
}

const SignUp: React.FC<SignUpProps> = ({navigation}) => {
  // komponen utama dengan props
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [usernameOrEmailErr, setUsernameOrEmailErr] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const onUsernameChange = (value: string) => {
    setUsernameOrEmail(value);
    setUsernameOrEmailErr('');
  };

  const onPasswordChange = (value: string) => {
    setPassword(value);
    setPasswordErr('');
  };

  const onSignUpPress = () => {
    let valid = true;
    if (!usernameOrEmail.trim()) {
      setUsernameOrEmailErr('Please enter your username or email');
      valid = false;
    }
    if (!password) {
      setPasswordErr('Please enter your password');
      valid = false;
    }
    if (valid) {
      navigation.navigate('chooseAccountType');
    }
  };

  const onGooglePress = () => {
    navigation.navigate('chooseAccount');
  };

  return (
    <View style={styles.container}>
      <Header />

      <ImageBackground
        source={background}
        style={styles.background}
        resizeMode="cover">
        <Text label="Sign Up" alignment="center" weight="bold" size="xl" />

        <View style={styles.card}>
          <TextInputSignup
            label="Username or email"
            value={usernameOrEmail}
            onChangeText={onUsernameChange}
            errorMessage={usernameOrEmailErr}
            maxLength={MAX_TEXT_INPUT_LENGTH}
          />

          <TextInputSignup
            label="Password"
            value={password}
            onChangeText={onPasswordChange}
            errorMessage={passwordErr}
            isSecureTextEntry
            maxLength={MAX_TEXT_INPUT_LENGTH}
          />

          <Button
            label="Sign Up"
            text="Sign Up"
            bgColor="#28A745"
            weight="bold"
            handleOnPress={onSignUpPress}
          />

          <View style={styles.separatorRow}>
            <View style={styles.separatorLine} />
            <Text label="or" />
            <View style={styles.separatorLine} />
          </View>

          <TouchableOpacity style={styles.googleButton} onPress={onGooglePress}>
            <Image source={google} style={styles.googleIcon} />
            <Text
              label="Continue with Google"
              weight="bold"
              alignment="center"
              color="white"
            />
          </TouchableOpacity>

          <LogInTextButton onLogInPress={() => navigation.navigate('logIn')} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {flex: 1},
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    gap: 32,
  },
  card: {
    backgroundColor: COLORS.primary,
    width: 288,
    height: 500,
    padding: 16,
    gap: 16,
  },
  separatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  separatorLine: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: COLORS.border,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#DB4437',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    height: 45,
    width: 260,
    marginVertical: 12,
  },
  googleIcon: {
    width: 24,
    height: 24,
  },
});
