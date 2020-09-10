import React from "react";
import { StyleSheet } from "react-native";
import { Content, Item, Input, Textarea } from "native-base";

const NoteForm = () => {
  return (
    <Content style={styles.content}>
      <Item style={styles.item}>
        <Input
          placeholder="Título"
          style={styles.input}
          placeholderTextColor="#a7a6a6"
        />
      </Item>
      <Textarea rowSpan={5} placeholder="Nota" placeholderTextColor="#a7a6a6" />
    </Content>
  );
};

const styles = StyleSheet.create({
  item: {
    borderColor: "transparent"
  },
  content: {
    paddingHorizontal: 10
  },
  input: {
    fontSize: 22
  }
});

export default NoteForm;
