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
const LogoText = styled.Text`
  font-family: "Bungee";
  color: #dd4124;
  font-size: 30px;
  margin: 0 auto;
`;

const MainBanner = () => {
  const navigation = useNavigation();
  return (
    <MainBannerWrapper>
      <NotificationButton onPress={() => navigation.navigate("detail", {})}>
        <Image source={require("../../../public/images/notification.png")} />
      </NotificationButton>
      <MainbannerButton onPress={() => navigation.navigate("home", {})}>
        <LogoText>READY TABLE</LogoText>
      </MainbannerButton>
      <SearchiconButton onPress={() => navigation.navigate("detail", {})}>
        <Image source={require("../../../public/images/search.png")} />
      </SearchiconButton>
    </MainBannerWrapper>
  );
};
export default MainBanner;
