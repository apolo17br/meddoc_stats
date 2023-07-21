import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MyDoctors() {
    return (
      <View style={styles.container}>
        <Text>meus médicos!</Text>
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