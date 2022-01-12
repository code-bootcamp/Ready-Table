import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";
import { HeaderNavigator, HeaderWrapper, Mainimg } from "./detail.styles";

import { IdetailProps } from "./detail.types";

const DetailHeader = () => {
  const navigation = useNavigation();

  return (
    <HeaderWrapper>
      <Mainimg source={require("../../../../public/images/burgerking.png")} />
      <HeaderNavigator>
        <TouchableOpacity onPress={() => navigation.navigate("detail", {})}>
          <Text>TEST</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("home", {})}>
          <Text>사진</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("review", {})}>
          <Text>리뷰</Text>
        </TouchableOpacity>
      </HeaderNavigator>
    </HeaderWrapper>
  );
};
export default DetailHeader;
