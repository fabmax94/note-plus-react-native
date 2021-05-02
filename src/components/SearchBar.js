import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { Item, Icon, Input, View } from "native-base";

const SearchBar = ({query, setQuery}) => {
  return (
    <View>
      <StatusBar backgroundColor="white" barStyle="dark-content"/>
      <View style={styles.buttonContainer}>
        <Item regular style={styles.item}>
          <Icon name="ios-search" style={styles.icon}/>
          <Input
            placeholder="Pesquisar suas notas"
            placeholderTextColor="#bcbfc1"
            value={query}
            onChangeText={setQuery}
          />
        </Item>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: "#737373"
  },
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
  },
  item: {
    borderRadius: 10
  }
});

export default SearchBar;
