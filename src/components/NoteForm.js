import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Content, Item, Input, Textarea, View, Container } from "native-base";
import changeNavigationBarColor from "react-native-navigation-bar-color";

const NoteForm = ({ onHandleSave }) => {
  changeNavigationBarColor("#ffffff");
  const [note, setNote] = useState({ title: "", text: "" });
  const onHandleBlur = () => {
    if (note.title || note.text) {
      let key = onHandleSave(note);
      setNote({ ...note, key });
    }
  };
  return (
    <Content style={styles.content}>
      <Item style={styles.item}>
        <Input
          placeholder="Título"
          style={styles.input}
          placeholderTextColor="#a7a6a6"
          onBlur={onHandleBlur}
          onChangeText={title => setNote({ ...note, title })}
        />
      </Item>
      <Container>
        <Textarea
          rowSpan={5}
          placeholder="Nota"
          placeholderTextColor="#a7a6a6"
          style={styles.textarea}
          onBlur={onHandleBlur}
          onChangeText={text => setNote({ ...note, text })}
        />
      </Container>
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
  },
  textarea: {
    flex: 1
  }
});

export default NoteForm;
