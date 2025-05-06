/* eslint-disable prettier/prettier */

// notes
// fungsi: tampilkan akun yang ada di hal. chooseAccount untuk logIn

import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
} from 'react-native';
import {profile} from '../../../../src/assets';
import Text from '../../../../components/ATOM/Text';

interface AccountItemProps {
  // props (parameter) untuk komponen
  username: string;
  email: string;
  onPress: (event: GestureResponderEvent) => void;
}

const AccountItem: React.FC<AccountItemProps> = (
  {username, email, onPress}, // komponen utama dengan props
) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.container}
    activeOpacity={0.7}>
    <Image source={profile} style={styles.image} />
    <View style={styles.textContainer}>
      <Text
        label={username}
        size="md"
        color="#000"
        weight="bold"
        alignment="left"
      />
      <Text
        label={email}
        size="sm"
        color="#666"
        weight="normal"
        alignment="left"
      />
    </View>
  </TouchableOpacity>
);

export default AccountItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  image: {
    width: 64,
    height: 64,
    marginRight: 12,
    borderRadius: 32,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
