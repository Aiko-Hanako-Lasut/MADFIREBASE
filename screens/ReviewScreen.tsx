/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from 'react-native';

const ReviewScreen = () => {
  return (
    <ImageBackground
      source={require('../src/assets/background.png')}
      style={styles.background}
      resizeMode="cover">
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../src/assets/LogoCalico.png')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.reviewText}>Review details</Text>

      {/* Title */}
      <Text style={styles.title}>Finding Nemo (2003)</Text>

      {/* Question 1 */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionNumber}>1. Who is the lost fish?</Text>
      </View>
      <View style={styles.answerBox}>
        <Text style={styles.answerText}>B</Text>
        <Text style={styles.answerValue}>Nemo</Text>
        <Text style={styles.checkMark}>✓</Text>
      </View>

      {/* Question 2 */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionNumber}>2. Her name is Dora.</Text>
      </View>
      <View style={styles.answerBox}>
        <Text style={styles.answerText}>B</Text>
        <Text style={styles.answerValue}>False</Text>
        <Text style={styles.checkMark}>✓</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
  },
  header: {
    backgroundColor: '#F5A623',
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  reviewText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#130E01',
    textAlign: 'center',
    marginTop: 8,
    marginLeft: 256,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 25,
    color: '#000',
  },
  questionContainer: {
    backgroundColor: '#f8b400',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  questionNumber: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
    fontWeight: '600',
  },
  answerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 9,
    borderRadius: 6,
  },
  answerText: {
    fontSize: 16,
    fontWeight: '700',
    marginRight: 10,
    color: 'black',
  },
  answerValue: {
    fontSize: 16,
    flex: 1,
  },
  checkMark: {
    fontSize: 15,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default ReviewScreen;
