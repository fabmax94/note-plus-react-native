import React from "react";
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import CreateNoteScreen from "./screens/CreateNoteScreen";

const HorizontalTransition = {
  gestureDirection: "horizontal",
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0]
            })
          }
        ]
      }
    };
  }
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={HorizontalTransition}
        />
        <Stack.Screen
          name="CreateNoteScreen"
          component={CreateNoteScreen}
          options={HorizontalTransition}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
