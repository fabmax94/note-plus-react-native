import React from "react";
import { Textarea } from "native-base";
import { StyleSheet } from "react-native";

const FormText = ({ onChange, onBlur }) => {
  return (
    <Textarea
      rowSpan={5}
      placeholder="Nota"
      placeholderTextColor="#a7a6a6"
      style={styles.textarea}
      onBlur={onBlur}
      onChangeText={onChange}
    />
  );
};

const styles = StyleSheet.create({
  textarea: {
    flex: 1
  }
});

export default FormText;
