import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Left, Icon, Button, Right, Container } from "native-base";
import { useNavigation } from "@react-navigation/native";

const HeaderForm = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <Left>
          <Button
            transparent
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" style={styles.icon} />
          </Button>
        </Left>
        <Right />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    flex: 1
  },
  icon: {
    color: "#7a7a7a"
  }
});

export default HeaderForm;
