import * as React from 'react';
import { Text, View, StyleSheet,Pressable,TextInput} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Constants from 'expo-constants';
import Operacao from './components/Operacao';
import MyCheckBox from './components/MyCheckBox';
import Escolha from './components/Escolha';
import { Image } from "react-native";


export default function App() {

  return (
    
    
    
    <View style={styles.container}>
    <Image
    style={styles.imagem} source={require('./assets/imagem.png')}
    />
    <TextInput
    placeholder = "                             Adicionar imagem"
    />
     <TextInput
        style={styles.input}
        placeholder="Nome:"/>
      <TextInput
        style={styles.input}
        placeholder="CPF:"/>
      <TextInput
        style={styles.input}
        placeholder="E-mail:"/>
       <TextInput
        style={styles.input}
        placeholder="Senha:"/>
       <TextInput
        style={styles.input}
        placeholder="Confirmação de senha:"/>
       <Operacao nome="CADASTRAR"/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
    imagem:{
    justifyContent: 'center',
    alignItems: 'center',

  },
  preto:{
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {

    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }

});