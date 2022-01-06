import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import { ResponseType } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential
} from "firebase/auth";
import { Button } from "react-native";
import { OAuth2Client } from "google-auth-library";

// Initialize Firebase
initializeApp({
  apiKey: "AIzaSyAnIgMlaUPXLZqFY0xZKFzNnVIPGzuSL7Y",
  authDomain: "ready-table-firebase-01.firebaseapp.com",
  projectId: "ready-table-firebase-01",
  storageBucket: "ready-table-firebase-01.appspot.com",
  messagingSenderId: "540291082091",
  appId: "1:540291082091:web:47a82688972f8667f8ce2e"
});

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "540291082091-rqcsamfrc4h3c2g2rr2uvrjmun8k2kjb.apps.googleusercontent.com"
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
      console.log(id_token);
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}
