import React from "react";
import { StyleSheet } from "react-native";
import { Container, Item, Input, Icon, Text, Content, View } from "native-base";

const EditorOptionsScreen = () => {
  return (
    <Container style={styles.container}>
      <View style={styles.viewContainer} />
      <View style={styles.view}>
        <Icon name="image" type="Feather" style={styles.icon} />
        <Text>Adicionar imagem</Text>
      </View>
      <View style={styles.view}>
        <Icon name="checksquareo" type="AntDesign" style={styles.icon} />
        <Text>Caixas de seleção</Text>
      </View>
      <View style={styles.view}>
        <Icon name="pencil" type="EvilIcons" style={styles.icon} />
        <Text>Nota</Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "transparent"
  },
  view: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: "center"
  },
  icon: {
    marginRight: 20,
    color: "#7a7a7a",
    fontSize: 20
  },
  viewContainer: {
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -3
    },
    shadowColor: "#000000",
    elevation: 4,
    height: 5,
    backgroundColor: "white"
  }
});

export default EditorOptionsScreen;
