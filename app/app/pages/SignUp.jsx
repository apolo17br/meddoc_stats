import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Header from '../components/header';
import Button from '../components/buttonAzul';

export default function SignUp({ navigation }) {
    return (
      <View style={{flex:1, backgroundColor:'#38b6ff', height:'100%'}}>
          <Header />

            <View style={styles.subHeader}>
              <Text style={styles.title}>CADASTRAR</Text>
            </View>

            <View style={styles.background}>

              <View>
                <Text style={styles.captions}>Nome</Text>
                <View style={styles.input}>
                  <TextInput placeholder='Seu nome completo' style={styles.placeholder} keyboardType='email-address' autoCapitalize='none' autoCorrect={false} />
                </View>
              </View>

              <View>
                <Text style={styles.captions}>CPF</Text>
                <View style={styles.input}>
                  <TextInput placeholder='Seu CPF (somente números)' style={styles.placeholder} keyboardType='password' autoCapitalize='none' autoCorrect={false}/>
                </View>
              </View>

              <View>
                <Text style={styles.captions}>E-mail</Text>
                <View style={styles.input}>
                  <TextInput placeholder='Seu endereço de e-mail' style={styles.placeholder} keyboardType='password' autoCapitalize='none' autoCorrect={false}/>
                </View>
              </View>

              <View>
                <Text style={styles.captions}>CEP</Text>
                <View style={styles.input}>
                  <TextInput placeholder='Seu CEP (somente números)' style={styles.placeholder} keyboardType='password' autoCapitalize='none' autoCorrect={false}/>
                </View>
              </View>

              <View>
                <Text style={styles.captions}>Senha</Text>
                <View style={styles.input}>
                  <TextInput placeholder='Sua senha' type='password' style={styles.placeholder} keyboardType='password' autoCapitalize='none' autoCorrect={false}/>
                </View>
                <Text style={styles.observation}>A senha deve conter pelo menos 6 caracteres</Text>
              </View>

              <View>
                <Text style={styles.captions}>Confirme sua senha</Text>
                <View style={styles.input}>
                  <TextInput placeholder='Confirme sua nova senha' style={styles.placeholder} type='password' keyboardType='password' autoCapitalize='none' autoCorrect={false}/>
                </View>
                <Text style={styles.observation}>As senhas devem ser iguais</Text>
              </View>

              <Button text='CADASTRAR' />

              <View style={{flexDirection:'row', alignSelf:'center', marginTop:'16px'}}>
                <Text style={{color:'#A0AEC0', fontFamily:'Inter', fontWeight:'400', fontSize:14}}>Já possui uma conta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                  <Text style={{color:'#38b6ff', fontFamily:'Inter', fontWeight:'700', fontSize:14}}>Entre</Text>
                </TouchableOpacity>
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
      padding:'32px',
      flex:1
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
    observation: {
      fontFamily:'Inter',
      fontSize:14,
      fontStyle:'italic',
      color:'#c0bbbb',
      marginBottom:'16px'
  }
  });