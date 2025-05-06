/* eslint-disable prettier/prettier */

// notes
// fungsi: buat text input yang reusable

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../../components/ATOM/Text';
import BaseTextInput from '../../../components/ATOM/TextInput';

interface TextInputSignupProps {
  // props (parameter) untuk komponen
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  errorMessage?: string;
  isSecureTextEntry?: boolean;
  maxLength?: number;
}

const TextInputSignup: React.FC<TextInputSignupProps> = ({
  // komponen utama dengan props
  label,
  value,
  onChangeText,
  errorMessage,
  isSecureTextEntry = false,
  maxLength,
}) => {
  return (
    <View style={styles.container}>
      <Text label={label} />
      <BaseTextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecureTextEntry}
        maxLength={maxLength}
      />
      {errorMessage ? (
        <Text label={errorMessage} color="red" size="sm" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
});

export default TextInputSignup;
