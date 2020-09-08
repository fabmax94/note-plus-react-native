import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import { Container, Card, CardItem, Content, Body } from "native-base";

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
  }
];
const ListCard = () => {
  const renderItem = ({ item }) => (
    <Content>
      <Card>
        <CardItem header>
          <Text style={styles.title}>{item.title}</Text>
        </CardItem>
        <CardItem>
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
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold"
  }
});

export default ListCard;
