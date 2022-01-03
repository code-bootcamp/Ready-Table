import React, { createContext, useEffect, useState } from "react";
import "react-native-gesture-handler";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";
import TabNavigator from "./pages/navigation/tabNavigator";
import HomeScreen from "./pages/screens/home";
// import { createUploadLink } from "apollo-upload-client";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client";
// import DetailsScreen from "./pages/screens/detail";

const Stack = createStackNavigator();
export const GlobalContext = createContext(null);

const App = () => {
  // const uploadLink = createUploadLink({
  //   uri: "https://backend04-team.codebootcamp.co.kr/team01"
  //   headers: {
  //     authorization: `Bearer ${accessToken}`
  //   },
  //   credentials: "include" // 엑세스 토큰 쓰면 쓸 부분
  // });
  const client = new ApolloClient({
    uri: "https://backend04-team.codebootcamp.co.kr/team01",
    cache: new InMemoryCache()
  });

  return (
    // <GlobalContext.Provider value={value}>
    <>
      <ApolloProvider client={client}>
        <NavigationContainer>
          {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
            {accessToken ? (
              <Stack.Screen name="tabNavigator" component={TabNavigator} />
            ) : (
              <Stack.Screen name="Login" component={LoginNavigator} />
            )}
          </Stack.Navigator> */}
        </NavigationContainer>
      </ApolloProvider>
    </>
    // </GlobalContext.Provider>
  );
};

export default App;
