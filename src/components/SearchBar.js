import React from "react";
import { Text, StyleSheet } from "react-native";
import { Container, Header, Item, Icon, Input, Button } from "native-base";

const SearchBar = () => {
  return (
    <Header
      searchBar
      rounded
      style={styles.buttonContainer}
      androidStatusBarColor="#fbbc04"
    >
      <Item>
        <Icon name="ios-search" />
        <Input
          placeholder="Pesquisar suas notas"
          placeholderTextColor="#bcbfc1"
        />
        <Icon name="ios-people" />
      </Item>
      <Button transparent>
        <Text>Search</Text>
      </Button>
    </Header>
  );
};

const styles = StyleSheet.create({

  input: {
    color: "#bcbfc1"
  },
  buttonContainer: {
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
  }
});

export default SearchBar;
