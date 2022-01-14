import React, { useContext } from "react";
import { GlobalContext } from "../../../../../App";
import DetailHeader from "../detail.header";
import { IdetailProps } from "../detail.types";
import { Picture, PictureWrapper, Wrapper } from "./picture.styles";

const PictureContainer = (props: IdetailProps) => {
  const { id } = useContext(GlobalContext);
  console.log(id);
  return (
    <Wrapper>
      <DetailHeader />
      <PictureWrapper>
        {/* {props.data?.fetchUseditem.images
          ?.filter((el: any) => el)
          .map((el: { _id: React.Key }) => (
            <Picture
              key={el._id}
              source={{ uri: `https://storage.googleapis.com/${el}` }}
            />
          ))} */}
        <Picture
          source={require("../../../../../public/images/burgerking.png")}
        />
        {/* <Picture
          source={{
            uri: "https://www.techm.kr/news/photo/201803/img_4770_0.jpg"
          }}
        /> */}
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
