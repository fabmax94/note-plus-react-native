import React from "react";
import { StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import {
  Body,
  Button,
  Icon,
  Left, Right, Text,
  Title, View
} from "native-base";

const ListOptions = ({ onCloseOptions, selectedCount, onDelete }) => {
  return <View>
    <StatusBar backgroundColor="white" barStyle="dark-content"/>
    <View style={styles.buttonContainer}>
      <Left style={{ flexDirection: "row" }}>
        <Button transparent onPress={onCloseOptions}>
          <Icon name="ios-close" style={styles.icon}/>
        </Button>
        <Text style={{
          alignSelf: "center",
          color: "#737373"
        }}>{selectedCount}</Text>
      </Left>
      <Body>
        <Title>Header</Title>
      </Body>
      <Right>
        <Button transparent onPress={onDelete}>
          <Icon name="trash" style={styles.icon}/>
        </Button>
      </Right>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  icon: {
    color: "#737373"
  },
  buttonContainer: {
    borderColor: "rgba(156,156,156,0.62)",
    borderWidth: 1,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 0,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  item: {
    borderRadius: 10
  }
});

export default ListOptions;