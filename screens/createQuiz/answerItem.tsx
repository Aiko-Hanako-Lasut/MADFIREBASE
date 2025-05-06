/* eslint-disable prettier/prettier */

// notes
// fungsi: tampilkan item jawaban pada quiz

import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
} from 'react-native';
import {checklist} from '../../src/assets';
import COLORS from '../../src/constants';
import Text from '../../components/ATOM/Text';

interface AnswerItemProps {
  // props (parameter) untuk komponen
  option: string;
  label: string;
  onPress: (event: GestureResponderEvent) => void;
  isCorrectAnswer?: boolean;
}

const AnswerItem: React.FC<AnswerItemProps> = ({
  // komponen utama dengan props
  option,
  label,
  onPress,
  isCorrectAnswer = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.7}>
      <View style={styles.optionBox}>
        <Text
          label={option}
          size="md"
          color="white"
          weight="bold"
          alignment="center"
        />
      </View>

      <View style={styles.contentBox}>
        <View style={styles.labelBox}>
          <Text
            label={label}
            size="md"
            color="#333"
            weight="normal"
            alignment="left"
          />
        </View>
        {isCorrectAnswer && <Image source={checklist} style={styles.icon} />}
      </View>
    </TouchableOpacity>
  );
};

export default AnswerItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.primary,
    gap: 8,
  },
  optionBox: {
    backgroundColor: COLORS.primary,
    borderRightWidth: 1,
    borderRightColor: COLORS.primary,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FEFEFE',
    paddingHorizontal: 8,
    height: 45,
  },
  labelBox: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
});
