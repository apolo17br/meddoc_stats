import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/header';
import ButtonEntrar from '../components/buttonEntrar';

export default function CreatePassword() {
    return (
        <View style={{flex:1, backgroundColor:'#38b6ff', height:'100%'}}>
        <Header />

          <View style={styles.subHeader}>
            <Text style={styles.title}>CRIAR NOVA SENHA</Text>
          </View>

          <View style={styles.background}>

            <View>
              <Text style={styles.instructions}>Sua senha foi redefinida. Agora você pode acessar o sistema.</Text>
            </View>

              <View>
                <ButtonEntrar />
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
    }
  }
)