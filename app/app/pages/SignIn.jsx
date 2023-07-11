import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Switch } from 'react-native';
import Header from '../components/header';
import Button from '../components/buttonConectar';

export default function SignIn({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <View style={{flex:1, backgroundColor:'#38b6ff', height:'100%'}}>
        <Header />

          <View style={styles.subHeader}>
            <Text style={styles.title}>ENTRAR</Text>
          </View>

          <View style={styles.background}>

            <View>
              <Text style={styles.instructions}>Informe seu e-mail e senha para prosseguir.</Text>
            </View>

            <View>
              <Text style={styles.captions}>E-mail</Text>
              <View style={styles.input}>
                <TextInput placeholder='Seu e-mail' style={styles.placeholder} keyboardType='email-address' autoCapitalize='none' autoCorrect={false} />
              </View>
            </View>

            <View>
              <Text style={styles.captions}>Senha</Text>
              <View style={styles.input}>
                <TextInput placeholder='Sua senha' style={styles.placeholder} keyboardType='password' autoCapitalize='none' autoCorrect={false}/>
              </View>

              <View style={{alignItems:'flex-end'}}>
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Switch
                  trackColor={{false:'#d4d4d4', true:'#38b6ff'}}
                  ios_background='#000'
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
                <Text style={{paddingLeft:'8px', color:'#2d3748', fontSize:12, fontFamily:'Inter'}}>Lembrar</Text> 
              </View>

              <View>
              <Button />
              </View>

              <View style={{flexDirection:'row', alignSelf:'center', marginTop:'32px'}}>
                <Text style={{color:'#A0AEC0', fontFamily:'Inter', fontWeight:'400', fontSize:14}}>Não possui uma conta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text style={{color:'#38b6ff', fontFamily:'Inter', fontWeight:'700', fontSize:14}}>Cadastre-se</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={{fontFamily:'Inter', alignSelf:'center', color:'#A0AEC0', fontSize:14, justifyContent:'flex-end'}}>MEDDOC &copy; 2023</Text>

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
      marginBottom:'16px'
    },
    placeholder: {
      color:'#a0aec0',
      fontSize:14,
      fontFamily:'Inter',
      fontWeight:400
    },
    forgotPassword: {
      color:'#38b6ff',
      fontFamily:'Inter',
      fontSize:12,
      fontWeight:'700'
    },
    switch: {
      height:'28px',
      width:'px'
    }
  });