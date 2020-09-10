import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Card, CardItem, Content, Body, Text } from "native-base";

const DATA = [
  {
    id: 5,
    title: "Automação trabalho",
    text: "Esta automação blçaalblabla\nvai dar mutio certo"
  },
  {
    id: 6,
    title: "BI",
    text: "Esta automação blçaalblabla\nvai dar mutio certo"
  },
  {
    id: 7,
    title: "Compras para fazer",
    text:
      "comprar 1\ndepois temos que comprar o outro pq nao tem como bla bla\n isso mesmo cara nao vamos"
  },
  {
    id: 8,
    title: "BI",
    text: "Esta automação blçaalblabla\nvai dar mutio certo"
  }
];
const ListCard = () => {
  const renderItem = ({ item }) => (
    <Content>
      <Card style={styles.card}>
        <CardItem header style={styles.cardItemHeader}>
          <Text style={styles.title}>{item.title}</Text>
        </CardItem>
        <CardItem style={styles.cardItemBody}>
          <Body>
            <Text note>{item.text}</Text>
          </Body>
        </CardItem>
      </Card>
    </Content>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      columnWrapperStyle={{
        flex: 1,
        justifyContent: "space-between",
        alignContent: "space-between",
        alignItems: "space-between"
      }}
      numColumns={2}
      keyExtractor={item => item.id}
      key={DATA.length}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold"
  },
  card: {
    width: "95%",
    borderRadius: 8
  },
  cardItemHeader: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  cardItemBody: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  }
});

export default ListCard;
