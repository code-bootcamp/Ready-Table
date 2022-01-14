import styled from "@emotion/native";

export const Wrapper = styled.ScrollView``;

export const PictureWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* margin: 3px; */
`;

export const Picture = styled.Image`
  width: 30%;
  height: 30%;
  border-radius: 1px;
  margin: 3px;
`;
