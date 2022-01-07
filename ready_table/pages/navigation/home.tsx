import React from "react";

import HomeScreen from "../screens/home";
import DetailScreen from "../screens/detail";
import SearchScreen from "../screens/search";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen
        name="detail"
        component={DetailScreen}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen
        name="search"
        component={SearchScreen}
        options={() => ({ headerShown: false })}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
