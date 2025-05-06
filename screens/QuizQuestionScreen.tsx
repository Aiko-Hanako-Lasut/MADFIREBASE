/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';

const QuizQuestionScreen = () => {
  return (
    <ImageBackground
      source={require('../src/assets/background.png')}
      style={styles.background}
      resizeMode="cover">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Header */}
      <View style={styles.logoImage}>
        <Image
          source={require('../src/assets/calico-header.png')}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>Time remaining</Text>
        <View style={styles.timerBox}>
          <Text style={styles.timerIcon}>⏱</Text>
          <Text style={styles.timerValue}>05 : 00</Text>
        </View>
      </View>

      {/* Quiz Title & Question Info */}
      <View style={styles.infoBox}>
        <Text style={styles.quizInfoText}>Finding Nemo (2003)</Text>
        <Text style={styles.questionNumber}> Total questions 1/2</Text>
      </View>

      {/* Question */}
      <View style={styles.questionBox}>
        <Text style={styles.questionText}>Who is the lost fish?</Text>
      </View>

      {/* Image */}
      <Image
        source={require('../assets/Nemo.jpg')}
        style={styles.questionImage}
        resizeMode="contain"
      />

      {/* Answer Options */}
      <View style={styles.optionsContainer}>
        {['Nomo', 'Nemo', 'Nome', 'Nimo'].map((text, index) => (
          <TouchableOpacity key={index} style={styles.optionButton}>
            <Text style={styles.optionLabel}>
              {String.fromCharCode(65 + index)}
            </Text>
            <Text style={styles.optionText}>{text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#F5A623',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  logoImage: {
    width: '100%',
    height: 80,
    resizeMode: 'stretch',
  },
  timerContainer: {
    alignItems: 'flex-end',
  },
  timerText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '600',
  },
  timerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5A623',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    marginTop: 4,
  },
  timerIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  timerValue: {
    color: '#fff',
    fontWeight: 'bold',
  },
  infoBox: {
    marginTop: 20,
    alignItems: 'center',
  },
  quizInfoText: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
  },
  questionNumber: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  questionBox: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 15,
    borderWidth: 1,
    alignSelf: 'center',
  },
  questionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  questionImage: {
    width: 200,
    height: 150,
    alignSelf: 'center',
    marginVertical: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    paddingHorizontal: 20,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    margin: 6,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    minWidth: '40%',
  },
  optionLabel: {
    backgroundColor: '#F5A623',
    color: '#fff',
    fontWeight: 'bold',
    width: 25,
    height: 25,
    textAlign: 'center',
    borderRadius: 5,
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuizQuestionScreen;
