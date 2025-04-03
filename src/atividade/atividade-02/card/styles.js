import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        padding: RFPercentage(2),
        borderRadius: RFPercentage(2),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: RFPercentage(2),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    containerTexto: {
        width: '65%',
    },
    titulo: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        color: '#333',
        marginBottom: RFPercentage(1),
        padding: RFPercentage(1)
    },
    descricao: {
        fontSize: RFPercentage(2.1),
        color: '#666',
        marginBottom: RFPercentage(1),
        lineHeight: RFPercentage(2.0),
        textAlign: 'left',
        padding: RFPercentage(1)

    },
    valor: {
        fontSize: RFPercentage(2.5),
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#4CAF50',
        paddingVertical: RFPercentage(1),
        paddingHorizontal: RFPercentage(2),
        borderRadius: RFPercentage(1.1),
        overflow: 'hidden',
        alignSelf: 'flex-start',
        marginBottom: RFPercentage(1),
        marginLeft: RFPercentage(1),
        shadowColor: '#4CAF50',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        
    },
    imagem: {
        height: RFPercentage(17),
        width: RFPercentage(17),
        resizeMode: 'cover',
        borderRadius: RFPercentage(1),
        marginLeft: RFPercentage(1),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
});

export default styles;
