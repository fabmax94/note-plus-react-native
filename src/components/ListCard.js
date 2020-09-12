import React from "react";
import { FlatList, StyleSheet, ScrollView } from "react-native";
import {
  Card,
  CardItem,
  Content,
  Body,
  Text,
  Container,
  View
} from "native-base";

const ListCard = ({ items }) => {
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
      data={items}
      renderItem={renderItem}
      columnWrapperStyle={{
        flex: 1,
        justifyContent: "space-between",
        alignContent: "space-between",
        alignItems: "space-between"
      }}
      numColumns={2}
      keyExtractor={item => item.id}
      key={items.length}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold"
  },
  card: {
    borderRadius: 8,
    marginRight: 5,
    marginLeft: 5
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
