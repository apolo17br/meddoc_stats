import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export function ActionModalEspecialidade({ handleClose }) {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.title}>Especialidade</Text>

                <View style={{ justifyContent: 'center' }}>

                    <TouchableOpacity style={styles.buttonPlantao} onPress={() => navigation.navigate('OnDutyChild')}>
                        <Text style={styles.buttonText}>SELECIONAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonCancelar} onPress={handleClose}>
                        <Text style={styles.buttonText}>CANCELAR</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        marginVertical: '16px',
        marginHorizontal: '16px',
        height: '400px',
        width: '350px',
        backgroundColor: '#fff',
        padding: '42px',
        borderRadius: '15px'
    },
    title: {
        fontFamily:'Inter',
        fontSize:'22px',
        color:'#c0bbbb',
        fontWeight:'800',
        marginBottom:'32px'
    },
    values: {
        paddingHorizontal: '8px',
        paddingVertical: '8px',
        backgroundColor: '#f0f0f0',
        width: '120px',
        borderRadius: '15px',
    },
    buttonPlantao: {
        zIndex: 99,
        borderRadius: 12,
        paddingHorizontal: '32px',
        paddingVertical: '8px',
        backgroundColor: '#38b6ff',
        alignItems: 'center',
        width: '100%',
        height: '60px',
        justifyContent: 'center',
        marginTop: '8px'
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Inter',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600'
    },
    buttonCancelar: {
        zIndex: 99,
        borderRadius: 12,
        paddingHorizontal: '32px',
        paddingVertical: '8px',
        backgroundColor: '#A0AEC0',
        alignItems: 'center',
        width: '100%',
        height: '60px',
        justifyContent: 'center',
        marginTop: '8px'
    }
})