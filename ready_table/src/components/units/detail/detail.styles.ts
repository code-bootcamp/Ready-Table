import styled from "@emotion/native";

export const Wrapper = styled.ScrollView`
  /* padding-top: 15px; */
  height: 100%;
  background-color: white;
`;

export const NotiWrapper = styled.View`
  height: 25%;
  margin: 10px;
  padding: 10px;
  background-color: #edeae3;
  border-radius: 10px;
`;

export const NotiText1 = styled.Text`
  font-weight: 500;
`;

export const NotiText2 = styled.Text`
  padding-top: 7px;
`;

export const NotiText3 = styled.Text`
  padding-top: 7px;
`;

export const LineBar = styled.View`
  height: 10px;
  background-color: whitesmoke;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const DataWrapper = styled.View`
  flex-direction: column;
  margin: 10px;
`;

export const TitleText = styled.Text`
  padding-top: 15px;
  font-weight: 400;
  font-size: 25px;
`;

export const RemarksText = styled.Text`
  padding-top: 7px;
  font-weight: 100;
`;

export const MenuText = styled.Text`
  padding-top: 7px;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  color: #eb4034;
`;

export const ContentsText = styled.Text`
  padding-top: 7px;
`;

export const TimeTitleText = styled.Text`
  font-size: 15px;
`;

export const TimeWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

export const TimeBox = styled.TouchableHighlight`
  width: 100px;
  height: 40px;
  background-color: #eb4034;
  border-radius: 10px;
  margin: 10px;
  padding-top: 10px;
`;

export const TimeText = styled.Text`
  color: white;
  text-align: center;
`;

export const IconWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10px;
  justify-content: space-around;
`;

export const IconTextWrapper = styled.View``;

export const IconText = styled.Text`
  padding-top: 5px;
  font-size: 10px;
`;

export const Mainimg = styled.Image`
  width: 100%;
  height: 300px;
`;

export const CartButton = styled.TouchableHighlight``;

export const LineWrapper = styled.View`
  align-items: center;
`;

export const Tableline = styled.View`
  padding-top: 15px;
  border-bottom-width: 3px;
  border-bottom-color: #eb4034;
  width: 90%;
`;

export const Photo = styled.Image``;

export const HeaderWrapper = styled.View`
  display: flex;
`;

export const HeaderNavigator = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 50px;
`;
