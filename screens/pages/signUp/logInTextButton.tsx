/* eslint-disable prettier/prettier */

// notes
// fungsi: tampilkan teks "Already have an account?" dan tombol "Log In"

import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Text from '../../../components/ATOM/Text';

interface LogInTextButtonProps {
  // props (parameter) untuk komponen
  onLogInPress: () => void;
}

const LogInTextButton: React.FC<LogInTextButtonProps> = (
  {onLogInPress}, // komponen utama dengan props
) => (
  <View style={styles.container}>
    <Text label="Already have an account?" size="sm" weight="bold" />
    <TouchableOpacity onPress={onLogInPress}>
      <Text label="Log In" color="#007BFF" size="sm" />
    </TouchableOpacity>
  </View>
);

export default LogInTextButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
});
