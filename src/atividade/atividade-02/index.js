import { View, Text, Image } from "react-native";

import styles from "./styles";

import img from "../../../assets/Camiseta1.png";
import img2 from "../../../assets/Camiseta2.png";
import img3 from "../../../assets/Camiseta3.png";

import Anuncio from "./card";

function Atividade02() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atividade 2</Text>
      <Image source={img} style={styles.imagem} />

      <Anuncio titulo={"Camiseta Corinthians 2020"}>
        Valor enviado corretamente!
         </Anuncio>
      <Anuncio titulo={"Camiseta Corinthians 2022"}>
        O progama não respondeu como esperado!
         </Anuncio>
      <Anuncio titulo={"Camiseta Corinthians 2024"}>
        Você não pode fazer isso!
        </Anuncio>
      
    </View>
  );
}

export default Atividade02;
