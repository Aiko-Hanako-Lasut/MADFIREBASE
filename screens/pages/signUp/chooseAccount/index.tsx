/* eslint-disable prettier/prettier */

// notes
// fungsi: tampilkan hal. chooseAccount untuk signUp

import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {back, background, profile} from '../../../../src/assets';
import Header from '../../../../components/MOLEKUL/Headersyeela/headerSignUpLogIn';
import Text from '../../../../components/ATOM/Text';
import COLORS from '../../../../src/constants';
import LogInTextButton from '../logInTextButton';

interface SignUpChooseAccountProps {
  // props (parameter) untuk komponen
  navigation: NavigationProp<any>;
}

const SignUpChooseAccount: React.FC<SignUpChooseAccountProps> = ({
  navigation,
}) => {
  // komponen utama dengan props
  const onAccountPress = () => navigation.navigate('createQuiz');
  const onBackPress = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Header />

      <ImageBackground source={background} style={styles.background}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={onBackPress} activeOpacity={0.7}>
            <Image source={back} />
          </TouchableOpacity>
          <Text label="Sign Up" alignment="center" weight="bold" size="xl" />
          <TouchableOpacity style={styles.hiddenButton} disabled>
            <Image source={back} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text label="Choose an account" size="md" weight="bold" />

          <ScrollView style={styles.accountList}>
            {[...new Array(1)].map((_, index) => (
              <TouchableOpacity
                key={index}
                onPress={onAccountPress}
                style={styles.accountItem}
                activeOpacity={0.7}>
                <Image source={profile} style={styles.profileImage} />
                <View style={styles.profileText}>
                  <Text label="Syeela Tes" size="md" />
                  <Text label="syeelates@gmail.com" size="sm" />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <LogInTextButton onLogInPress={() => navigation.navigate('logIn')} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUpChooseAccount;

const styles = StyleSheet.create({
  container: {flex: 1},
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    gap: 32,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hiddenButton: {opacity: 0},
  content: {
    backgroundColor: COLORS.primary,
    width: 288,
    padding: 16,
    gap: 16,
    maxHeight: '80%',
  },
  accountList: {columnGap: 16, gap: 16, rowGap: 16},
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEFEFE',
    padding: 4,
    borderRadius: 8,
    marginBottom: 8,
  },
  profileImage: {width: 59, height: 61, marginRight: 8, borderRadius: 8},
  profileText: {flex: 1, justifyContent: 'center'},
});
