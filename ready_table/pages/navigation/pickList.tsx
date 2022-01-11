import React from "react";
import PickListScreen from "../screens/pickList";
import DetailScreen from "../screens/detail";
import { createStackNavigator } from "@react-navigation/stack";

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
    </Stack.Navigator>
  );
};

export default PickListNavigator;
