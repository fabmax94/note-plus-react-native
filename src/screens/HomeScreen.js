import React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Container, Fab, Icon } from "native-base";
import SearchBar from "../components/SearchBar";
import ListCard from "../components/ListCard";
import useFirebase from "../hooks/useFirebase";
import { useIsFocused } from "@react-navigation/native";
import changeNavigationBarColor from "react-native-navigation-bar-color";

const HomeScreen = ({ navigation }) => {
  changeNavigationBarColor("#ffffff");
  const [notes] = useFirebase(useIsFocused(), "note");
  return (
    <SafeAreaView style={styles.container}>
      <Container style={styles.containerSearchBar}>
        <SearchBar />
      </Container>
      <Container style={styles.containerListCard}>
        <ListCard items={notes} />
      </Container>
      <Fab
        direction="up"
        position="bottomRight"
        style={styles.fab}
        onPress={() => navigation.navigate("CreateNoteScreen")}
      >
        <Icon type="FontAwesome" name="plus" />
      </Fab>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerSearchBar: {
    padding: 10
  },
  containerListCard: {
    padding: 5,
    flex: 12
  },
  container: {
    backgroundColor: "white",
    flex: 1
  },
  fab: {
    backgroundColor: "#fbbc04"
  }
});

export default HomeScreen;
