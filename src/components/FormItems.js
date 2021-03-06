import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  Item,
  Input,
  Button,
  Icon,
  Text,
  Content,
  View,
  CheckBox
} from "native-base";
import DraggableFlatList from "react-native-draggable-flatlist";

const FormItems = ({ items, onChange, onlyVisible }) => {
  const [itemList, setItemList] = useState(items);
  const [focusIndex, setFocusIndex] = useState(0);
  const handleChange = (index, newValue) => {
    itemList[index].text = newValue;
    setItemList(itemList);
    onChange(itemList);
  };
  const handleCheck = (index, newChecked) => {
    itemList[index].isChecked = newChecked;
    setItemList(itemList);
    onChange(itemList);
  };
  const deleteItem = indexToDelete => {
    setItemList(itemList.filter((item, index) => index != indexToDelete));
    onChange(itemList.filter((item, index) => index != indexToDelete));
  };
  const addItem = () => {
    setItemList([...itemList, {isChecked: false, text: ""}]);
    onChange(itemList);
  };
  const showRow = (item, drag, index) => {
    if (onlyVisible) {
      return (
        <View style={styles.itemContainer}>
          <Icon
            name="drag"
            type="MaterialCommunityIcons"
            style={{ ...styles.iconDrag, fontSize: 18 }}
          />
          <Icon
            name={item.isChecked ? "checksquare" : "checksquareo"}
            type="AntDesign"
            style={{ ...styles.iconDrag, fontSize: 14 }}
          />
          <Text note style={{ alignSelf: "center", fontSize: 14 }}>
            {item.text}
          </Text>
        </View>
      );
    }
    return (
      <TouchableOpacity onLongPress={drag}>
        <View style={styles.itemContainer}>
          <Icon
            name="drag"
            type="MaterialCommunityIcons"
            style={styles.iconDrag}
          />
          <CheckBox checked={item.isChecked} onPress={() => handleCheck(index, !item.isChecked)} style={styles.checkbox} color="#7a7a7a" />
          <Item style={styles.item}>
            <Input
              value={item.text}
              onChangeText={text => handleChange(index, text)}
              style={styles.input}
              autoFocus={true}
              returnKeyType="go"
              onFocus={() => setFocusIndex(index)}
              onSubmitEditing={addItem}
            />
          </Item>
          {index === focusIndex ? (
            <Button onPress={() => deleteItem(index)} transparent>
              <Icon name="close" family="EvilIcons" style={styles.iconDelete} />
            </Button>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Content>
      {!onlyVisible ? (
        <>
          <View style={styles.listContainer}>
            <DraggableFlatList
              data={itemList}
              renderItem={({ item, index, drag, isActive }) =>
                showRow(item, drag, index)
              }
              keyExtractor={(item, index) => `ìtems${index}`}
              onDragEnd={({ data }) => {
                setItemList([...data]);
                onChange([...data]);
              }}
            />
          </View>
          <TouchableOpacity onPress={addItem}>
            <View style={styles.viewAdd}>
              <Button transparent>
                <Icon name="plus" type="FontAwesome" style={styles.iconAdd} />
              </Button>
              <Text style={styles.textAdd}>Item da lista</Text>
            </View>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.listContainer}>
          {itemList.map((item, index) =>
            showRow(item, () => console.log("mock drag"), index)
          )}
        </View>
      )}
    </Content>
  );
};

const styles = StyleSheet.create({
  iconDelete: {
    color: "#7a7a7a"
  },
  textAdd: {
    color: "#a7a6a6"
  },
  iconDrag: {
    alignSelf: "center",
    marginRight: 5,
    color: "#a7a6a6"
  },
  iconAdd: {
    color: "#7a7a7a",
    fontSize: 18
  },
  viewAdd: {
    flexDirection: "row",
    paddingLeft: 30,
    alignItems: "center"
  },
  listContainer: {
    marginTop: 10
  },
  itemContainer: {
    flexDirection: "row",
    height: 40
  },
  item: {
    flex: 1,
    borderColor: "transparent"
  },
  input: {
    color: "#4d4e52"
  },
  checkbox: {
    marginRight: 20,
    alignSelf: "center"
  }
});

export default FormItems;
