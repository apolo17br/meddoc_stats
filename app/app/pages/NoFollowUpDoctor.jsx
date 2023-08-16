import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/header';

export default function NoFollowUpDoctor({ navigation }) {

    return (
      <View style={{flex:1, backgroundColor:'#38b6ff', height:'100%'}}>
        <Header />

        <View style={styles.subHeader}>
            <Text style={styles.title}>RETORNOS</Text>
        </View>

        <View style={styles.background}>

            <View>
                <Text style={{textAlign:'center', fontFamily:'Inter', color:'#2d3748', fontSize:20, marginBottom:'8px', fontWeight:'600'}}>Tudo certo, você não possui nenhum retorno pendente!</Text>
            </View>

            <View>
              <Image source={require('./../../assets/img/doctors.png')} style={{height:'240px', width:'350px', resizeMode:'stretch', alignSelf:'center'}}/>
              <Text style={{fontFamily:'Inter', fontSize:10, alignSelf:'center', color:'#a0aec0'}}>Ilustração por Freepik</Text>
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