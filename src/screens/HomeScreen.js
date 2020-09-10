import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Container, Fab, Icon, Button } from "native-base";
import SearchBar from "../components/SearchBar";
import ListCard from "../components/ListCard";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Container style={styles.containerSearchBar}>
        <SearchBar />
      </Container>
      <Container style={styles.containerListCard}>
        <ListCard />
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
