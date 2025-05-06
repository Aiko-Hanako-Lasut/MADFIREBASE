/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const ResultScreen = () => {
  return (
    <ImageBackground
      source={require('../src/assets/background.png')} // ganti nama file kalau beda
      style={styles.container}
      resizeMode="cover">
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoWrapper}>
          <Image
            source={require('../src/assets/LogoCalico.png')}
            style={styles.logo}
          />
          <Text style={styles.slogan}>MAKE YOUR STUDY FUN!</Text>
        </View>
      </View>

      {/* Judul */}
      <Text style={styles.title}>Finding Nemo (2003)</Text>

      {/* Data */}
      <View style={styles.resultCard}>
        <Text style={styles.resultText}>Name : Aulia Ollo</Text>
      </View>
      <View style={styles.resultCard}>
        <Text style={styles.resultText}>NIM : 105012310025</Text>
      </View>
      <View style={styles.resultCard}>
        <Text style={styles.resultText}>Final score : 2/2</Text>
      </View>
      <View style={styles.resultCard}>
        <Text style={styles.resultText}>Time taken : 4 minutes</Text>
      </View>

      {/* Tombol */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Back to home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View details</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F5A623',
  },
  logoWrapper: {},
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  slogan: {
    fontSize: 10,
    color: '#f6a500',
    fontWeight: 'bold',
    marginTop: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  resultCard: {
    backgroundColor: '#f6a500',
    marginHorizontal: 30,
    marginVertical: 6,
    padding: 12,
    borderRadius: 5,
  },
  resultText: {
    fontSize: 16,
    color: '#000',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f6a500',
    paddingVertical: 16,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    backgroundColor: '#04B200',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});
