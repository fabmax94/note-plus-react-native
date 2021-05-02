import React, { useState } from "react";
import { View, Container } from "native-base";
import HeaderForm from "../components/HeaderForm";
import FormOptions from "../components/FormOptions";
import NoteForm from "../components/NoteForm";
import { StyleSheet } from "react-native";
import useFirebase from "../hooks/useFirebase";
import changeNavigationBarColor from "react-native-navigation-bar-color";

const CreateNoteScreen = ({ route }) => {
  changeNavigationBarColor("white", true, true);
  const [, setNote] = useFirebase(false, "note");
  const [type, setType] = useState(route.params?.note.editorType || "text");
  return (
    <Container>
      <View style={styles.containerHeaderForm}>
        <HeaderForm/>
      </View>
      <View style={styles.containerNoteForm}>
        <NoteForm onHandleSave={setNote} preNote={route.params?.note} editorType={type}/>
      </View>
      <View style={styles.containerFormOptions}>
        <FormOptions onHandleOption={setType}/>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerNoteForm: {
    flex: 1
  },
  containerFormOptions: {

  },
  containerHeaderForm: {

  }
});

export default CreateNoteScreen;
