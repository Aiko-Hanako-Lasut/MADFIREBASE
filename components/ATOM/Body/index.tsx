import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

const Body: React.FC<{children: React.ReactNode}> = ({children}) => (
  <ImageBackground
    source={require('../../../src/assets/background.png')}
    style={styles.background}
    resizeMode="cover">
    {children}
  </ImageBackground>
);
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
export default Body;
