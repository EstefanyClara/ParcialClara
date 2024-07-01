/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet,} from 'react-native';
import MainStack from './navigation/MainStack';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={[styles.backgroundStyle]}>
      <MainStack/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
