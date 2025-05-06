/* eslint-disable prettier/prettier */

// notes
// fungsi: tampilkan input text untuk jawaban

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput as RNTextInput,
  TouchableOpacity,
  Image,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {switchOff, switchOn} from '../../src/assets';
import Button from '../../components/ATOM/buttonsyeela';
import Text from '../../components/ATOM/Text';
import COLORS from '../../src/constants';

const MAX_TEXT_INPUT_LENGTH = 50;

export interface ControlButtonsPayload {
  // props (parameter) untuk komponen
  isSave: boolean;
  value: string;
  isCorrectAnswer: boolean;
}

interface AnswerItemScreenProps {
  value: string;
  isCorrectAnswer: boolean;
  onControlButtonsPress: (payload: ControlButtonsPayload) => void;
}

const AnswerItemScreen: React.FC<AnswerItemScreenProps> = ({
  // komponen utama dengan props
  value,
  isCorrectAnswer,
  onControlButtonsPress,
}) => {
  const [text, setText] = useState<string>(value);
  const [correct, setCorrect] = useState<boolean>(isCorrectAnswer);

  const handleTextChange: RNTextInputProps['onChangeText'] = newText => {
    if (newText.length <= MAX_TEXT_INPUT_LENGTH) {
      setText(newText);
    }
  };

  const toggleCorrect = () => setCorrect(prev => !prev);

  const handleCancel = () =>
    onControlButtonsPress({
      isSave: false,
      value: text,
      isCorrectAnswer: correct,
    });

  const handleSave = () =>
    onControlButtonsPress({
      isSave: true,
      value: text,
      isCorrectAnswer: correct,
    });

  return (
    <View style={styles.overlay}>
      <View style={styles.header}>
        <Text label="Enter answer" color="white" size="md" />
        <Text
          label={`${text.length} / ${MAX_TEXT_INPUT_LENGTH}`}
          color="white"
          size="md"
        />
      </View>

      <RNTextInput
        value={text}
        onChangeText={handleTextChange}
        multiline
        style={styles.textInput}
        placeholder="Type your answer here"
        placeholderTextColor="#888"
      />

      <View style={styles.switchContainer}>
        <Text label="Correct answer" size="md" />
        <TouchableOpacity onPress={toggleCorrect} activeOpacity={0.7}>
          <Image source={correct ? switchOn : switchOff} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <View style={styles.flex}>
          <Button
            handleOnPress={handleCancel}
            label="Cancel"
            bgColor="#919191"
            weight="bold"
            text="Cancel"
          />
        </View>
        <Button
          handleOnPress={handleSave}
          label="Save Answer"
          bgColor="#28A745"
          weight="bold"
          text="Save Answer"
        />
      </View>
    </View>
  );
};

export default AnswerItemScreen;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)', // 80% opacity (supaya bg gelap)
    padding: 32,
    justifyContent: 'center',
    gap: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: COLORS.primary,
    color: 'black',
    height: 167,
    fontSize: 16,
    textAlignVertical: 'top',
    padding: 8,
  },
  switchContainer: {
    backgroundColor: '#FEFEFE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 45,
    paddingHorizontal: 8,
  },
  icon: {
    width: 25,
    height: 25,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  flex: {
    flex: 1,
  },
});
