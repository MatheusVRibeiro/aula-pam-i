import { View, Text, Image, ScrollView } from "react-native";

import styles from "./styles";  // Estilos ajustados

import Camiseta1 from "../../../assets/Camiseta1.png";
import Camiseta2 from "../../../assets/Camiseta2.png";
import Camiseta3 from "../../../assets/Camiseta3.png";

import Card from "./card";  // Componente Card importado corretamente

function Atividade02() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Loja Virtual</Text>

      <Card 
                titulo={'Camiseta Corinthians Nº 1'} 
                descricao={'Camisa de Jogador Profissional'} 
                valor={'249,99'}
                img={Camiseta1}
            />

      <Card 
                titulo={'Camiseta Corinthians Nº 2'} 
                descricao={'Camisa de Jogador Profissional'} 
                valor={'349,99'}
                img={Camiseta2}
            />

      <Card 
                titulo={'Camiseta Corinthians Nº 3'} 
                descricao={'Camisa de Jogador Profissional'} 
                valor={'549,99'}
                img={Camiseta3}
            />

      {/* <Card titulo={"Camiseta Corinthians 2022"}>
        <Image source={img2} style={styles.imagem} />
        <Text style={styles.preco}>Valor: R$349,99 à vista</Text>
      </Card>

      <Card titulo={"Camiseta Corinthians 2024"}>
        <Image source={img3} style={styles.imagem} />
        <Text style={styles.preco}>Valor: R$549,99 à vista</Text>
      </Card> */}
    </View>
  );
}

export default Atividade02;
