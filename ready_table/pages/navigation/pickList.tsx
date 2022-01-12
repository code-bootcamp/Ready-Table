import React from "react";
import PickListScreen from "../screens/pickList";
import DetailScreen from "../screens/detail";
import { createStackNavigator } from "@react-navigation/stack";
import DetailContainer from "../../src/components/units/detail/detail.container";
import PictureContainer from "../../src/components/units/detail/picturelist/picture.container";
import ReviewList from "../../src/components/units/comment/review/list/ReviewList.container";

const Stack = createStackNavigator();
const PickListNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen
        name="pickList"
        component={PickListScreen}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen
        name="상세보기"
        component={DetailScreen}
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
      <Stack.Screen
        name="datail"
        component={DetailScreen}
        options={() => ({ headerShown: false })}
      />
    </Stack.Navigator>
  );
};

export default PickListNavigator;
