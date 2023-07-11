import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from '../components/header';
import ButtonEnviar from '../components/buttonEnviar';

export default function ForgotPassword({ navigation }) {
    return (
      <View style={{flex:1, backgroundColor:'#38b6ff', height:'100%'}}>
        <Header />

          <View style={styles.subHeader}>
            <Text style={styles.title}>RECUPERAR SENHA</Text>
          </View>

          <View style={styles.background}>

            <View>
              <Text style={styles.instructions}>Digite o e-mail associado à sua conta. Nós mandaremos um e-mail com as instruções para recuperar sua senha.</Text>
            </View>

            <View>
              <Text style={styles.captions}>Informe seu endereço de e-mail</Text>
              <View style={styles.input}>
                <TextInput placeholder='Seu endereço de e-mail' style={styles.placeholder} keyboardType='email-address' autoCapitalize='none' autoCorrect={false} />
              </View>
            </View>

            <View>
              <ButtonEnviar />
            </View>

          </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    subHeader: {
      backgroundColor: '#38b6ff',
    },
    title: {
      color:'#fff',
      fontSize:32,
      fontFamily:'Inter',
      fontWeight:900,
      marginLeft:'16px',
      marginBottom:'16px'
    },
    background: {
      borderTopLeftRadius:'30px',
      borderTopRightRadius:'30px',
      backgroundColor:'#f9f9f9',
      height:'auto',
      padding:'32px',
      flex:1
    },
    instructions: {
      fontFamily:'Inter',
      fontSize:20,
      fontWeight:400,
      color:'#000',
      textAlign:'left',
      marginBottom:'32px',
      textAlign:'justify'
    },
    captions: {
      color:'#2D3748',
      fontSize:14,
      fontFamily:'Inter',
      marginBottom:'8px',
      fontWeight:400,
    },
    input: {
      borderRadius:15,
      borderColor:'#E2E8F0',
      borderWidth:'1px',
      padding:'20px',
      backgroundColor:'#fff',
      height:'50px',
      justifyContent:'center',
      marginBottom:'16px'
    },
    placeholder: {
      color:'#a0aec0',
      fontSize:14,
      fontFamily:'Inter',
      fontWeight:400
    },
    button: {
      backgroundColor:'#38b6ff',
      height:'50px',
      borderRadius:'12px',
      marginTop:'64px',
      justifyContent:'center',
      alignItems:'center'
  },
  text: {
      color:'#fff',
      fontFamily:'Inter',
      fontSize:'20',
      fontWeight:'700',
  }
  });