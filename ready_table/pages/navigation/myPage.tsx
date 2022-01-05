import React from "react";
import MyPageScreen from "../screens/myPage";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const MyPageNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen
        name="myPage"
        component={MyPageScreen}
        options={() => ({ headerShown: false })}
      />
    </Stack.Navigator>
  );
};

export default MyPageNavigator;
