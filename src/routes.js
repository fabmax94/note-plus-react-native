import React from "react";
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import CreateNoteScreen from "./screens/CreateNoteScreen";
import EditorOptionsScreen from "./screens/EditorOptionsScreen";

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

const VerticalTransition = {
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
            translateY: current.progress.interpolate({
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
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1]
              })
            }
          })
        }}
        mode="modal"
      >
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
        <Stack.Screen
          name="EditorOptionsScreen"
          component={EditorOptionsScreen}
          options={VerticalTransition}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
