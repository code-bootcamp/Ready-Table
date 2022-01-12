import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  HeaderNavigator,
  HeaderWrapper,
  Mainimg,
  NaviButton,
  NaviText
} from "./detail.styles";

import { IdetailProps } from "./detail.types";

const DetailHeader = () => {
  const navigation = useNavigation();

  return (
    <HeaderWrapper>
      <Mainimg source={require("../../../../public/images/burgerking.png")} />
      <HeaderNavigator>
        <NaviButton onPress={() => navigation.navigate("datail")}>
          <NaviText>홈</NaviText>
        </NaviButton>
        <NaviButton onPress={() => navigation.navigate("picture")}>
          <NaviText>사진</NaviText>
        </NaviButton>
        <NaviButton onPress={() => navigation.navigate("review")}>
          <NaviText>리뷰</NaviText>
        </NaviButton>
      </HeaderNavigator>
    </HeaderWrapper>
  );
};
export default DetailHeader;
