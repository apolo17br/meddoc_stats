import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import HeaderMyData from '../components/headerMyData';
import Button from '../components/buttonAzul';

export default function AboutPatient({ navigation }) {
    return (
      <View style={{flex:1, backgroundColor:'#38b6ff', height:'100%'}}>
        <HeaderMyData />

          <View style={styles.subHeader}>
            <Text style={styles.title}>MEUS DADOS</Text>
          </View>

          <View style={styles.background}>

            <View>
                <Text style={styles.captions}>Nome</Text>
                <View style={styles.input}>
                  <Text style={styles.placeholder}>Nome do Paciente</Text> 
                </View>

                <Text style={styles.captions}>CPF</Text>
                <View style={styles.input}>
                  <Text style={styles.placeholder}>XXX.XXX.XXX-XX</Text> 
                </View>

                <Text style={styles.captions}>E-mail</Text>
                <View style={styles.input}>
                  <Text style={styles.placeholder}>email@dopaciente.com</Text> 
                </View>

                <Text style={styles.captions}>CEP</Text>
                <View style={styles.input}>
                  <Text style={styles.placeholder}>XX.XXX-XXX</Text> 
                </View>

                <Text style={styles.captions}>Senha</Text>
                <View style={styles.input}>
                  <Text style={styles.placeholder}>***********</Text> 
                </View>
                <TouchableOpacity>
                    <Text style={{fontFamily:'Inter', color:'#a0aec0', fontSize:14}}>Alterar sua senha</Text>
                </TouchableOpacity>
            </View>

            <View style={{gap:'8px'}}>
                <Button text='ALTERAR DADOS'/>
                <TouchableOpacity style={styles.payments} onPress={() => navigation.navigate('Payments')}>
                    <Text style={{color:'#fff', fontFamily:'Inter', fontSize:'20', fontWeight:'700',}}>ÁREA DE PAGAMENTOS</Text>
                </TouchableOpacity>
            </View>

          </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    subHeader: {
      backgroundColor: '#38b6ff',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginBottom:'16px',
      marginHorizontal:'16px'
    },
    title: {
      color:'#fff',
      fontSize:32,
      fontFamily:'Inter',
      fontWeight:900
    },
    background: {
      borderTopLeftRadius:'30px',
      borderTopRightRadius:'30px',
      backgroundColor:'#f9f9f9',
      padding:'32px',
      flex:1
    },
    captions: {
        color:'#000',
        fontSize:14,
        fontFamily:'Inter',
        marginBottom:'8px'
    },
    input: {
        borderRadius:15,
        borderColor:'#E2E8F0',
        borderWidth:'1px',
        paddingLeft:'16px',
        backgroundColor:'#f0f0f0',
        height:'50px',
        justifyContent:'center',
        marginBottom:'16px'
    },
    placeholder: {
        fontFamily:'Inter',
        color:'#A0AEC0',
        fontSize:'14px',
    },
    update: {
      backgroundColor:'#f0f0f0',
      borderRadius:'15px',
      flexDirection:'row',
      justifyContent:'space-between'
    },
    payments: {
        backgroundColor:'#3870FF',
        height:'50px',
        borderRadius:'12px',
        justifyContent:'center',
        alignItems:'center'
    }
  });