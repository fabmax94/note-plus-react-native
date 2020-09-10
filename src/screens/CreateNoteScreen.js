import React, { useState } from "react";
import { Container, Text } from "native-base";
import HeaderForm from "../components/HeaderForm";
import FormOptions from "../components/FormOptions";
import NoteForm from "../components/NoteForm";
import { StyleSheet } from "react-native";

const CreateNoteScreen = () => {
  return (
    <Container>
      <Container style={styles.containerHeaderForm}>
        <HeaderForm />
      </Container>
      <Container style={styles.containerNoteForm}>
        <NoteForm />
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
