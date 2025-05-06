/* eslint-disable prettier/prettier */

// notes
// fungsi: tampilkan akun yang ada di hal. chooseAccount untuk signUp

import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
} from 'react-native';
import {profile} from '../../../../src/assets';
import Text from '../../../../components/ATOM/Text';
import COLORS from '../../../../src/constants';

interface AccountItemProps {
  // props (parameter) untuk komponen
  label: string;
  onPress: (event: GestureResponderEvent) => void;
}

const AccountItem: React.FC<AccountItemProps> = (
  {label, onPress}, // komponen utama dengan props
) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.container}
    activeOpacity={0.7}>
    <Image source={profile} style={styles.image} />
    <Text
      label={label}
      size="lg"
      weight="bold"
      alignment="center"
      color="#fff"
    />
  </TouchableOpacity>
);

export default AccountItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  image: {
    width: 93,
    height: 97,
    marginBottom: 8,
  },
});
