import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#eee',
        padding: RFValue(12),
        alignItems: 'center',
        borderRadius: RFValue(20),
        justifyContent: 'space-between',
    },
    titulo: {
        marginVertical: RFValue(10),
        fontSize: RFValue(20),
        fontWeight: 'bold',
        color: '#333', // mais escuro para melhor contraste
        textAlign: 'center',
    },
    ladoalado: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: RFValue(10),
        marginVertical: RFValue(40),
    },
    imc: {
        color: '#444', // cor mais escura
        fontSize: RFValue(45),
        fontWeight: 'bold',
        marginVertical: RFValue(15),
        textAlign: 'center',
    },
    txtMensagem: {
        fontSize: RFValue(28),
        color: '#666',
        textAlign: 'center',
        marginVertical: RFValue(10),   
    }
});

export default styles;
