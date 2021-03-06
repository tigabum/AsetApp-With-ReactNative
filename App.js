import React, {useEffect} from 'react';
import {
  AsyncStorage,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
} from 'react-native';
import { createStore } from "redux";
import { Provider } from "react-redux";
import {SafeAreaView} from 'react-navigation';
import {useColorScheme} from 'react-native-appearance';

import {useDispatch, useSelector} from 'react-redux';
import Navigation from './Navigation';
import rootReducer from './reducers/rootReducer';

export default function App() {
  const store = createStore(rootReducer);
  const colorScheme = useColorScheme();
  const statusBarStyle =
    colorScheme === 'dark' ? 'light-content' : 'dark-content';
  const darkThemeContainer =
    colorScheme === 'dark' ? styles.darkThemeContainer : null;

  return (
    <Provider store={store}>
      <StatusBar barStyle={statusBarStyle} />
      <Navigation />
    </Provider>
  );
}
