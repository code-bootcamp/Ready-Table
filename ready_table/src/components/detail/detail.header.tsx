import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";
import {
  HeaderNavigator,
  HeaderWrapper,
  Mainimg,
  Wrapper
} from "./detail.styles";
import ReviewList from "../comment/review/list/ReviewList.container";
const DetailHeader = () => {
  const navigation = useNavigation();
  const QQQ = () => {
    navigation.navigate("detail");
  };
  const AAA = () => {
    navigation.navigate("home");
  };
  const ZZZ = () => {
    navigation.navigate("search");
  };
  // 네비게이션 이름들을 선언해주어야하는데 음... 어디다가해둬야할지 몰라서 일단 이렇게 해둡니다..

  return (
    <HeaderWrapper>
      <Mainimg source={require("../../../public/images/burgerking.png")} />
      <HeaderNavigator>
        <TouchableOpacity onPress={QQQ}>
          <Text>TEST</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={AAA}>
          <Text>사진</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ZZZ}>
          <Text>리뷰</Text>
        </TouchableOpacity>
      </HeaderNavigator>
    </HeaderWrapper>
  );
};
export default DetailHeader;
