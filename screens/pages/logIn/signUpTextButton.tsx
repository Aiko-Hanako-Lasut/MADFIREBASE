/* eslint-disable prettier/prettier */

// notes
// fungsi: tampilkan teks "Don't have an account?" dan tombol "Sign Up"

import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import Text from '../../../components/ATOM/Text';

interface SignUpTextButtonProps {
  // props (parameter) untuk komponen
  onSignUpPress: (event: GestureResponderEvent) => void;
}

const SignUpTextButton: React.FC<SignUpTextButtonProps> = (
  {onSignUpPress}, // komponen utama dengan props
) => (
  <View style={styles.container}>
    <Text label="Don't have an account?" size="sm" weight="bold" />
    <TouchableOpacity onPress={onSignUpPress} activeOpacity={0.7}>
      <Text label="Sign Up" color="#007BFF" size="sm" weight="bold" />
    </TouchableOpacity>
  </View>
);

export default SignUpTextButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
});
