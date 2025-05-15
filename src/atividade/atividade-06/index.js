import { useState } from 'react';
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';

export default function Atividade06() {
    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const [mensagem, setMensagem] = useState('');

    const mensErro = 'Valores inseridos de forma incorreta!';

    function MensagemImc(valor) {
        if (valor < 18.5) return 'Abaixo do peso';
        else if (valor >= 18.5 && valor <= 24.9) return 'Peso normal';
        else if (valor >= 25 && valor <= 29.9) return 'Sobrepeso';
        else if (valor >= 30 && valor <= 34.9) return 'Obesidade grau 1';
        else if (valor >= 35 && valor <= 39.9) return 'Obesidade grau 2';
        else return 'Obesidade grau 3';
    }

    function calculaImc() {
        const pesoFloat = parseFloat(peso);
        const alturaFloat = parseFloat(altura);

        if (isNaN(pesoFloat) || isNaN(alturaFloat) || alturaFloat === 0) {
            setImc(NaN);
            setMensagem(mensErro);
            return;
        }

        const tmpImc = pesoFloat / (alturaFloat * alturaFloat);
        setImc(tmpImc);
        setMensagem(MensagemImc(tmpImc));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 6</Text>
            <View style={styles.ladoalado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso} />
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura} />
            </View>
            <Botao calcular={calculaImc}>Calcular</Botao>

            <Text style={styles.imc}>
                {isNaN(imc) ? mensErro : `IMC: ${imc.toFixed(2)}`}
            </Text>
            {!isNaN(imc) && (
                <Text style={[styles.imc, styles.txtMensagem]}>{mensagem}</Text>
            )}
        </View>
    )
}
