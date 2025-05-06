/* eslint-disable prettier/prettier */

// notes
// fungsi: tampilkan halaman logIn

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {background, google} from '../../../src/assets/index';
import Header from '../../../components/MOLEKUL/Headersyeela/headerSignUpLogIn';
import Text from '../../../components/ATOM/Text';
import Button from '../../../components/ATOM/buttonsyeela';
import SignUpTextButton from './signUpTextButton';
import TextInputLogin from './textInputLogin';
import COLORS from '../../../src/constants';

interface LogInProps {
  // props (parameter) untuk komponen
  navigation: NavigationProp<any>;
}

const MAX_TEXT_INPUT_LENGTH = 50;

const LogIn: React.FC<LogInProps> = ({navigation}) => {
  // komponen utama dengan props
  const [usernameOrEmail, setUsernameOrEmail] = useState<string>('');
  const [usernameOrEmailErrMsg, setUsernameOrEmailErrMsg] =
    useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordErrMsg, setPasswordErrMsg] = useState<string>('');

  const onUsernameOrEmailChange = (text: string) => {
    setUsernameOrEmail(text);
    setUsernameOrEmailErrMsg('');
  };

  const onPasswordChange = (text: string) => {
    setPassword(text);
    setPasswordErrMsg('');
  };

  const onLoginPress = () => {
    let valid = true;
    if (!usernameOrEmail) {
      setUsernameOrEmailErrMsg('Please enter your username or email');
      valid = false;
    }
    if (!password) {
      setPasswordErrMsg('Please enter your password');
      valid = false;
    }
    if (valid) {
      navigation.navigate('createQuiz');
    }
  };

  const onGooglePress = () => navigation.navigate('logInChooseAccount');

  return (
    <View style={styles.container}>
      <Header />

      <ImageBackground source={background} style={styles.background}>
        <Text label="Log In" alignment="center" weight="bold" size="xl" />

        <View style={styles.card}>
          <TextInputLogin
            label="Username or email"
            value={usernameOrEmail}
            onChangeText={onUsernameOrEmailChange}
            errorMessage={usernameOrEmailErrMsg}
            maxLength={MAX_TEXT_INPUT_LENGTH}
            placeholder="Enter your username or email"
          />
          <TextInputLogin
            label="Password"
            value={password}
            onChangeText={onPasswordChange}
            errorMessage={passwordErrMsg}
            secureTextEntry
            maxLength={MAX_TEXT_INPUT_LENGTH}
            placeholder="Enter your password"
          />

          <Button
            label="Log In"
            text="Log In"
            textColor="#white"
            bgColor="#55A630"
            weight="bold"
            handleOnPress={onLoginPress}
          />

          <View style={styles.separatorRow}>
            <View style={styles.separatorLine} />
            <Text label="or" />
            <View style={styles.separatorLine} />
          </View>

          <TouchableOpacity
            style={styles.googleButton}
            onPress={onGooglePress}
            activeOpacity={0.7}>
            <Image source={google} style={styles.googleIcon} />
            <Text
              label="Continue with Google"
              weight="bold"
              alignment="center"
              color="#FEFEFE"
            />
          </TouchableOpacity>

          <SignUpTextButton
            onSignUpPress={() => navigation.navigate('signUp')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LogIn;

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
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#DB4437',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 20,
    height: 45,
    width: 260,
    marginVertical: 12,
  },
  googleIcon: {
    width: 25,
    height: 24,
  },
});
