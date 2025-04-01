import { StyleSheet } from 'react-native';  

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: RFPercentage(2),
        alignItems: 'center',
        justifyContent: 'flex-start',  // Garante que o título fique no topo
    },
    titulo: {
        fontSize: RFPercentage(3.5),
        fontWeight: 'bold',
        color: 'darkslategrey',
        marginBottom: RFPercentage(1),
        marginLeft: RFPercentage(10),
        marginRight: RFPercentage(10),
    },
    valor: {
        fontSize: RFPercentage(2.5),
        color: '#black',  // Cor chamativa para o preço
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: RFPercentage(1),
        padding: RFPercentage(1),
        backgroundColor: '#ffff',  // Fundo suave para destacar o preço
        borderRadius: RFPercentage(1),
        width: '80%',  // Ajuste de largura para o preço ficar centralizado e destacado
        marginTop: RFPercentage(2),
      },
});

export default styles;