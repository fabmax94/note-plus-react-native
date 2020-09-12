import React from "react";
import { Container } from "native-base";
import HeaderForm from "../components/HeaderForm";
import FormOptions from "../components/FormOptions";
import NoteForm from "../components/NoteForm";
import { StyleSheet } from "react-native";
import useFirebase from "../hooks/useFirebase";

const CreateNoteScreen = () => {
  const [notes, setNote] = useFirebase(false, "note");
  return (
    <Container>
      <Container style={styles.containerHeaderForm}>
        <HeaderForm />
      </Container>
      <Container style={styles.containerNoteForm}>
        <NoteForm onHandleSave={setNote} />
      </Container>
      <Container style={styles.containerFormOptions}>
        <FormOptions />
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
