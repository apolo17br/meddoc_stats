import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Header from '../components/header';
import { IoPersonCircleOutline, IoPushOutline } from 'react-icons/io5'

export default function AboutDoctor({ navigation }) {
    return (
      <View style={{flex:1, backgroundColor:'#38b6ff', height:'100%'}}>
        <Header />

          <View style={styles.subHeader}>
            <Text style={styles.title}>SOBRE VOCÊ</Text>
          </View>

          <View style={styles.background}>

            <View style={{alignItems:'center'}}>
              <IoPersonCircleOutline style={{height:'128px', width:'128px'}}/>
              <TouchableOpacity style={{backgroundColor:'#38b6ff', borderRadius:'15px'}}>
                <Text style={{fontFamily:'Inter', fontSize:'20px', color:'#fff', paddingHorizontal:'16px', paddingVertical:'8px'}}>Alterar foto</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.presentation}>
              <TextInput multiline numberOfLines={10} placeholder='Digite aqui seu texto de apresentação aos pacientes.' style={styles.placeholder}/>
            </View>

            <View>
              <TouchableOpacity style={styles.update}>
                <Text style={{fontFamily:'Inter', fontSize:'18px', color:'#A0AEC0', paddingVertical:'14px', paddingHorizontal:'16px'}}>Atualizar currículo</Text>
                <IoPushOutline style={{alignSelf:'center', marginRight:'16px', color:'#a0aec0', maxHeight:'32', maxWidth:'32', height:'100%', width:'100%'}}/>
              </TouchableOpacity>
            </View>

            <View style={{textAlign:'center', marginTop:'16px'}}>              
              <TouchableOpacity style={{backgroundColor:'#38b6ff', borderRadius:'15px', width:'128px', alignSelf:'flex-end'}}>
                <Text style={styles.salvar}>Salvar</Text>
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
      height:'auto',
      padding:'32px',
      flex:1
    },
    presentation: {
        marginTop:'16px', 
        backgroundColor:'#fff', 
        borderRadius:'15px',
        maxHeight:'256px',
        height:'100%',
        shadowOffset:'#000',
        shadowOpacity:1,
    },
    placeholder: {
        fontFamily:'Inter',
        color:'#A0AEC0',
        fontSize:'18px',
        padding:'16px',
    },
    update: {
      backgroundColor:'#f0f0f0',
      borderRadius:'15px',
      marginTop:'16px',
      flexDirection:'row',
      justifyContent:'space-between'
    },
    salvar: {
        fontFamily:'Inter',
        fontSize:'20px',
        paddingHorizontal:'16px',
        paddingVertical:'12px',
        color:'#fff',
    }
  });