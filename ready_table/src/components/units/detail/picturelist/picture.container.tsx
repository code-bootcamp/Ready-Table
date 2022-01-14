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
        {props.data?.fetchUseditem.images
          ?.filter((el: any) => el)
          .map((el: { _id: React.Key }) => (
            <Picture
              key={el._id}
              source={{ uri: `https://storage.googleapis.com/${el}` }}
            />
          ))}

        <Picture source={require("../../../../../public/images/food.jpg")} />
        <Picture source={require("../../../../../public/images/food1.jpg")} />
        <Picture source={require("../../../../../public/images/food2.jpeg")} />
        <Picture source={require("../../../../../public/images/food3.jpg")} />
        <Picture source={require("../../../../../public/images/food4.jpg")} />
        <Picture
          source={require("../../../../../public/images/restaurant1.jpg")}
        />
        <Picture
          source={require("../../../../../public/images/restaurant2.jpg")}
        />
        <Picture
          source={require("../../../../../public/images/restaurant3.jpg")}
        />
        <Picture source={require("../../../../../public/images/brunch.jpg")} />
        <Picture source={require("../../../../../public/images/food7.jpg")} />
        <Picture source={require("../../../../../public/images/food2.jpeg")} />
        <Picture source={require("../../../../../public/images/food4.jpg")} />
        <Picture source={require("../../../../../public/images/food6.jpg")} />
      </PictureWrapper>
    </Wrapper>
  );
};
export default PictureContainer;
