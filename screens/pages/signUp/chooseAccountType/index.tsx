/* eslint-disable prettier/prettier */

// notes
// fungsi: tampilkan hal. chooseAccountType (ada Teacher dan Student)

import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {back, background} from '../../../../src/assets';
import Header from '../../../../components/MOLEKUL/Headersyeela/headerSignUpLogIn';
import Text from '../../../../components/ATOM/Text';
import AccountItem from './accountItem';

interface SignUpChooseAccountTypeProps {
  // props (parameter) untuk komponen
  navigation: NavigationProp<any>;
}

const SignUpChooseAccountType: React.FC<SignUpChooseAccountTypeProps> = ({
  navigation,
}) => {
  // komponen utama dengan props
  const onTeacherPress = () => navigation.navigate('createQuiz');
  const onStudentPress = () => navigation.navigate('createQuiz'); // untuk sementara ke createQuiz (nnti buah pas mo gabung)
  const onBackPress = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Header />
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => onBackPress()} activeOpacity={0.7}>
            <Image source={back} />
          </TouchableOpacity>
          <Text
            label="Choose your account type"
            alignment="center"
            weight="bold"
            size="xl"
          />
          <TouchableOpacity style={styles.hiddenButton} disabled>
            <Image source={back} />
          </TouchableOpacity>
        </View>

        <View style={styles.optionsRow}>
          <AccountItem label="Teacher" onPress={() => onTeacherPress()} />
          <AccountItem label="Student" onPress={() => onStudentPress()} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUpChooseAccountType;

const styles = StyleSheet.create({
  container: {flex: 1},
  background: {flex: 1, justifyContent: 'center', padding: 32, gap: 32},
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hiddenButton: {opacity: 0},
  optionsRow: {flexDirection: 'row', gap: 32},
});
