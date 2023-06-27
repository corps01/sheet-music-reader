import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home/Home";
import SheetMusic from "./src/screens/SheetMusic/SheetMusic";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Himnos" }}
        />
        <Stack.Screen
          name="SheetMusic"
          component={SheetMusic}
          options={{ title: "Sheet Music" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
