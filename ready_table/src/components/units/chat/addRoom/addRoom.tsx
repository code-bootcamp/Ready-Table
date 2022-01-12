import React, { useState, useLayoutEffect, useContext } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard
} from "react-native";
import { db } from "../../../../../firebaseConfig";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./addRoom.styles";
import { GlobalContext } from "../../../../../App";

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const { userInfo } = useContext(GlobalContext);

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input.toUpperCase()
      })
      .then(() => {
        navigation.goBack();
      })
      .catch(error => alert(error));

    Keyboard.dismiss();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "채팅방을 만들어보세요.",
      headerStyle: { backgroundColor: "#1e1d26", elevation: 0 },
      headerTintStyle: { color: "#fff" },
      headerTintColor: "#fff",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={30} color="#1D51EF" />
          </TouchableOpacity>
        </View>
      )
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <TextInput
        placeholder="채팅방 이름"
        value={input}
        onChangeText={text => setInput(text)}
        style={styles.input}
        placeholderTextColor="grey"
      />

      <TouchableOpacity
        disabled={!input}
        style={styles.button}
        onPress={createChat}
      >
        <Text style={styles.buttonText}>시작하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddChatScreen;
