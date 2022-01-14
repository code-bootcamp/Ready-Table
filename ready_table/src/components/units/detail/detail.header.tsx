import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  HeaderNavigator,
  HeaderWrapper,
  Mainimg,
  NaviButton,
  NaviText
} from "./detail.styles";

import { IdetailProps } from "./detail.types";
import { GlobalContext } from "../../../../App";
import { useQuery } from "@apollo/client";
import { FETCH_USEDITEM } from "./detail.queries";

const DetailHeader = (props: IdetailProps) => {
  const navigation = useNavigation();

  return (
    <HeaderWrapper>
      {props.data?.fetchUseditem.images ? (
        <Mainimg
          // key={el._id}
          source={{
            uri: `https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`
          }}
        />
      ) : (
        <Mainimg source={require("../../../../public/images/brunch.jpg")} />
      )}

      {/* <Mainimg source={require("../../../../public/images/burgerking.png")} /> */}
      <HeaderNavigator>
        <NaviButton onPress={() => navigation.navigate("detail")}>
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
