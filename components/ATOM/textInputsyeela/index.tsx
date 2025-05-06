/* eslint-disable prettier/prettier */

// notes
// fungsi: buat text input yang reusable

import React from 'react';
import {
  StyleSheet,
  TextInput as BaseTextInput,
  TextInputProps as RNTextInputProps,
  StyleProp,
  TextStyle,
} from 'react-native';

export interface TextInputProps extends RNTextInputProps { // props (parameter) untuk komponen
  hasBorder?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ // komponen utama dengan props
  hasBorder = false,
  style,
  ...rest
}) => {
  const dynamicStyle: StyleProp<TextStyle> = {
    borderWidth: hasBorder ? 1 : 0,
  };

  return (
    <BaseTextInput
      {...rest}
      style={[styles.input, dynamicStyle, style]}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FEFEFE',
    paddingHorizontal: 16,
    paddingVertical: 4,
    fontSize: 16,
    height: 45,
  },
});
