import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import InputText from '../../components/ATOM/TextInput';
import Button from '../../components/ATOM/Button';
import Footer from '../../components/MOLEKUL/Footer';
import Header from '../../components/MOLEKUL/Headersyeela/headerSignUpLogIn';
import Body from '../../components/ATOM/Body';
import {NavigationProp} from '@react-navigation/native';

interface ChangePasswordScreenProps {
  // props (parameter) untuk komponen
  navigation: NavigationProp<any>;
}

const ChangePasswordScreen: React.FC<ChangePasswordScreenProps> = ({
  navigation,
}) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewPasswordConfirmation, setShowNewPasswordConfirmation] =
    useState(false);

  const handleSavePassword = () => {
    console.log('Save Password Pressed');
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);
    console.log('New Password Confirmation:', newPasswordConfirmation);
  };

  const handleViewProfilePress = () => {
    console.log('View Profile pressed (from footer)');
  };

  const handleChangePasswordPress = () => {
    console.log('Change Password pressed (from footer)');
  };

  return (
    <Body>
      <Header navigation={undefined} />
      <View style={styles.container}>
        <Text style={styles.title}>CHANGE MY PASSWORD</Text>

        <InputText
          label="Old Password"
          placeholder="Enter your old password"
          value={oldPassword}
          onChangeText={setOldPassword}
          secureTextEntry={!showOldPassword}>
          <TouchableOpacity
            onPress={() => setShowOldPassword(!showOldPassword)}>
            <Image
              source={
                showOldPassword
                  ? require('../../src/assets/EYEopen.png')
                  : require('../../src/assets/secretEYE.png')
              }
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </InputText>

        <InputText
          label="New Password"
          placeholder="Enter your new password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={!showNewPassword}>
          <TouchableOpacity
            onPress={() => setShowNewPassword(!showNewPassword)}>
            <Image
              source={
                showNewPassword
                  ? require('../../src/assets/EYEopen.png')
                  : require('../../src/assets/secretEYE.png')
              }
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </InputText>

        <InputText
          label="New Password Confirmation"
          placeholder="Confirm your new password"
          value={newPasswordConfirmation}
          onChangeText={setNewPasswordConfirmation}
          secureTextEntry={!showNewPasswordConfirmation}>
          <TouchableOpacity
            onPress={() =>
              setShowNewPasswordConfirmation(!showNewPasswordConfirmation)
            }>
            <Image
              source={
                showNewPasswordConfirmation
                  ? require('../../src/assets/EYEopen.png')
                  : require('../../src/assets/secretEYE.png')
              }
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </InputText>

        <Button
          title="SAVE"
          onPress={handleSavePassword}
          backgroundColor="#26A69A"
          textColor="white"
          style={styles.saveButton}
        />
      </View>

      <Footer
        onViewProfile={handleViewProfilePress}
        onChangePassword={handleChangePasswordPress}
      />
    </Body>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#888',
  },
  saveButton: {
    marginTop: 30,
  },
});

export default ChangePasswordScreen;
