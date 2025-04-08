import { useState } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native'; 

import styles from './styles';

function Atividade03 () {

    const [numero, setnumero] = useState(0);

    function handleIncrementa() {
        setnumero(numero + 1);
    }

    function handleDiscrementa() {
        setnumero(numero - 1);
    }

    function handleReset() {
        setnumero(0);
    }

     function handleExibeBotao() {
        Alert.alert('Alerta', 'Alguém clicou no botão!')
        
     }

     const handleExibeBotao2 = () => {

        Alert.alert(
            'Alerta', 
            'Alguém clicou no botão 2!',
        [
            {
            text: 'Sim',
            onPress: () => Alert.alert('Mensagem', 'Clicou em Sim'),
            style: 'default',
            },
            {
            text: 'Não',
            onPress: () => Alert.alert('Clicou em não'),
            style: 'default',
            },
            {
            text: 'Cancelar',
            onPress: () => Alert.alert('Clicou em cancelar'),
            style: 'default',
            },
        ]);
        
     }
     
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>

            <Text style={styles.valorMais}>{numero}</Text>          
            <TouchableOpacity style={styles.botao} onPress={handleIncrementa}>
                <Text style={styles.txtBotao}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={handleDiscrementa}>
                <Text style={styles.txtBotao}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoReset} onPress={handleReset}>
                <Text style={styles.txtBotaoReset}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Atividade03;