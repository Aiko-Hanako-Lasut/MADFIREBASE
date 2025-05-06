/* eslint-disable prettier/prettier */

// notes
// fungsi: buat button yang reusable

import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../Text';

type ButtonProps = {
  // props (parameter) untuk komponen
  label: string;
  handleOnPress: () => void;
  textColor?: string;
  bgColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  alignment?: 'left' | 'center' | 'right';
  weight?: 'normal' | 'bold';
  disabled?: boolean;
  text: string;
};

const Button: React.FC<ButtonProps> = ({
  // komponen utama dengan props
  label,
  handleOnPress,
  textColor = 'white',
  bgColor = 'grey',
  size = 'md',
  alignment = 'center',
  weight = 'normal',
  disabled = false,
}) => (
  <TouchableOpacity
    style={[styles.button, {backgroundColor: bgColor}]}
    activeOpacity={0.7}
    onPress={handleOnPress}
    disabled={disabled}>
    <Text
      label={label}
      size={size}
      color={textColor}
      alignment={alignment}
      weight={weight}
    />
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    height: 45,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
