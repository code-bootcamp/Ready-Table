import React, { createContext, useEffect, useState } from "react";
import "react-native-gesture-handler";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink
} from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { createUploadLink } from "apollo-upload-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";
import TabNavigator from "./pages/navigation/tabNavigator";
import HomeScreen from "./pages/screens/home";
import LoginNavigator from "./pages/navigation/loginAuth";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "./src/commons/library/utils/getAccessToken";

// import DetailsScreen from "./pages/screens/detail";

export const GlobalContext = createContext(null);
const Stack = createStackNavigator();
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [accessToken, setAccessToken] = useState("");
  // const [isSearchHidden, setIsHomeHidden] = useState("");
  const [id, setId] = useState("");
  const [tagId, setTagId] = useState("");
  const [isFavorite, setIsFavorite] = useState(true);
  const [isReview, setIsReview] = useState(false);
  const [isMypage, setMypage] = useState("");
  const [loading, setLoading] = useState(true);

  const value = {
    setAccessToken: setAccessToken,
    id: id,
    tagId: tagId,
    setTagId: setTagId,
    isFavorite: isFavorite,
    setIsFavorite: setIsFavorite,
    isReview: isReview,
    setIsReview: setIsReview,
    isMypage: isMypage,
    setMypage: setMypage
  };

  useEffect(() => {
    AsyncStorage.getItem("@user", (_: any, result: any) => {
      if (result) {
        setAccessToken(result);
      }
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`
            }
          });
          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend04-team.codebootcamp.co.kr/team01",
    headers: {
      authorization: `Bearer ${accessToken}`
    },
    credentials: "include"
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink])
  });

  return (
    <>
      <GlobalContext.Provider value={value}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
            {accessToken ? (
              <Stack.Screen name="tabNavigator" component={TabNavigator} />
            ) : (
              <Stack.Screen name="Login" component={LoginNavigator} />
            )}
          </Stack.Navigator> */}
            <TabNavigator />
          </NavigationContainer>
          <StatusBar />
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
};

export default App;
