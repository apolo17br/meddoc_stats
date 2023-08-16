import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

export function ActionModalPlantao({ handleClose, onPress }) {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.content}>

                <Image
                    source={require('../../assets/img/plantao.png')}
                    style={{ height: '128px', width: '128px' }}
                />

                <TouchableOpacity style={styles.buttonPlantao} onPress={() => navigation.navigate('OnDutyAdult')}>
                    <Text style={styles.buttonText}>PLANTÃO ADULTO</Text>
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Inter', fontSize: 14, color: '#a0aec0', fontStyle: 'italic', alignSelf: 'flex-start' }}>Acima de 14 anos</Text>

                <TouchableOpacity style={styles.buttonPlantao} onPress={() => navigation.navigate('OnDutyChild')}>
                    <Text style={styles.buttonText}>PLANTÃO PEDIÁTRICO</Text>
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Inter', fontSize: 14, color: '#a0aec0', fontStyle: 'italic', alignSelf: 'flex-start' }}>Até 13 anos e 11 meses</Text>

                <TouchableOpacity style={styles.buttonCancelar} onPress={handleClose}>
                    <Text style={styles.buttonText}>CANCELAR</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        marginVertical: '16px',
        marginHorizontal: '16px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        width: '350px',
        backgroundColor: '#fff',
        padding: '42px',
        borderRadius: '15px'
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