import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1, // container ocupa 100% da tela
    backgroundColor: 'whitesmoke',
    borderRadius: 3, // espessura da borda
    width: '100%',
    height: 80,
    alignItems: 'center', // alinhamento horizontal
    textAlign:'center', //alinhamento horizontal do texto do container
    textAlignVertical:'center', // alinhamento vertical do texto
    color: 'white',
    fontWeight: 'bold',
},
  titulo: {
    fontSize: RFPercentage(3.5),
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: RFPercentage(2),
    textAlign: 'center',
  },
  texto: {
    fontSize: RFPercentage(2.5),
    color: '#333',
    marginBottom: RFPercentage(3),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  nome: {
    width: '90%', 
    paddingLeft: RFPercentage(0.8), 
    color: 'darkslategrey',
    fontSize: RFPercentage(2.2),
    fontWeight: 'bold',
  },
  txtInput: {
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: RFPercentage(1.2),
    padding: RFPercentage(2),
    fontSize: RFPercentage(2.2),
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: RFPercentage(2),
  },
  botao: {
    backgroundColor: '#4CAF50',
    width: '90%',
    borderRadius: RFPercentage(1),
    padding: RFPercentage(2),
    marginTop: RFPercentage(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBotao: {
    fontSize: RFPercentage(2.5),
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default styles;
