import React from "react";
import DetailScreen from "../screens/detail";
import DetailContainer from "../../src/components/units/detail/detail.container";
import PictureContainer from "../../src/components/units/detail/picturelist/picture.container";
import ReviewList from "../../src/components/units/comment/review/list/ReviewList.container";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const DetailNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen
        name="datail"
        component={DetailScreen}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen
        name="detailMain"
        component={DetailContainer}
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

export default DetailNavigator;
