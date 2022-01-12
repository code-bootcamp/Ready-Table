import React from "react";
import DetailHeader from "../detail.header";
import { Picture, PictureWrapper, Wrapper } from "./picture.styles";

const PictureContainer = () => {
  return (
    <Wrapper>
      <DetailHeader />
      <PictureWrapper>
        <Picture
          source={require("../../../../../public/images/burgerking.png")}
        />
        <Picture
          source={require("../../../../../public/images/burgerking.png")}
        />
        <Picture
          source={require("../../../../../public/images/burgerking.png")}
        />
        <Picture
          source={require("../../../../../public/images/burgerking.png")}
        />
        <Picture
          source={require("../../../../../public/images/burgerking.png")}
        />
        <Picture
          source={require("../../../../../public/images/burgerking.png")}
        />
        <Picture
          source={require("../../../../../public/images/burgerking.png")}
        />
        <Picture
          source={require("../../../../../public/images/burgerking.png")}
        />
        <Picture
          source={require("../../../../../public/images/burgerking.png")}
        />
      </PictureWrapper>
    </Wrapper>
  );
};
export default PictureContainer;
