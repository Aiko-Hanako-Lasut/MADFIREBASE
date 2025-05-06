/* eslint-disable prettier/prettier */

// notes
// fungsi: tampilkan hal. chooseAccount untuk logIn

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
import Header from '../../../../components/MOLEKUL/Headersyeela/headerCreateQuiz';
import Text from '../../../../components/ATOM/Text';
import COLORS from '../../../../src/constants';
import SignUpTextButton from '../signUpTextButton';

interface LogInChooseAccountProps {
  // props (parameter) untuk komponen
  navigation: NavigationProp<any>;
}

const LogInChooseAccount: React.FC<LogInChooseAccountProps> = ({
  navigation,
}) => {
  // komponen utama dengan props
  const onAccountPress = () => navigation.navigate('createQuiz');
  const onBackPress = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Header />

      <ImageBackground source={background} style={styles.background}>
        <View style={styles.row}>
          <TouchableOpacity onPress={onBackPress} activeOpacity={0.7}>
            <Image source={back} />
          </TouchableOpacity>
          <Text label="Log In" alignment="center" weight="bold" size="lg" />
          <TouchableOpacity style={styles.hiddenButton} disabled>
            <Image source={back} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text label="Choose an account" size="md" />

          <ScrollView style={styles.accountList}>
            {[...new Array(1)].map((_, index) => (
              <TouchableOpacity
                key={index}
                onPress={onAccountPress}
                style={styles.accountItem}
                activeOpacity={0.7}>
                <Image source={profile} style={styles.profileImage} />
                <View style={styles.profileText}>
                  <Text label="Syeela Tes" size="md" color="#000" />
                  <Text label="syeelates@gmail.com" size="sm" color="#666" />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <SignUpTextButton
            onSignUpPress={() => navigation.navigate('signUp')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LogInChooseAccount;

const styles = StyleSheet.create({
  container: {flex: 1},
  background: {flex: 1, justifyContent: 'center', padding: 32, gap: 32},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hiddenButton: {opacity: 0},
  content: {
    backgroundColor: COLORS.primary,
    gap: 16,
    padding: 16,
    borderRadius: 16,
    maxHeight: '80%',
  },
  accountList: {columnGap: 16, gap: 16, rowGap: 16},
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  profileImage: {width: 64, height: 64, marginRight: 8, borderRadius: 32},
  profileText: {flex: 1, justifyContent: 'center'},
});
