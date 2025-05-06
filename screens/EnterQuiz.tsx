/* eslint-disable prettier/prettier */
import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Modal,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import Button from '../components/ATOM/Button';
import {logo} from '../src/assets';

interface EnterQuizProps {
  navigation: NavigationProp<any>;
}

const EnterQuiz: React.FC<EnterQuizProps> = ({navigation}) => {
  const [name, setName] = useState('');
  const [nim, setNim] = useState('');
  const [quizCode, setQuizCode] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleStartQuiz = useCallback((): void => {
    if (quizCode !== '12345') {
      setModalVisible(true);
    } else {
      console.log('Code valid, start quiz!');
      navigation.navigate('QuizScreen');
    }
  }, [quizCode, navigation]);

  return (
    <ImageBackground
      source={require('../src/assets/background.png')}
      style={styles.background}
      resizeMode="cover">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Header */}
      <View style={styles.container}>
        <ImageBackground source={logo} style={styles.logoImage}>
          <Button
            onPress={() => navigation.navigate('resultScreen')} // smbung p syeela p login
            label="Login as Lecturer"
            bgColor="grey"
            weight="bold"
          />
        </ImageBackground>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
        <TextInput
          style={styles.input}
          value={nim}
          onChangeText={setNim}
          placeholder="Enter your NIM"
        />
        <TextInput
          style={styles.input}
          value={quizCode}
          onChangeText={setQuizCode}
          placeholder="Enter quiz code"
        />
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate('resultScreen')}>
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Your code is invalid.</Text>
            <TouchableOpacity
              style={styles.tryAgainButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.tryAgainButtonText}>Try again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default EnterQuiz;

const styles = StyleSheet.create({
  background: {flex: 1},
  logoImage: {width: '100%', height: 60, resizeMode: 'contain'},
  container: {flex: 0.1},
  formContainer: {marginTop: 240, paddingHorizontal: 30},
  input: {
    backgroundColor: '#ffffffcc',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#14AE5C',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  startButtonText: {color: '#fff', fontSize: 16},
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {backgroundColor: '#E51B1B', padding: 30, alignItems: 'center'},
  modalText: {color: '#fff', fontSize: 16, marginBottom: 20},
  tryAgainButton: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  tryAgainButtonText: {color: '#fff', fontWeight: '600'},
});
