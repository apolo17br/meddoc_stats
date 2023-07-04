import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {

  return(

    <SafeAreaView style={{flex:1}}>
        <LinearGradient 
            colors={['#38b6ff', '#fff']} 
            style={{height:'100%', width:'100%', alignContent:'center', justifyContent:'center', overflow:'hidden'}}
        >
          <View style={{flex:1, margin:'5%', alignItems:'center'}}>
            <Image
              source={require('../../assets/img/logo.png')}
              style={styles.logo}
            />
            <Text style={styles.slogan}>A MEDICINA EM SUAS MÃOS</Text>
          </View>

          <View style={styles.touch}>
            <TouchableOpacity>

            </TouchableOpacity>
          </View>
        </LinearGradient>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    resizeMode:'stretch',
    height:168,
    width:176
  },
  slogan: {
    color:'#e0aa3e',
    fontSize:20,
    fontFamily:'Inter-Black'
  },
  touch: {
    backgroundColor:'#fff',
    borderRadius:12,
    height:32,
    width:64,
    alignSelf:'center',

  }
})
  