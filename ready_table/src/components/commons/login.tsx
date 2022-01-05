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
//   apiKey: "AIzaSyCCu9_eSFQdhHF4sxEvZFf8U4kccom7WxI",
//   authDomain: "ready-table-project.firebaseapp.com",
//   databaseURL:
//     "https://ready-table-project-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "ready-table-project",
//   storageBucket: "ready-table-project.appspot.com",
//   messagingSenderId: "285590853859",
//   appId: "1:285590853859:web:304cd3df4edb47a1118dd6"
// });

// WebBrowser.maybeCompleteAuthSession();

// export default function Login() {
//   const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
//     clientId:
//       "411499159787-eni5lqck0dsm0hmlrddir4ob41lngki1.apps.googleusercontent.com"
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
