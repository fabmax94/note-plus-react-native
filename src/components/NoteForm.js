import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Content, Item, Input, Textarea, View, Container } from "native-base";
import FormItems from "./FormItems";
import FormText from "./FormText";

const NoteForm = ({ onHandleSave, editorType }) => {
  const [note, setNote] = useState({
    title: "",
    text: "",
    editorType: editorType,
    items: []
  });
  const onHandleBlur = () => {
    if (note.title || note.text) {
      let key = onHandleSave(note);
      setNote({ ...note, key });
    }
  };

  const onHandleChangeItems = items => {
    setNote({ ...note, items });
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
        {editorType === "text" ? (
          <FormText
            onChange={text => setNote({ ...note, text })}
            onBlur={onHandleBlur}
          />
        ) : (
          <FormItems items={note.items} onChange={onHandleChangeItems} />
        )}
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
  }
});

export default NoteForm;
