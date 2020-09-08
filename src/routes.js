import React from "react";
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          //options={HorizontalTransition}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
