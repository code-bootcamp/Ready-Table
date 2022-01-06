// // import * as React from "react";
// // import * as WebBrowser from "expo-web-browser";
// // import { ResponseType } from "expo-auth-session";
// // import * as Google from "expo-auth-session/providers/google";
// // import { initializeApp } from "firebase/app";
// // import {
// //   getAuth,
// //   GoogleAuthProvider,
// //   signInWithCredential
// // } from "firebase/auth";
// // import { Button } from "react-native";

// // // Initialize Firebase
// // initializeApp({
// //   apiKey: "AIzaSyCCu9_eSFQdhHF4sxEvZFf8U4kccom7WxI",
// //   authDomain: "ready-table-project.firebaseapp.com",
// //   databaseURL:
// //     "https://ready-table-project-default-rtdb.asia-southeast1.firebasedatabase.app",
// //   projectId: "ready-table-project",
// //   storageBucket: "ready-table-project.appspot.com",
// //   messagingSenderId: "285590853859",
// //   appId: "1:285590853859:web:304cd3df4edb47a1118dd6"
// // });

// // WebBrowser.maybeCompleteAuthSession();

// // export default function Login() {
// //   const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
// //     clientId:
// //       "411499159787-eni5lqck0dsm0hmlrddir4ob41lngki1.apps.googleusercontent.com"
// //   });

// //   React.useEffect(() => {
// //     if (response?.type === "success") {
// //       const { id_token } = response.params;

// //       const auth = getAuth();
// //       const provider = new GoogleAuthProvider();
// //       const credential = provider.credential(id_token);
// //       signInWithCredential(auth, credential);
// //     }
// //   }, [response]);

// //   return (
// //     <Button
// //       disabled={!request}
// //       title="Login"
// //       onPress={() => {
// //         promptAsync();
// //       }}
// //     />
// //   );
// // }

// import * as React from "react";
// import * as WebBrowser from "expo-web-browser";
// import { ResponseType } from "expo-auth-session";
// import * as Google from "expo-auth-session/providers/google";
// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithCredential
// } from "firebase/auth";
// import { Button } from "react-native";

// // Initialize Firebase
// initializeApp({
//   /* Config */
// });

// WebBrowser.maybeCompleteAuthSession();

// export default function App() {
//   const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
//     clientId:
//       "411499159787-jp63c55j096t9fafn6p379hdobm3ip3l.apps.googleusercontent.com"
//   });

//   React.useEffect(() => {
//     if (response?.type === "success") {
//       const { id_token } = response.params;

//       const auth = getAuth();
//       const provider = new GoogleAuthProvider();
//       const credential = provider.credential(id_token);
//       signInWithCredential(auth, credential);
//     }
//   }, [response]);

//   return (
//     <Button
//       disabled={!request}
//       title="Login"
//       onPress={() => {
//         promptAsync();
//       }}
//     />
//   );
// }

import { useForm } from "react-hook-form";
import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../App";
import { useMutation, useApolloClient } from "@apollo/client";
import { gql } from "@apollo/client";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainLoginUi from "./login.presenter";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      petName
      petGender
      petKinds
      picture
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export const LOGIN_USER_WITH_FB = gql`
  mutation loginUserWithFB($name: String!, $email: String!) {
    loginUserWithFB(name: $name, email: $email) {
      accessToken
    }
  }
`;

const MainLogin = props => {
  const { setUserInfo, userInfo, setAccessToken } = useContext(GlobalContext);
  const client = useApolloClient();
  const [loginUser] = useMutation(LOGIN_USER);

  const onAppLogin = async data => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password
        }
      });
      const resultUser = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            authorization: `Bearer${result.data?.loginUser.accessToken}`
          }
        }
      });
      console.log(result.data?.loginUser.accessToken);
      await AsyncStorage.setItem(
        "accessToken",
        result.data.loginUser.accessToken || ""
      );
      AsyncStorage.setItem(
        "userInfo",
        JSON.stringify(resultUser.data.fetchUserLoggedIn) || ""
      );
      setAccessToken(result.data?.loginUser.accessToken);
      setUserInfo(resultUser.data.fetchUserLoggedIn);
      Alert.alert("로그인 성공!");
    } catch (error) {
      console.log(error.message);
    }
  };

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  if (!userInfo) {
    return (
      <MainLoginUi
        navigation={props.navigation}
        onAppLogin={onAppLogin}
        control={control}
        handleSubmit={handleSubmit}
      />
    );
  }
};
export default MainLogin;
