import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Entrar from './src/pages/Entrar';
import TelaInicial from './src/pages/TelaInicial'
//Styled Component 
import {Texto,Contained}  from './src/styles/style'

function ControlTela(){


}

export default function App() {
  return (
    <Contained >
      <TelaInicial/>
    </Contained>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
