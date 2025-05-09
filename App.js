import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Avatar, Badge, Icon, ListItem } from 'react-native-elements';

const mensagens = [
  {
    id: '1',
    nome: 'Taylor Swift',
    mensagem: 'Faça mais do que ama.',
    tempo: 'Há 3 min',
    naoLidas: 3,
    avatar: 'https://recreio.com.br/media/_versions/2025/05/gettyimages-2166943469_capa_widelg.jpg',
  },
  {
    id: '2',
    nome: 'Samuel Mariano',
    mensagem: 'Você é capaz. Deus abençoe!',
    tempo: 'Há 5 min',
    naoLidas: 1,
    avatar: 'https://akamai.sscdn.co/uploadfile/letras/fotos/0/4/0/4/0404a6861751cfb03c647f4c8bcd2aa9.jpg',
  },
  {
    id: '3',
    nome: 'Sabrina Carpenter',
    mensagem: 'Gentileza é linda.',
    tempo: 'Há 1h',
    naoLidas: 2,
    avatar: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/07/18/516965782-sabrina-carpenter-anuncia-turne-pela-europa-em-2025.png',
  },
  {
    id: '4',
    nome: 'Shakira',
    mensagem: 'Viva seu propósito.',
    tempo: 'Há 2h',
    naoLidas: 1,
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2902.jpg',
  },
  {
    id: '5',
    nome: 'Larissa Manoela (Milho)',
    mensagem: 'Você consegue.',
    tempo: 'Há 5h',
    naoLidas: 0,
    avatar: 'https://s2.glbimg.com/2LPPXAo3wa_VRQxiXkMt0DMC1zk=/640x424/i.glbimg.com/og/ig/infoglobo/f/original/2022/02/21/larissa-2.jpg',
  },
  {
    id: '6',
    nome: 'Rihanna',
    mensagem: 'Você é incrível.',
    tempo: 'Ontem',
    naoLidas: 0,
    avatar: 'https://akamai.sscdn.co/tb/letras-news/wp-content/uploads/2025/05/3777125-rihanna-met-gala-1024x844.jpg',
  },
  {
    id: '7',
    nome: 'Chico Kin',
    mensagem: 'Mantenha simples.',
    tempo: 'Ontem',
    naoLidas: 0,
    avatar: 'https://img.a.transfermarkt.technology/portrait/big/349166-1661911119.jpg?lm=1',
  },
];

export default function App() {
  const renderizarItem = ({ item }) => (
    <ListItem bottomDivider>
      <Avatar rounded source={{ uri: item.avatar }} />
      <ListItem.Content>
        <ListItem.Title style={estilos.nome}>{item.nome}</ListItem.Title>
        <ListItem.Subtitle>{item.mensagem}</ListItem.Subtitle>
      </ListItem.Content>
      <View style={estilos.secaoDireita}>
        <Text style={estilos.tempo}>{item.tempo}</Text>
        {item.naoLidas > 0 && (
          <Badge value={item.naoLidas} status="primary" containerStyle={{ marginTop: 5 }} />
        )}
      </View>
    </ListItem>
  );

  return (
    <View style={estilos.container}>
      <View style={estilos.cabecalho}>
        <Icon name="email" type="material" color="#fff" size={28} />
        <Text style={estilos.textoCabecalho}>Mensagens & Chat</Text>
      </View>

      <View style={estilos.opcoes}>
        <Text>Marcar todas como lidas</Text>
        <Text style={estilos.textoOrdenar}>Ordenar por tempo ▼</Text>
      </View>

      <FlatList
        data={mensagens}
        keyExtractor={item => item.id}
        renderItem={renderizarItem}
      />

      <View style={estilos.rodape}>
        <Icon name="home" type="feather" />
        <Icon name="message-circle" type="feather" color="#3a4f9a" />
        <Icon name="mail" type="feather" />
        <Icon name="user" type="feather" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  cabecalho: {
    backgroundColor: '#3a4f9a',
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  textoCabecalho: {
    color: '#fff',
    fontSize: 18,
    marginTop: 6,
    fontWeight: 'bold',
  },
  opcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#f5f5f5',
  },
  textoOrdenar: {
    color: '#3a4f9a',
    fontWeight: '500',
  },
  nome: {
    fontWeight: 'bold',
  },
  tempo: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
  secaoDireita: {
    alignItems: 'flex-end',
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
  },
});
