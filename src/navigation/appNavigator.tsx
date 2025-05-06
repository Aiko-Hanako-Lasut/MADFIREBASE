/* eslint-disable prettier/prettier */

// notes
// fungsi: tampung semua navigasi yang ada di aplikasi

import React from 'react';
import CustomHeader from '../../components/MOLEKUL/CustomHeader';
import Home from '../../screens/Home';
import Report from '../../screens/Report';
import ABOUTUS from '../../screens/ABOUTUS';
import SignUp from '../../screens/pages/signUp';
import LogIn from '../../screens/pages/logIn';
import MenuDrawer from '../../components/MOLEKUL/Menu';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="signUp"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="signUp" component={SignUp} />
      <Stack.Screen name="logIn" component={LogIn} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ReportScreen" component={Report} />
      <Stack.Screen name="About" component={ABOUTUS} />
      <Stack.Screen name="menuDrawer" component={MenuDrawer} />
      <Stack.Screen name="CustomHeader" component={CustomHeader} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
