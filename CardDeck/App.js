/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/Home';
const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView style={styles.scrollView}>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f2f2f2',
  },
  SafeAreaView: {flex: 1, backgroundColor: '#f2f2f2'},
});

export default App;
