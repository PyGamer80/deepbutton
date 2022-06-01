import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react'
import {TouchableHighlight, TextInput, SafeAreaView, Text, View, Alert } from 'react-native'
import { Checkbox } from 'react-native-paper';
import Estilos from './componentes/estilos/estilos.js'

export default function App() {
  
  const [checked,setChecked]=useState(false)
  const [valor,setValor]=useState('N1')
  const [valor2,setValor2]=useState('N2')
  const [resultado,setResultado]=useState('Result')
  
  const soma=()=>{

  
    if(parseInt(valor) >= parseInt(valor2)){
      return(
        setResultado(parseInt(valor)))}
        else{
          setResultado(parseInt(valor2))
        }

  }
  return (
    <SafeAreaView style={Estilos.container}>
      
      
      <Checkbox
     status={checked ? 'checked':'unchecked'}
      onPress={() => {
        setChecked(!checked)
      }}
    />

      <StatusBar style="auto" />

      <Text>msg</Text>
      <TextInput 
      style={Estilos.entradatexto}
      value={String(valor)}
      onChangeText={(texto)=>{setValor(texto)}}
      placeholder="useless placeholder"
      /> 
            
      <TextInput 
      style={Estilos.entradatexto}
      value={String(valor2)}
      onChangeText={(texto2)=>{setValor2(texto2)}}
     
      />
      
      <TextInput 
      style={Estilos.entradatexto}
      value={String(resultado)}
      onChangeText={(texto)=>{setResultado(texto)}}
      /> 
      <TouchableHighlight
      style={Estilos.btn}
      onPress={()=>soma()}
      >
        <Text>Soma</Text>
      </TouchableHighlight>
     
     
    
    </SafeAreaView>
  );
}