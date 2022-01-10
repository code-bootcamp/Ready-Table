import styled from "@emotion/native";

export const HomeView = styled.SafeAreaView`
  align-items: center;
  background-color: white;
  width: 100%;
`;

export const BestPickTitle = styled.Text`
  font-weight: bold;
  font-size: 30px;
  margin-right: auto;
  padding-left: 26px;
`;
export const CarouselWrapper = styled.View`
  margin-bottom: 20px;
  width: 100%;
`;

export const DestinationContainer = styled.ScrollView`
  margin-bottom: 20px;
`;

export const TextInputWrapper = styled.TextInput``;

export const BestItemWrapper = styled.ScrollView``;

export const BestItemButton = styled.TouchableOpacity``;

export const ImageCotainer = styled.ImageBackground`
  width: 126px;
  height: 159px;
`;
export const TextWrapper = styled.Text`
  font-weight: bold;
  &:after {
    position: absolute;
    top: 0;
    right: 30px;
    width: 20px;
    height: 40px;
    border: 5px solid red;
  }
`;
