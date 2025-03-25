import { View, Text } from 'react-native'; 

import styles from './styles';

function Anuncio({titulo, children}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.Anuncio}>{children}</Text>
        </View>
    );
}

export default Anuncio;