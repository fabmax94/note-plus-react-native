import React, { useState } from "react";
import { Container } from "native-base";
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
      <Container style={styles.containerHeaderForm}>
        <HeaderForm/>
      </Container>
      <Container style={styles.containerNoteForm}>
        <NoteForm onHandleSave={setNote} preNote={route.params?.note} editorType={type}/>
      </Container>
      <Container style={styles.containerFormOptions}>
        <FormOptions onHandleOption={setType}/>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerNoteForm: {
    flex: 20
  },
  containerFormOptions: {
    flex: 1
  },
  containerHeaderForm: {
    flex: 2
  }
});

export default CreateNoteScreen;
