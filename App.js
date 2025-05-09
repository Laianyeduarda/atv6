import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Avatar, Badge, Icon, ListItem } from 'react-native-elements';

export default function App() {
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/mensagens')
      .then(response => response.json())
      .then(data => setMensagens(data))
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

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
