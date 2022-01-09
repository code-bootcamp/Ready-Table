import React, { useState, useContext } from "react";
import ModifyUI from "./modify.presenter";
// import { useNavigation } from "@react-navigation/native";
import { GlobalContext } from "../../../../App";
import { useMutation, useQuery, useApolloClient } from "@apollo/client";
import { FETCH_USER_LOGGED_IN, UPDATE_USER } from "./modify.queries";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const ModifyContainer = () => {
  // const navigation = useNavigation();
  const [name, setName] = useState("");
  const [myImage, setMyImage] = useState("");
  const [updateUser] = useMutation(UPDATE_USER);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const client = useApolloClient();
  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext);

  console.log(userInfo);
  const onPressLogout = async () => {
    try {
      await client.clearStore();
      if (setAccessToken) setAccessToken("");
      if (setUserInfo) setUserInfo(undefined);
      AsyncStorage.removeItem("accessToken");
      AsyncStorage.removeItem("userInfo");
      Alert.alert("로그아웃");
    } catch (error) {
      console.log(error.message);
    }
  };

  async function modifyName() {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            name
          }
        }
      });
      alert("닉네임이 수정되었습니다.");
    } catch (error) {
      console.log(error);
    }
  }

  async function ModifyImage() {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            picture: myImage
          }
        }
      });
      alert("사진이 수정되었습니다.");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ModifyUI
      modifyName={modifyName}
      ModifyImage={ModifyImage}
      data={data}
      onPressLogout={onPressLogout}
    />
  );
};

export default ModifyContainer;
