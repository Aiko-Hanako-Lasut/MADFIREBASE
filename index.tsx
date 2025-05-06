/* eslint-disable prettier/prettier */

// notes
// fungsi: buat tampilan utama dari aplikasi

import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { calicoBg, calicoHeader } from '../assets';

const PrimaryView = ({
  label,
  children,
}: {
  label: string;
  children: React.JSX.Element;
}) => {
  return (
    <View style={styles.container}>
      <Image source={calicoHeader} style={styles.headerImage} resizeMode="contain" />

      <ImageBackground source={calicoBg} style={styles.background}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.contentBox}>{children}</View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    width: '100%',
    height: 80,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  contentBox: {
    backgroundColor: 'orange',
    padding: 12,
    gap: 12,
    width: '66%',
    borderRadius: 8,
  },
});

export default PrimaryView;
