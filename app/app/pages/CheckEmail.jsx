import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Header from '../components/header';

export default function ForgotPassword({ navigation }) {
    return (
      <View style={{flex:1, backgroundColor:'#38b6ff', height:'100%'}}>
        <Header />

          <View style={styles.subHeader}>
            <Text style={styles.title}>VERIFIQUE SEU E-MAIL</Text>
          </View>

          <View style={styles.background}>

            <View>
              <Text style={styles.instructions}>Encaminhamos as instruções de recuperação de senha via e-mail.</Text>
            </View>

            <View style={{alignItems:'center'}}>
              <Image source={require('../../assets/img/enviado.png')} style={{width:'256px', height:'256px'}} />
            </View>

            <View>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
                  <Text style={styles.text}>ABRIR E-MAIL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonLater} onPress={() => navigation.navigate('Home')}>
                  <Text style={styles.textLater}>Confirmar depois</Text>
              </TouchableOpacity>
            </View>

            <View style={{textAlign:'center', marginTop:'32px'}}>
              <Text style={styles.nao}>Não recebeu o e-mail? Confira sua caixa de spam</Text>
              <Text style={styles.nao}>ou</Text>
              <TouchableOpacity>
              <Text style={styles.tente}>tente outro endereço de e-mail</Text>
              </TouchableOpacity>
            </View>
          <Text style={{fontFamily:'Inter', fontSize:10, alignSelf:'center', color:'#a0aec0'}}>Ilustração por Freepik</Text>
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
      marginBottom:'16px',
      textAlign:'justify'
    },
    button: {
      backgroundColor:'#38b6ff',
      height:'50px',
      borderRadius:'12px',
      marginTop:'16px',
      justifyContent:'center',
      alignItems:'center'
    },
    buttonLater: {
      backgroundColor:'#f0f0f0',
      height:'50px',
      borderRadius:'12px',
      marginTop:'16px',
      justifyContent:'center',
      alignItems:'center'
  },
  text: {
      color:'#fff',
      fontFamily:'Inter',
      fontSize:'20',
      fontWeight:'700',
  },
  textLater: {
        color:'#C0BBBB',
        fontFamily:'Inter',
        fontSize:'20',
        fontWeight:'400',
    },
    nao: {
      fontFamily:'Inter',
      fontSize:12,
      color:'#000',
      fontWeight:'700',
      lineHeight:'16px'
    },
    tente: {
      fontFamily:'Inter',
      fontSize:12,
      color:'#38b6ff',
      fontWeight:'700',
    }
  });