import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';
import styles from './styles';

function Exemplo05() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [total, setTotal] = useState('');
  
    const Soma = () => {
      const result = parseFloat(num1) + parseFloat(num2);

      setTotal(result.toString());
    };
    const Subtracao = () => {
      const result = parseFloat(num1) - parseFloat(num2);

      setTotal(result.toString());
    };
    const Multiplicacao = () => {
      const result = parseFloat(num1) * parseFloat(num2);

      setTotal(result.toString());
    };
    const Divisao = () => {
      const result = parseFloat(num1) / parseFloat(num2);    

      setTotal(result.toString());
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Exemplo 5</Text>
  
        <Text style={styles.txtSaida}>Calculadora básica</Text>
  
        <Text style={styles.textLabel}>1º número</Text>
        <TextInput
          style={styles.txtEntrada}
          value={num1}
          onChangeText={setNum1}
          keyboardType="numeric"
        />
  
        <Text style={styles.txtSaida}>+</Text>
  
        <Text style={styles.textLabel}>2º número</Text>
        <TextInput
          style={styles.txtEntrada}
          value={num2}
          onChangeText={setNum2}
          keyboardType="numeric"
        />
  
        <Text style={[styles.txtSaida, { margin: 0 }]}>=</Text>
  
        <Text style={styles.textLabel}>Total</Text>
        <TextInput
          style={styles.txtEntrada}
          value={total}
          editable={false}
        />
        <View style={styles.containerButtons}>

            <TouchableOpacity style={styles.button} onPress={Soma}>
            <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={Subtracao}>
            <Text style={styles.textButton}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={Multiplicacao}>
            <Text style={styles.textButton}>*</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={(Divisao)}>
                <Text style={styles.textButton}>/</Text>
            </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.button} onPress={() => {
          setNum1('');
          setNum2('');
          setTotal('');
        }}>
          <Text style={styles.textButton}>Zerar</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
  
  export default Exemplo05;
  
