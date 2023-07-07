import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/header';

export default function SignIn() {
    return (
      <View>
        <Header />
          <View style={styles.subHeader}>
            <Text style={styles.title}>ENTRAR</Text>
          </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    subHeader: {
      flex: 1,
      backgroundColor: '#38b6ff',
    },
    title: {
      color:'#fff',
      fontSize:32,
      fontFamily:'Inter',
      fontWeight:'900',
      marginLeft:'16px',
      marginBottom:'16px'
    }
  });