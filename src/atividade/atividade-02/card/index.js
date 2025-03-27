import { View, Text, Image } from 'react-native'; 

import styles from './styles';

function Card({titulo, children}) {
    return(
        <View style={styles.card}>
            <Text style={styles.titulo}>{titulo}</Text>
            {children} {/* Exibe o conteúdo passado */}
        </View>
    );
}

export default Card;
