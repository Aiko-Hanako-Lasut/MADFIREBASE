/* eslint-disable prettier/prettier */

// notes
// fungsi: buat text input yang reusable

import React from 'react';
import {
  StyleSheet,
  View,
  TextInputProps as RNTextInputProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import BaseTextInput from '../../../components/ATOM/TextInput';
import Text from '../../../components/ATOM/Text';

interface TextInputLoginProps extends RNTextInputProps {
  // props (parameter) untuk komponen
  label: string;
  errorMessage?: string;
}

const TextInputLogin: React.FC<TextInputLoginProps> = ({
  // komponen utama dengan props
  label,
  errorMessage,
  style,
  ...rest
}) => (
  <View style={styles.container}>
    <Text label={label} size="sm" weight="bold" alignment="left" />
    <BaseTextInput
      style={[styles.input, style as StyleProp<TextStyle>]}
      placeholderTextColor="#888"
      {...rest}
    />
    {errorMessage ? (
      <Text label={errorMessage} size="sm" color="red" alignment="left" />
    ) : null}
  </View>
);

export default TextInputLogin;

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  input: {
    backgroundColor: '#FEFEFE',
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 16,
    height: 45,
    borderRadius: 8,
  },
});
