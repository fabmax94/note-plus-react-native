import React from "react";
import { StyleSheet } from "react-native";
import { Container, Icon, Button, Text, Left, Body, Right } from "native-base";
import { useNavigation } from "@react-navigation/native";

const FormOptions = ({ onHandleOption }) => {
  const navigation = useNavigation();
  return (
    <Container style={styles.container}>
      <Left>
        <Button
          transparent
          style={styles.button}
          onPress={() =>
            navigation.navigate("EditorOptionsScreen", {
              onHandleOption: onHandleOption
            })
          }
        >
          <Icon name="plus-square" type="Feather" style={styles.icon} />
        </Button>
      </Left>
      <Body>
        <Text style={styles.text}>Editado 10:00</Text>
      </Body>
      <Right>
        <Button transparent style={styles.button}>
          <Icon name="more-vertical" type="Feather" style={styles.icon} />
        </Button>
      </Right>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  icon: {
    color: "#7a7a7a",
    fontSize: 20
  },
  text: {
    fontSize: 12
  },
  button: {
    width: 80
  }
});

export default FormOptions;
