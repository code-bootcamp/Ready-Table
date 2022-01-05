import React from "react";
import ReservationScreen from "../screens/reservation";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const ReservationNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen
        name="reservation"
        component={ReservationScreen}
        options={() => ({ headerShown: false })}
      />
    </Stack.Navigator>
  );
};

export default ReservationNavigator;
