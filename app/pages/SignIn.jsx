import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SignIn() {
    return (
      <View style={styles.container}>
        <Text>SIGN IN!</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d0d0d0',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });