/* eslint-disable prettier/prettier */

import React from 'react';
// import EnterQuiz from './screens/EnterQuiz';
// import Report from './screens/Report';
// import ViewReport from './screens/ViewReport';
// import Home from './screens/Home';
// import EDITPASS from './screens/editpass';
// import MyProfile from './screens/MyProfile';
// import QuestionReport from './screens/QuestionReport';
// import LogIn from './screens/pages/logIn';
// import SignUp from './screens/pages/signUp';
// import QuizDetailsScreen from './screens/QuizDetailScreen';
// import QuizQuestionScreen from './screens/QuizQuestionScreen';
// import QuizQuestionScreen2 from './screens/QuizQuestionScreen2';
// import ResultScreen from './screens/ResultScreen';
// import ReviewScreen from './screens/ReviewScreen';
// import CreateQuiz from './screens/createQuiz/index';
// import EnterQuiz from './screens/EnterQuiz';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/appNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
