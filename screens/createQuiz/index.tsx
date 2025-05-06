/* eslint-disable prettier/prettier */

// notes
// fungsi: tampilkan hal. menambah pertanyaan

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {burger, background, picture} from '../../src/assets';
import HeaderCreateQuiz from '../../components/MOLEKUL/Headersyeela/headerCreateQuiz';
import TextInput from '../../components/ATOM/textInputsyeela';
import Button from '../../components/ATOM/buttonsyeela';
import Text from '../../components/ATOM/Text';
import CONSTANTS from '../../src/constants';
import AnswerItem from './answerItem';
import AnswerItemScreen from './answerItemScreen';
import QuestionSideScreen from './questionSideScreen';

export interface Question {
  title: string;
  question: string;
  imageUri: string;
  answerList: string[];
  correctAnswerIndex: number | null;
  type: 'Multiple Choice' | 'True/False';
  duration: number;
}

interface CreateQuizProps {
  navigation: NavigationProp<any>;
}

const DEFAULT_QUESTION: Question = {
  title: '',
  question: '',
  imageUri: '',
  answerList: ['', '', '', ''],
  correctAnswerIndex: null,
  type: 'Multiple Choice',
  duration: 30,
};

const CreateQuiz: React.FC<CreateQuizProps> = ({navigation}) => {
  const [questions, setQuestions] = useState<Question[]>([DEFAULT_QUESTION]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showSide, setShowSide] = useState<boolean>(false);
  const [answerIndex, setAnswerIndex] = useState<number | null>(null);

  const onSave = () => navigation.navigate('logIn');
  const onExit = () => navigation.navigate('logIn');

  const updateQuestion = (updates: Partial<Question>) => {
    setQuestions(prev =>
      prev.map((q, i) => (i === activeIndex ? {...q, ...updates} : q)),
    );
  };

  const onTitleChange = (text: string) => updateQuestion({title: text});
  const onQuestionChange = (text: string) => updateQuestion({question: text});
  const toggleSide = () => setShowSide(prev => !prev);
  const onTypeChange = (type: Question['type']) => updateQuestion({type});
  const onDurationChange = (duration: number) => updateQuestion({duration});

  const onDelete = () => {
    if (questions.length < 2) {
      return;
    }
    const newIndex = activeIndex > 0 ? activeIndex - 1 : 0;
    setQuestions(prev => prev.filter((_, i) => i !== activeIndex));
    setActiveIndex(newIndex);
    setShowSide(false);
  };

  const onAdd = () => setQuestions(prev => [...prev, DEFAULT_QUESTION]);
  const onAnswerPress = (idx: number) => setAnswerIndex(idx);

  const onAnswerControl = ({
    isSave,
    value,
    isCorrectAnswer,
  }: {
    isSave: boolean;
    value: string;
    isCorrectAnswer: boolean;
  }) => {
    if (!isSave || answerIndex === null) {
      setAnswerIndex(null);
      return;
    }
    setQuestions(prev =>
      prev.map((q, i) => {
        if (i !== activeIndex) {
          return q;
        }
        const answers = q.answerList.map((ans, ai) =>
          ai === answerIndex ? value : ans,
        );
        const correct = isCorrectAnswer ? answerIndex : q.correctAnswerIndex;
        return {...q, answerList: answers, correctAnswerIndex: correct};
      }),
    );
    setAnswerIndex(null);
  };

  return (
    <>
      <View style={styles.container}>
        <HeaderCreateQuiz onSavePress={onSave} onExitPress={onExit} />

        <ImageBackground source={background} style={styles.background}>
          <View style={styles.headerRow}>
            <TextInput
              style={styles.flex}
              value={questions[0].title}
              onChangeText={onTitleChange}
              placeholder="Enter your title..."
              hasBorder
            />
            <TouchableOpacity onPress={toggleSide} style={styles.burger}>
              <Image source={burger} />
            </TouchableOpacity>
          </View>

          <TextInput
            value={questions[activeIndex].question}
            onChangeText={onQuestionChange}
            placeholder="Type your question..."
            hasBorder
            style={styles.questionInput}
          />

          <TouchableOpacity style={styles.uploadBox}>
            <Image source={picture} style={styles.uploadIcon} />
            <Text label="Upload file" />
          </TouchableOpacity>

          <View style={styles.optionRow}>
            <AnswerItem
              option="A"
              label={questions[activeIndex].answerList[0] || 'Add answer...'}
              onPress={() => onAnswerPress(0)}
              isCorrectAnswer={questions[activeIndex].correctAnswerIndex === 0}
            />
            <AnswerItem
              option="B"
              label={questions[activeIndex].answerList[1] || 'Add answer...'}
              onPress={() => onAnswerPress(1)}
              isCorrectAnswer={questions[activeIndex].correctAnswerIndex === 1}
            />
          </View>
          {questions[activeIndex].type === 'Multiple Choice' && (
            <View style={{flexDirection: 'row', gap: 16}}>
              <AnswerItem
                option="C"
                label={questions[activeIndex].answerList[2] || 'Add answer...'}
                onPress={() => onAnswerPress(2)}
                isCorrectAnswer={
                  questions[activeIndex].correctAnswerIndex === 2
                }
              />
              <AnswerItem
                option="D"
                label={questions[activeIndex].answerList[3] || 'Add answer...'}
                onPress={() => onAnswerPress(3)}
                isCorrectAnswer={
                  questions[activeIndex].correctAnswerIndex === 3
                }
              />
            </View>
          )}
        </ImageBackground>

        <View style={styles.footer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {questions.map((_, idx) => (
              <View key={idx} style={styles.questionBtnWrapper}>
                <Button
                  label={`Question ${idx + 1}`}
                  text={`Question ${idx + 1}`}
                  handleOnPress={() => setActiveIndex(idx)}
                  textColor="black"
                  bgColor={idx === activeIndex ? '#FEFEFE' : '#D9D9D9'}
                  size="sm"
                />
              </View>
            ))}
          </ScrollView>

          <Button
            handleOnPress={onAdd}
            bgColor="#D9D9D9"
            textColor="black"
            label="Add"
            text="Add"
            size="sm"
          />
        </View>
      </View>

      {answerIndex !== null && (
        <AnswerItemScreen
          value={questions[activeIndex].answerList[answerIndex]}
          isCorrectAnswer={
            questions[activeIndex].correctAnswerIndex === answerIndex
          }
          onControlButtonsPress={onAnswerControl}
        />
      )}

      {showSide && (
        <QuestionSideScreen
          type={questions[activeIndex].type}
          onTypeChange={onTypeChange}
          onBack={() => setShowSide(false)}
          onDelete={onDelete}
          questionList={questions}
          handleDurationButtonOnPress={onDurationChange}
        />
      )}
    </>
  );
};

export default CreateQuiz;

const styles = StyleSheet.create({
  container: {flex: 1},
  background: {flex: 1, padding: 32},
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  flex: {flex: 1},
  burger: {marginLeft: 16},
  questionInput: {marginBottom: 16},
  uploadBox: {
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    padding: 32,
    marginVertical: 24,
  },
  uploadIcon: {width: 76, height: 71, marginBottom: 8},
  answers: {
    flexDirection: 'row',
    gap: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: CONSTANTS.primary,
    padding: 8,
  },
  questionBtnWrapper: {marginRight: 8},
  optionRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
});
