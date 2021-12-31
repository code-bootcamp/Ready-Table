import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

import TabStackScreen from "./pages/navigation/TabStackScreens";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <TabStackScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
}
