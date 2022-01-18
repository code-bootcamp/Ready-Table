import styled from "@emotion/native";

export const Wrapper = styled.ScrollView`
  height: 100%;
`;

export const PictureWrapper = styled.ScrollView`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 3px;
`;

export const Picture = styled.Image`
  width: 30%;
  height: 30%;
  border-radius: 1px;
  margin: 3px;
`;
