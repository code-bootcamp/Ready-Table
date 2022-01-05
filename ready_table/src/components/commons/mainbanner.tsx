import React from "react";
import styled from "@emotion/native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
const NotificationButton = styled.TouchableOpacity`
  margin-left: 20px;
`;
const MainbannerButton = styled.TouchableOpacity``;

const SearchiconButton = styled.TouchableOpacity`
  margin-right: 20px;
`;
const MainBannerWrapper = styled.SafeAreaView`
  padding-top: 35px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
`;
const MainBanner = () => {
  const navigation = useNavigation();
  return (
    <MainBannerWrapper>
      <NotificationButton onPress={() => navigation.navigate("detail", {})}>
        <Image source={require("../../../public/images/notification.png")} />
      </NotificationButton>
      <MainbannerButton onPress={() => navigation.navigate("home", {})}>
        <Image source={require("../../../public/images/mainbanner.png")} />
      </MainbannerButton>
      <SearchiconButton onPress={() => navigation.navigate("detail", {})}>
        <Image source={require("../../../public/images/search.png")} />
      </SearchiconButton>
    </MainBannerWrapper>
  );
};
export default MainBanner;
