import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Header from '../components/header';
import Button from '../components/buttonAzul';

export default function RedefinePassword() {
    return (
        <View style={{flex:1, backgroundColor:'#38b6ff', height:'100%'}}>
        <Header />

          <View style={styles.subHeader}>
            <Text style={styles.title}>CRIAR NOVA SENHA</Text>
          </View>

          <View style={styles.background}>

            <View>
              <Text style={styles.instructions}>Sua nova senha deve ser diferente das senhas previamente usadas.</Text>
            </View>

            <View>
              <Text style={styles.captions}>Senha</Text>
              <View style={styles.input}>
                <TextInput placeholder='Informe sua nova senha' style={styles.placeholder} keyboardType='email-address' autoCapitalize='none' autoCorrect={false} />
              </View>
              <Text style={styles.observation}>A senha deve conter pelo menos 6 caracteres</Text>
            </View>

            <View>
              <Text style={styles.captions}>Confirme sua senha</Text>
              <View style={styles.input}>
                <TextInput placeholder='Confirme sua nova senha' style={styles.placeholder} keyboardType='password' autoCapitalize='none' autoCorrect={false}/>
              </View>
              <Text style={styles.observation}>As senhas devem ser iguais</Text>

              <View>
              <Button text='REDEFINIR SENHA' />
              </View>

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
      marginBottom:'32px'
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
      marginBottom:'4px'
    },
    placeholder: {
      color:'#a0aec0',
      fontSize:14,
      fontFamily:'Inter',
      fontWeight:400
    },
    observation: {
        fontFamily:'Inter',
        fontSize:14,
        fontStyle:'italic',
        color:'#c0bbbb',
        marginBottom:'16px'
    }
})