/* eslint-disable prettier/prettier */

// notes
// fungsi: buat text dengan uk, warna, dan berat yang reusable

import React from 'react';
import {StyleSheet, Text as BaseText, TextStyle} from 'react-native';

export type TextProps = {
  // props (parameter) untuk komponen
  label: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  weight?: 'normal' | 'bold';
  alignment?: 'left' | 'center' | 'right';
};

const Text: React.FC<TextProps> = ({
  // komponen utama dengan props
  label,
  size = 'md',
  color = 'black',
  weight = 'normal',
  alignment = 'left',
}) => {
  const fontSize =
    size === 'sm'
      ? 12
      : size === 'md'
      ? 16
      : size === 'lg'
      ? 18
      : size === 'xl'
      ? 24
      : 16;

  const dynamicStyle: TextStyle = {
    fontSize,
    color,
    fontWeight: weight,
    textAlign: alignment,
  };

  return <BaseText style={[styles.base, dynamicStyle]}>{label}</BaseText>;
};

export default Text;

const styles = StyleSheet.create({
  base: {},
});
