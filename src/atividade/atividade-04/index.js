import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

function Atividade04() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');

  const handleVisualizar = () => {
    setNomeCompleto(`${nome} ${sobrenome}`);
    setNome('');
    setSobrenome('');
  };

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Atividade 04</Text>
      <Text style={styles.texto}>
        {nomeCompleto ? `Nome completo: ${nomeCompleto}` : ''}
      </Text>
      
      <Text style={styles.nome}>Nome:</Text>
      <TextInput 
        style={styles.txtInput} 
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.nome}>Sobrenome:</Text>
      <TextInput 
        style={styles.txtInput} 
        placeholder="Digite seu sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />

      <TouchableOpacity 
        style={styles.botao}
        onPress={handleVisualizar}
      >
        <Text style={styles.txtBotao}>Exibir Texto</Text>
      </TouchableOpacity>

    </View>
  );
}

export default Atividade04;