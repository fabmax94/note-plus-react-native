import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { View, Fab, Icon } from "native-base";
import SearchBar from "../components/SearchBar";
import ListCard from "../components/ListCard";
import useFirebase from "../hooks/useFirebase";
import { useIsFocused } from "@react-navigation/native";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import ListOptions from "../components/ListOptions";

const HomeScreen = ({ navigation }) => {
  changeNavigationBarColor("white", true, true);
  const [notes, , remove] = useFirebase(useIsFocused(), "note");
  const [isShowOptions, setShowOptions] = useState(false);
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [query, setQuery] = useState("");
  const onLongPressList = (item) => {
    let newSelectedNotes;
    if (selectedNotes.includes(item)) {
      newSelectedNotes = selectedNotes.filter(note => note !== item);
    } else {
      newSelectedNotes = [...selectedNotes, item];
    }
    setSelectedNotes(newSelectedNotes);
    setShowOptions(newSelectedNotes.length > 0);
  };
  const onCloseOptions = () => {
    setSelectedNotes([]);
    setShowOptions(false);
  };
  const onDelete = () => {
    selectedNotes.forEach(note => {
      remove(note);
    });
    onCloseOptions();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerSearchBar}>
        {isShowOptions ? <ListOptions onCloseOptions={onCloseOptions}
                                      selectedCount={selectedNotes.length}
                                      onDelete={onDelete}/> :
          <SearchBar query={query} setQuery={setQuery}/>}
      </View>
      <View style={styles.containerListCard}>
        <ListCard items={notes} onLongPress={onLongPressList}
                  selectedItems={selectedNotes} query={query}/>
      </View>
      <Fab
        direction="up"
        position="bottomRight"
        style={styles.fab}
        onPress={() => navigation.navigate("CreateNoteScreen")}
      >
        <Icon type="FontAwesome" name="plus"/>
      </Fab>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerSearchBar: {
    paddingHorizontal: 10,
    paddingTop: 10,
    height: 60
  },
  containerListCard: {
    padding: 5

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
