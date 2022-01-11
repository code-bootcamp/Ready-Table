import styled from "@emotion/native";

export const HomeView = styled.SafeAreaView`
  align-items: center;
  width: 100%;
  background-color: white;
`;

export const CarouselWrapper = styled.View`
  margin-bottom: 20px;
  width: 100%;
`;

export const DestinationContainer = styled.ScrollView`
  margin-bottom: 20px;
`;

export const TextInputWrapper = styled.TextInput``;

export const ImageCotainer = styled.ImageBackground`
  width: 126px;
  height: 159px;
`;

export const FooterWrapper = styled.View`
  background-color: white;
  margin-top: 30px;
  margin-right: 15px;
`;

export const FooterText = styled.Text``;

export const ListWrapper = styled.Pressable`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  /* flex-wrap: wrap, */
  /* justify-content: "space-evenly", */
`;

export const List = styled.TouchableOpacity``;
export const ListName = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;

export const ListIamge = styled.Image`
  width: 175px;
  height: 100px;
  border-top-left-radius: 10;
  border-top-right-radius: 10;
  border-bottom-left-radius: 10;
  border-bottom-right-radius: 10;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const BestPickTitle = styled.Text`
  font-weight: bold;
  font-size: 30px;
  margin-right: auto;
  padding-left: 26px;
`;

export const BestItemImage = styled.Image`
  margin-right: 10px;
  width: 126px;
  height: 159px;
  border-top-left-radius: 10;
  border-top-right-radius: 10;
  border-bottom-left-radius: 10;
  border-bottom-right-radius: 10;
`;

export const BestItemButton = styled.TouchableOpacity``;

export const BestItemName = styled.Text`
  margin-vertical: 10px;
  font-family: NotoSans;
  font-weight: bold;
`;

export const BestItemWrapper = styled.ScrollView`
width: 100%
height: 317px;
`;

export const BestItem = styled.TouchableOpacity`
  padding-top: 50px;
  width: 100%
  height: 317px;
`;
