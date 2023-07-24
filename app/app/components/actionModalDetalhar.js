import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { IoCalendarClearOutline, IoTimeOutline, IoLocationOutline } from 'react-icons/io5';

export function ActionModalDetalhar({ handleClose, onPress }) {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.text}>Dr. Fulano de Tal</Text>
                <Text style={{ color: '#000', fontFamily: 'Inter', fontSize: 18 }}>Tipo do atendimento</Text>

                <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', rowGap:'8px'}}>
                    <View style={{ flexDirection: 'row' }}>
                        <IoCalendarClearOutline style={{ height: '20px', width: '20px' }} />
                        <Text style={{ fontFamily: 'Inter', fontSize: '18px', paddingLeft: '8px' }}>XX/XX/XXXX</Text>
                    </View>
                    <View style={{ flexDirection: 'row'}}>
                        <IoTimeOutline style={{ height: '20px', width: '20px' }} />
                        <Text style={{ fontFamily: 'Inter', fontSize: '18px', paddingLeft: '8px' }}>XXhXX</Text>
                    </View>
                    <View style={{ flexDirection: 'row'}}>
                        <IoLocationOutline style={{ height: '20px', width: '20px' }} />
                        <Text style={{ fontFamily: 'Inter', fontSize: '18px', paddingLeft: '8px' }}>Itajaí/SC</Text>
                    </View>

                    <TouchableOpacity style={{marginVertical:'16px', alignSelf:'center'}}>
                        <Text style={styles.report}>Reportar um problema</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.voltar}onPress={handleClose}>
                        <Text style={styles.voltarText}>Voltar</Text>
                    </TouchableOpacity>
                </View>

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
        height: '350px',
        width: '350px',
        backgroundColor: '#fff',
        padding: '32px',
        borderRadius: '15px',
        gap: '16px'
    },
    text: {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: '22px',
        fontWeight: '600'
    },
    voltar: {
        zIndex: 99,
        borderRadius: 12,
        paddingVertical: '8px',
        backgroundColor: '#A0AEC0',
        alignItems: 'center',
        alignSelf:'center',
        width: '100%',
        height: '50px',
        justifyContent: 'center',
    },
    voltarText: {
        fontFamily:'Inter',
        fontSize:20,
        color:'#fff',
        fontWeight:'500'
    },
    report: {
        fontFamily:'Inter',
        fontSize:16,
        fontWeight:'600',
        textDecorationLine:'underline',
        color:'#A0AEC0'
    }
})