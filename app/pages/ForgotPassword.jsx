import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ForgotPassword() {
    return (
      <View style={styles.container}>
        <Text>FORGOT PASSWORD!</Text>
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