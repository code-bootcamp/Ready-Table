import React from "react";

import HomeScreen from "../screens/home";
import DetailScreen from "../screens/detail";
import SearchScreen from "../screens/search";

import { createStackNavigator } from "@react-navigation/stack";
import PictureContainer from "../../src/components/units/detail/picturelist/picture.container";
import ReviewList from "../../src/components/units/comment/review/list/ReviewList.container";

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
        name="search"
        component={SearchScreen}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen
        name="picture"
        component={PictureContainer}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen
        name="review"
        component={ReviewList}
        options={() => ({ headerShown: false })}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
