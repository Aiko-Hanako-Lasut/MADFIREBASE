/* eslint-disable prettier/prettier */

// notes
// fungsi: buat header khusus hal. signUp dan logIn

import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {calicoHeader} from '../../../src/assets';

interface HeaderProps {
  // props (parameter) untuk komponen
  onSavePress?: () => void;
  onExitPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({}) => {
  // komponen utama dengan props
  return (
    <View style={styles.container}>
      <ImageBackground source={calicoHeader} style={styles.background} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
  },
  background: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 16,
  },
});
