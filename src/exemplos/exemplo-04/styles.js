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
        
        fontSize: RFPercentage(2.5), //tamanho da fonte (uso mobile)
        borderWidth: 3, // grossura da bordinha gostosa
        marginTop: 20, // espaço da parte de cima
        marginBottom: 20, // espaço da parte de baixo
        color: 'lightblue', // cor do texto
        borderColor: 'lightblue', // cor da borda
        borderRadius: 20, //arredondar borda
        textAlign: 'auto',
        padding: 2,

    },

    texto: {
        fontSize: RFPercentage(2.2),
    },

    txtInput: {
        borderWidth: RFPercentage(0.4),
        borderColor: 'black',
        color: 'blue',
        fontSize: RFPercentage(2.2),
        width: '90%',
        borderRadius: RFPercentage(2),
        marginVertical: RFPercentage(1.5)
        
    },

    botao: {
        backgroundColor: 'lightblue',
        width: '75%',
        borderRadius: RFPercentage(2),
        padding: RFPercentage(1.5),
        alignItems: 'center',
        justifyContent: 'center',
        margin: RFPercentage(2),

    },
    txtBotao: {
        fontSize: RFPercentage(2),
        color: '#fafafa',

    },
    subTitulo: {
        fontSize: RFPercentage(3), //tamanho da fonte (uso mobile)
        borderWidth: 3, // grossura da bordinha gostosa
        marginTop: 20, // espaço da parte de cima
        marginBottom: 20, // espaço da parte de baixo
        color: 'black', // cor do texto
        borderColor: 'lightblue', // cor da borda
        borderRadius: 20, //arredondar borda
        textAlign: 'auto',
        padding: 5,
    },
});


export default styles;