/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from 'react-native';

const QuizDetailsScreen = () => {
  return (
    <ImageBackground
      source={require('../src/assets/background.png')} // background kucing
      style={styles.background}
      resizeMode="stretch">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../src/assets/LogoCalico.png')} // logo CALICO
          style={styles.logo}
          resizeMode="stretch"
        />
        <TouchableOpacity>
          <Text style={styles.loginText}>Login as a lecturer</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Finding Nemo (2003)</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>English Class</Text>
          <Text style={styles.infoText}>Ms. Aiko Lasut</Text>
          <Text style={styles.infoText}>Total questions x2</Text>
          <Text style={styles.infoText}>Duration 5 minutes</Text>
        </View>

        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
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
    width: '100%',
    height: 80,
    resizeMode: 'stretch',
  },
  loginText: {
    color: '#fff',
    marginRight: 10,
  },
  titleBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 40,
    color: '#000',
  },
  infoBox: {
    backgroundColor: '#F5A623',
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
    width: '100%',
    maxWidth: 300,
  },
  infoText: {
    color: '#000',
    textAlign: 'center',
    marginBottom: 4,
    fontSize: 14,
  },
  startButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 30,
  },
  startButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default QuizDetailsScreen;
