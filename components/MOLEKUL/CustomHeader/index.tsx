/* eslint-disable prettier/prettier */

// components/MOLEKUL/CustomHeader.tsx
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  DrawerActions,
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';

export default function CustomHeader() {
  // Grab navigation from context
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  // Toggle the drawer open/close
  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.leftGroup}>
          <TouchableOpacity onPress={toggleDrawer}>
            <Image
              source={require('../../../src/assets/burger.png')}
              style={styles.burger}
            />
          </TouchableOpacity>
          <Image
            source={require('../../../src/assets/LogoCalico.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.sideRight}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../../../src/assets/Home.png')}
              style={styles.icon}
            />
            <Text style={styles.iconText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('MyProfile')}>
            <Image
              source={require('../../../src/assets/profil.png')}
              style={styles.icon}
            />
            <Text style={styles.iconText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 10, // ensure your header floats above drawer
  },
  container: {
    backgroundColor: '#FFA500',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 82,
    paddingHorizontal: 8,
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  burger: {
    width: 32,
    height: 32,
  },
  logo: {
    width: 154,
    height: 50,
    marginLeft: 5,
  },
  sideRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  icon: {
    width: 32,
    height: 32,
  },
  iconText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '600',
    marginTop: 2,
  },
});
