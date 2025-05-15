import { StyleSheet, TextInput } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';


const styles = StyleSheet.create({
    container: { // caixa branca a frente do background
        flex: 1, // container ocupa 100% da tela
        backgroundColor: 'whitesmoke',
        borderRadius: 3, // espessura da borda
        // padding: 8, // espaço interno
        width: '100%',
        height: 80,
        alignItems: 'center', // alinhamento horizontal
        textAlign:'center', //alinhamento horizontal do texto do container
        textAlignVertical:'center', // alinhamento vertical do texto
        color: 'white',
        fontWeight: 'bold',
    },
    titulo: {
        fontSize: RFPercentage(4), // tamanho da fonte
        fontWeight: 'bold', 
        borderWidth: 3, // expessura da borda
        marginTop: 10, // margem acima do elemento
        marginBottom: 10, // margem abaixo do elemento
        // padding: 8, // espaço interno
        width: '90%', // largura do objeto
        height: 68, // altura do objeto 
        textAlign: 'center', // alinhamento horizontal do texto no container
        textAlignVertical: 'center', // alinhamento vertical do texto no container
        color: '#E91E63', // cor do texto 
        borderColor: '#E91E63', // cor da borda 
        borderRadius: 20, // arrendondar borda
    },
    texto: {
        fontSize: RFPercentage(2.2),
    },
    txtSaida : {
        margin: 6,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#E91E63',
  
    },
    txtEntrada: { // input
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 15,
        borderColor: '#E91E63',
        height: 40,
        width: RFPercentage(40),
        color: '#E53935',
        borderRadius: 5,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#E91E63',
        height: 38,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 15,
        margin: RFPercentage(0.3),
    },
    buttonZerar: {
        backgroundColor: '#E91E63',
        height: 38,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 15,
        margin: RFPercentage(0.3),
        width: RFPercentage(10),
    },
    textButton: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
        width: RFPercentage(10),
        fontWeight: 'bold',
    },
    textLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#C51162',
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 8,
    }
  });


export default styles;

