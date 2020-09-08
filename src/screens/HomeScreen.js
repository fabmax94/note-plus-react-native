import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Container } from "native-base";
import SearchBar from "../components/SearchBar";
import ListCard from "../components/ListCard";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Container style={styles.containerSearchBar}>
        <SearchBar />
      </Container>
      <Container style={styles.containerListCard}>
        <ListCard />
      </Container>
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
  }
});

export default HomeScreen;
