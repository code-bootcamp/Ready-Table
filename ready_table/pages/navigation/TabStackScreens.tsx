import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeContainer from "../../src/components/home/home.container";
import LoginContainer from "../../src/components/login/logintest";

const TabStack = createBottomTabNavigator();

const TabStackScreen = () => {
  return (
    <TabStack.Navigator>
      <TabStack.Screen name="home" component={HomeContainer} />
      <TabStack.Screen name="Login" component={LoginContainer} />
    </TabStack.Navigator>
  );
};

export default TabStackScreen;
