/* eslint-disable prettier/prettier */

// notes
// fungsi: tampilkan hal. mengupdate pertanyaan

import React, {FC} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';

import {back} from '../../src/assets';
import Button from '../../components/ATOM/buttonsyeela';
import Text from '../../components/ATOM/Text';
import CONSTANTS from '../../src/constants';
import {Question} from './index';

interface QuestionSideScreenProps {
  // props (parameter) untuk komponen
  type: 'Multiple Choice' | 'True/False';
  onTypeChange: (type: 'Multiple Choice' | 'True/False') => void;
  onBack: () => void;
  onDelete: () => void;
  questionList: Question[];
  handleDurationButtonOnPress: (duration: number) => void;
}
const QuestionSideScreen: FC<QuestionSideScreenProps> = ({
  // komponen utama dengan props
  type,
  onTypeChange,
  onBack,
  onDelete,
  questionList,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text label="Question type" />
        <Button
          label="Multiple Choice"
          text="Multiple Choice"
          bgColor={type === 'Multiple Choice' ? CONSTANTS.primary : '#FEFEFE'}
          textColor="#130E01"
          handleOnPress={() => onTypeChange('Multiple Choice')}
          size="sm"
        />
        <Button
          label="True/False"
          text="True/False"
          bgColor={type === 'True/False' ? CONSTANTS.primary : '#FEFEFE'}
          textColor="#130E01"
          handleOnPress={() => onTypeChange('True/False')}
          size="sm"
        />
      </View>

      <View style={styles.section}>
        <Text label="Duration" />
        <Button
          label="30 Seconds"
          text="30 Seconds"
          bgColor="#919191"
          disabled={true}
          handleOnPress={() => {}}
          size="sm"
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <Image source={back} />
        </TouchableOpacity>
        <Button
          label="Delete"
          text="Delete"
          bgColor={questionList.length === 1 ? 'grey' : '#D53838'}
          disabled={questionList.length === 1}
          handleOnPress={onDelete}
          size="sm"
        />
      </View>
    </View>
  );
};

export default QuestionSideScreen;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50%',
    height: '100%',
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    padding: 16,
    justifyContent: 'space-between',
    zIndex: 10,
  },
  section: {
    marginBottom: 24,
    gap: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backBtn: {
    padding: 8,
  },
});
