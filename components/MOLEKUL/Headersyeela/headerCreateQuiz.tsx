/* eslint-disable prettier/prettier */

// notes
// fungsi: buat header khusus hal. createQuiz (krn ada tombol save dan exit)

import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {calicoHeader} from '../../../src/assets';
import Button from '../../ATOM/buttonsyeela';

interface HeaderProps {
  // props (parameter) untuk komponen
  onSavePress?: () => void;
  onExitPress?: () => void;
}

const HeaderCreateQuiz: React.FC<HeaderProps> = ({
  onSavePress,
  onExitPress,
}) => {
  // komponen utama dengan props
  return (
    <View style={styles.container}>
      <ImageBackground source={calicoHeader} style={styles.background}>
        <Button
          handleOnPress={onSavePress || (() => {})}
          label="Save"
          bgColor="#28A745"
          weight="bold"
          text="Save"
        />
        <Button
          handleOnPress={onExitPress || (() => {})}
          label="Exit"
          bgColor="#5A655D"
          weight="bold"
          text="Exit"
        />
      </ImageBackground>
    </View>
  );
};

export default HeaderCreateQuiz;

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
