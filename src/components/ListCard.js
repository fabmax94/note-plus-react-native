import React from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Card, CardItem, Content, Body, Text } from "native-base";
import FormItems from "./FormItems";
import { useNavigation } from "@react-navigation/native";

const ListCard = ({ items }) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <Content>

      <Card style={styles.card}>
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateNoteScreen", {
            note: item
          })}>
          <CardItem header style={styles.cardItemHeader}>
            <Text style={styles.title}>{item.title}{item.id}</Text>
          </CardItem>
          <CardItem style={styles.cardItemBody}>
            <Body>
              {item.editorType === "list" ? (
                <FormItems items={item.items} onlyVisible={true}/>
              ) : (
                <Text note>{item.text}</Text>
              )}
            </Body>
          </CardItem>
        </TouchableOpacity>
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
      keyExtractor={item => item.key}
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
