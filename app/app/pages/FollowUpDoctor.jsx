import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../components/header';
import { IoAlarmOutline } from 'react-icons/io5';

export default function FollowUpDoctor({ navigation }) {

    return (
      <View style={{flex:1, backgroundColor:'#38b6ff', height:'100%'}}>
        <Header />

        <View style={styles.subHeader}>
            <Text style={styles.title}>RETORNOS</Text>
        </View>

        <View style={styles.background}>

            <View>
                <Text style={{fontFamily:'Inter', color:'#2d3748', fontSize:20, marginBottom:'8px', fontWeight:'600'}}>Você possui um retorno pendente com</Text>
            </View>

            <View style={{backgroundColor:'#fff', borderRadius:'15px', marginVertical:'16px', paddingLeft:'16px', shadowColor:'#38b6ff', shadowRadius:'4px'}}>
                <Text style={{fontFamily:'Inter', color:'#000', fontSize:22, fontWeight:'600', paddingVertical:'8px'}}>Nome do Paciente</Text>
                <View style={{flexDirection:'row'}}>
                    <IoAlarmOutline style={{height:'20px', width:'20px'}}/>
                    <Text style={{fontFamily:'Inter', color:'#000', fontSize:18, paddingLeft:'8px'}}>Prazo: x dias</Text>
                </View>
                <TouchableOpacity style={{alignSelf:'flex-end', backgroundColor:'#38b6ff', borderRadius:'15px', marginVertical:'16px', marginRight:'16px'}}>
                  <Text style={{fontFamily:'Inter', color:'#fff', fontSize:16, alignSelf:'center', paddingVertical:'8px', paddingHorizontal:'16px'}}>Visualizar</Text>
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
    }
  });