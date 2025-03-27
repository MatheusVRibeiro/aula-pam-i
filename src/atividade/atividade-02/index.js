import { View, Text, Image, ScrollView } from "react-native";

import styles from "./styles";  // Estilos ajustados

import img from "../../../assets/Camiseta1.png";
import img2 from "../../../assets/Camiseta2.png";
import img3 from "../../../assets/Camiseta3.png";

import Card from "./card";  // Componente Card importado corretamente

function Atividade02() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Loja Virtual</Text>

      <Card titulo={"Camiseta Corinthians 2020"}>
        <Image source={img} style={styles.imagem} />
        <Text style={styles.preco}>Valor: R$249,99 à vista</Text>
      </Card>

      <Card titulo={"Camiseta Corinthians 2022"}>
        <Image source={img2} style={styles.imagem} />
        <Text style={styles.preco}>Valor: R$349,99 à vista</Text>
      </Card>

      <Card titulo={"Camiseta Corinthians 2024"}>
        <Image source={img3} style={styles.imagem} />
        <Text style={styles.preco}>Valor: R$549,99 à vista</Text>
      </Card>
    </View>
  );
}

export default Atividade02;
