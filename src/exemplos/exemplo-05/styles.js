import { StyleSheet, TextInput } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';


const styles = StyleSheet.create({
    container: { // caixa branca a frente do background
        flex: 1, // container ocupa 100% da tela
        justifyContent: 'center', // alinhamento vertical
        backgroundColor: '#FF80AB',
        padding: 8,
    },
    paragraph: {
        margin: 6,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#C51162',
    },

});


export default styles;