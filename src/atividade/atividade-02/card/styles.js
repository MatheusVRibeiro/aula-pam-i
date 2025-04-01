import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,  // Garante que o container ocupe toda a tela
    padding: 15,  // Ajustei o padding para um valor mais confortável
    backgroundColor: '#f5f5f5',  // Cor de fundo para o container
    alignItems: 'center',  // Garante que os itens estejam centralizados
    justifyContent: 'flex-start',  // Garante que o título fique no topo
  },
  titulo: {
    fontSize: 25,  // Tamanho de fonte ajustado para o título
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,  // Margem maior para o título não colar no topo
    color: '#fff',  // Cor escura para o título
  },
  card: {
    backgroundColor: 'darkslategrey',  // Adicionei uma cor verde de fundo nos cards
    borderRadius: 10,
    marginBottom: 20,
    width: '90%',  // Largura ajustada para garantir que o card caiba bem na tela
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imagem: {
    width: '100%',  // A imagem vai ocupar toda a largura do card
    height: 180,  // Ajustei a altura para garantir que caiba na tela
    resizeMode: 'contain',  // Para não distorcer a imagem
    marginBottom: 14,  // Espaço entre a imagem e o texto
  },
  preco: {
    fontSize: 18,  // Tamanho da fonte do preço
    color: '#fff',  // Cor branca para o preço, para contrastar com o fundo verde
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,  // Espaço superior para que o preço não fique colado na imagem
  },
  Anuncio: {
    fontSize: 16,  // Tamanho adequado para o texto do anúncio
    color: '#fff',  // Cor branca para o texto do anúncio
    textAlign: 'center',
    marginTop: 10,  // Espaço superior para que o texto não fique colado em cima do preço
  },
});
