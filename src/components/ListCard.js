import React from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Card, CardItem, Content, Body, Text } from "native-base";
import FormItems from "./FormItems";
import { useNavigation } from "@react-navigation/native";

const ListCard = ({ items, onLongPress, selectedItems, query }) => {
  const navigation = useNavigation();
  const onClick = (item) => {
    if (!selectedItems.length) {
      navigation.navigate("CreateNoteScreen", { note: item });
    } else {
      onLongPress(item);
    }
  };
  const renderItem = ({ item }) => (
    <Content>
      <Card style={styles.card}>
        <TouchableOpacity
          onPress={() => onClick(item)}
          onLongPress={() => onLongPress(item)}>
          <CardItem header style={selectedItems.includes(item)
            ? { ...styles.cardItemHeader, ...styles.cardHeaderSelected }
            : styles.cardItemHeader}>
            <Text style={styles.title}>{item.title}{item.id}</Text>
          </CardItem>
          <CardItem style={selectedItems.includes(item)
            ? { ...styles.cardItemBody, ...styles.cardBodySelected }
            : styles.cardItemBody}>
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
      data={items.filter(item => !query || item.title.includes(query) || item.text.includes(query))}
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
  cardHeaderSelected: {
    borderColor: "rgba(156,156,156,0.62)",
    borderWidth: 5,
    borderBottomWidth: 0
  },
  cardBodySelected: {
    borderColor: "rgba(156,156,156,0.62)",
    borderWidth: 5,
    borderTopWidth: 0
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
