import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Container, Icon, Text, View } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";

const EditorOptionsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <Container style={styles.container}>
      <View style={styles.viewContainer} />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
          route.params.onHandleOption("piture");
        }}
      >
        <View style={styles.view}>
          <Icon name="image" type="Feather" style={styles.icon} />
          <Text>Adicionar imagem</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
          route.params.onHandleOption("list");
        }}
      >
        <View style={styles.view}>
          <Icon name="checksquareo" type="AntDesign" style={styles.icon} />
          <Text>Caixas de seleção</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
          route.params.onHandleOption("text");
        }}
      >
        <View style={styles.view}>
          <Icon name="pencil" type="EvilIcons" style={styles.icon} />
          <Text>Nota</Text>
        </View>
      </TouchableOpacity>
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
