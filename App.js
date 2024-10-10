import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, SafeAreaView, Text, View } from 'react-native';

import Cesta from './src/telas/cesta';

export default function App() {
  return (
    <SafeAreaView >
      <StatusBar >
        <Cesta />
      </StatusBar >
    </SafeAreaView >
  );
}
