import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import InputText from '../../components/ATOM/TextInput';
import Button from '../../components/ATOM/Button';
import Footer from '../../components/MOLEKUL/Footer';
import Header from '../../components/MOLEKUL/Headersyeela/headerSignUpLogIn';
import Body from '../../components/ATOM/Body';

const ProfileScreen = () => {
  const [namaPengguna, setNamaPengguna] = useState('Nama Awal');
  const [emailPengguna, setEmailPengguna] = useState('email@example.com');
  const [fakultasPengguna, setFakultasPengguna] = useState(
    'Fakultas Ilmu Komputer',
  );

  const handleLogout = () => {
    console.log('Logout pressed');
    // Implementasi logika logout
  };

  const handleContactAdmin = () => {
    console.log('Contact admin pressed');
    // Implementasi logika kontak admin
  };

  const handleViewProfilePress = () => {
    console.log('View Profile pressed (from footer)');
    // Navigasi atau aksi lain
  };

  const handleChangePasswordPress = () => {
    console.log('Change Password pressed (from footer)');
    // Navigasi ke ChangePasswordScreen
  };

  return (
    <Body>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>MY PROFILE</Text>
        <InputText
          label="NAMA"
          value={namaPengguna}
          onChangeText={setNamaPengguna}
        />
        <InputText
          label="EMAIL"
          value={emailPengguna}
          onChangeText={setEmailPengguna}
          keyboardType="email-address"
        />
        <InputText
          label="FAKULTAS"
          value={fakultasPengguna}
          editable={false} // Ini tidak bisa diedit
        />

        <TouchableOpacity
          style={styles.contactAdminButton}
          onPress={handleContactAdmin}>
          <Image
            source={require('../../src/assets/CHAT.png')} // Ganti dengan path ikon chat Anda
            style={styles.contactAdminIcon}
          />
          <Text style={styles.contactAdminText}>
            Contact SIU admin to update
          </Text>
        </TouchableOpacity>

        <Button
          title="LOG OUT"
          backgroundColor="#DB4437"
          textColor="white"
          onPress={handleLogout}
          iconSource={require('../../src/assets/Logout.png')} // Ganti dengan path ikon Anda
          iconStyle={styles.logoutIcon}
          style={styles.logoutButton} // Gunakan style untuk ukuran tombol
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  contactAdminButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactAdminIcon: {
    width: 24, // Sesuaikan ukuran ikon chat
    height: 24,
    marginRight: 8,
  },
  contactAdminText: {
    color: '#00acc1',
    fontSize: 16,
  },
  logoutIcon: {
    width: 33, // Ukuran ikon logout lebih kecil
    height: 33,
    alignItems: 'center',
  },
  logoutButton: {
    width: 20, // Ukuran tombol logout lebih kecil
    height: 35,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
