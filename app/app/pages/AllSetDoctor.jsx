import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Header from '../components/header';

export default function AllSetDoctor({ navigation }) {
    return (
      <View style={{flex:1, backgroundColor:'#38b6ff', height:'100%'}}>

        <View  style={styles.header}>
        <Text style={styles.title}>TUDO PRONTO!</Text>
            <View style={{backgroundColor:'#fff', borderRadius:20, height:'100%', width:'20%'}}>
                <Image source={require('../../assets/img/logo.png')} style={styles.logoHeader}/>
            </View>
        </View>

          <View style={styles.background}>

            <View>
              <Text style={styles.instructions}>Sua solicitação de cadastro já foi submetida e está sendo analisada pela nossa equipe.</Text>
            </View>

            <View style={{alignItems:'center'}}>
              <Image source={require('../../assets/img/doctors.png')} style={{width:'256px', height:'168.26px', resizeMode:'stretch', marginBottom:'8px'}} />
            </View>

            <View>
              <Text style={styles.instructions}>Dentro de alguns dias entraremos em contato via e-mail com mais informações.</Text>
            </View>

            <View>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
                  <Text style={styles.text}>RETORNAR À TELA INICIAL</Text>
              </TouchableOpacity>
            </View>

            <View style={{textAlign:'center', marginTop:'32px'}}>
              <Text style={styles.nao}>Não recebeu o e-mail? Confira sua caixa de spam</Text>
              <Text style={styles.nao}>ou</Text>
              <TouchableOpacity>
              <Text style={styles.tente}>tente outro endereço de e-mail</Text>
              </TouchableOpacity>
            </View>
          <Text style={{alignSelf:'center', color:'#000', fontSize:10, fontFamily:'Inter'}}>Ilustração por Freepik</Text>
          </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    header: {
        margin:'16px',
        flexDirection:'row',
        justifyContent:'space-between',
    },
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
      textAlign:'center',
      marginBottom:'16px',
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
      fontSize:14,
      color:'#38b6ff',
      fontWeight:'700',
    }
  });