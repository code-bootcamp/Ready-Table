import styled from "@emotion/native";

export const Wrapper = styled.ScrollView``;

export const PictureWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 3px;
`;

export const Picture = styled.Image`
  width: 117px;
  height: 117px;
  border-radius: 1px;
  margin: 3px;
`;
