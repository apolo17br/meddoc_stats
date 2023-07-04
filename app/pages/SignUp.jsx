import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SignUp() {
    return (
      <View style={styles.container}>
        <Text>SIGN UP!</Text>
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