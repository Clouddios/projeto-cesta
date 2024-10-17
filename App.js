import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, SafeAreaView, Text, View } from 'react-native';

import Index from './src/telas/Cesta';
import mock from './src/mocks/cesta'


export default function App() {
  return (
    <SafeAreaView >
      <StatusBar />
      <Index {...mock} />
    </SafeAreaView >
  );
}
