import React from "react";

import HomeScreen from "../screens/home";
import DetailScreen from "../screens/detail";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={() => ({ headerShown: true })}
      />
      <Stack.Screen
        name="detail"
        component={DetailScreen}
        options={() => ({ headerShown: true })}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;