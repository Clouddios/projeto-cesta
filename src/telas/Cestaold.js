import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';

import Cesta from './Cesta';
import mock from '../mocks/cesta';


export default function App() {
  const [fontesCarregadas] = useFonts({
    RobotoRegular: Roboto_400Regular,
    RobotoBold: Roboto_700Bold,
  });
  



  if (!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}