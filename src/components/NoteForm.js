import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Content, Item, Input, Textarea, View, Container } from "native-base";
import FormItems from "./FormItems";
import FormText from "./FormText";

const NoteForm = ({ onHandleSave, editorType, preNote }) => {
  const [note, setNote] = useState({
    key: preNote?.key || "",
    title: preNote?.title || "",
    text: preNote?.text || "",
    editorType: preNote?.editorType || editorType,
    items: preNote?.items || []
  });
  const onHandleBlur = () => {
    if (note.title || note.text) {
      let key = onHandleSave(note);
      setNote({ ...note, key });
    }
  };

  const onHandleChangeItems = items => {
    let key = onHandleSave({ ...note, items });
    setNote({ ...note, items, key });
  };

  useEffect(() => {
    setNote({ ...note, editorType });
  }, [editorType]);

  return (
    <Content style={styles.content}>
      <Item style={styles.item}>
        <Input
          placeholder="Título"
          style={styles.input}
          placeholderTextColor="#a7a6a6"
          onBlur={onHandleBlur}
          value={note.title}
          onChangeText={title => setNote({ ...note, title })}
        />
      </Item>
      <Container>
        {note.editorType === "text" ? (
          <FormText
            onChange={text => setNote({ ...note, text })}
            onBlur={onHandleBlur}
            value={note.text}
          />
        ) : (
          <FormItems items={note.items} onChange={onHandleChangeItems}/>
        )}
      </Container>
    </Content>
  );
};

const styles = StyleSheet.create({
  item: {
    borderColor: "transparent",
    flex: 1
  },
  content: {
    paddingHorizontal: 10
  },
  input: {
    fontSize: 22
  }
});

export default NoteForm;
