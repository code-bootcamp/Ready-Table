import React from "react";
import SearchScreen from "../screens/search";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const SearchNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen
        name="search"
        component={SearchScreen}
        options={() => ({ headerShown: false })}
      />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
