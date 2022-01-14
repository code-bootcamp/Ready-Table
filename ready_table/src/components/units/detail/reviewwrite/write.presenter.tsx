import React from "react";
import { ScrollView } from "react-native";
import ReviewUploadContainer from "../../../commons/reviewupload/reviewupload.container";
import {
  Category,
  CategoryContent,
  CategoryWrapper,
  FlexLine,
  Label,
  LabelWrapper,
  LableLine,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductNameWrapper,
  ProductPrice,
  ProductPriceWrapper,
  ReviewContentInput,
  ReviewContentWrapper,
  ReviewPhotoWrapper,
  ReviewStarWrapper,
  ReviewWriteButton,
  ReviewWriteButtonText,
  ReviewWriteView,
  Star,
  StarButton,
  StarIcon
} from "./write.styles";
import { IWritePorps } from "./write.types";
import { AntDesign } from "@expo/vector-icons";
const WriteUI = (props: IWritePorps) => {
  return (
    <ScrollView>
      <ReviewWriteView>
        <ProductCard>
          <ProductImage
            source={{
              uri: `https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`
            }}
          />
          <ProductInfo>
            <CategoryWrapper>
              <Category>식당이름</Category>
              <CategoryContent>
                {props.data?.fetchUseditem.name}
              </CategoryContent>
            </CategoryWrapper>
            <ProductNameWrapper>
              <ProductName>
                {/* {String(props.data?.fetchUseditem.name.split("#")[1]).length > 9
                  ? `${String(
                      props.data?.fetchUseditem.name.split("#")[1]
                    ).substr(0, 10)}...`
                  : props.data?.fetchUseditem.name.split("#")[1]} */}
                {props.data?.fetchUseditem.remarks}
              </ProductName>
            </ProductNameWrapper>
            <ProductPriceWrapper>
              <ProductPrice>
                {props.data?.fetchUseditem.price
                  .toLocaleString("ko-KR")
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </ProductPrice>
            </ProductPriceWrapper>
          </ProductInfo>
        </ProductCard>
        <LabelWrapper>
          <Label>이미지 등록</Label>
          <LableLine />
        </LabelWrapper>
        <ReviewPhotoWrapper>
          {/* <ReviewUploadContainer setImage={props.setImage} /> */}
          <FlexLine />
        </ReviewPhotoWrapper>
        <LabelWrapper>
          <Label>별점</Label>
          <LableLine />
        </LabelWrapper>
        <ReviewStarWrapper>
          <Star>
            {new Array(5).fill(1).map((el, index) => (
              <StarButton
                key={index}
                onPress={() => props.setMyStar(index + 1)}
              >
                {props.myStar > index ? (
                  <AntDesign name="star" size={24} color="#FFD600" />
                ) : (
                  <AntDesign name="staro" size={24} color="#FFD600" />
                )}
              </StarButton>
            ))}
          </Star>
          <FlexLine />
        </ReviewStarWrapper>
        <LabelWrapper>
          <Label>리뷰 작성</Label>
          <LableLine />
        </LabelWrapper>
        <ReviewContentWrapper>
          <ReviewContentInput
            onChangeText={props.onChangeContents}
            style={{ flexShrink: 1 }}
            multiline={true}
          ></ReviewContentInput>
        </ReviewContentWrapper>
        <ReviewWriteButton onPress={props.onClickRegisterReview}>
          <ReviewWriteButtonText>리뷰 작성</ReviewWriteButtonText>
        </ReviewWriteButton>
      </ReviewWriteView>
    </ScrollView>
  );
};

export default WriteUI;
