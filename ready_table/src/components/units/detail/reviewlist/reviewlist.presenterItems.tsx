import React from "react";
import { ScrollView } from "react-native";
import {
  AddPhoto,
  AddPhotoButton,
  Avatar,
  BigAddPhoto,
  BottomWrapper,
  ContentTitle,
  InnerTopWrapper,
  InnerWrapper,
  Nickname,
  Photos,
  ReviewContent,
  // ReviewStar,
  ReviewWrapper,
  Star,
  TopMiddleWrapper
} from "./reviewlist.styles";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { IReviewProps } from "./reviewlist.types";

const ReviewListUIItem = (props: IReviewProps) => {
  return (
    <ScrollView>
      <InnerWrapper>
        <ReviewWrapper>
          <InnerTopWrapper>
            {props.el?.user.picture ? (
              <Avatar
                source={{
                  uri: `https://storage.googleapis.com/${props.el?.user.picture}`
                }}
              />
            ) : (
              <FontAwesome name="user-circle" size={24} color="gray" />
            )}
            <TopMiddleWrapper>
              <Nickname>{props.el?.user?.name}</Nickname>
              <Star>
                {new Array(
                  typeof Number(props.el?.contents.split("#$%&")[0]) ===
                  "string"
                    ? 5
                    : Number(props.el?.contents.split("#$%&")[0])
                )
                  .fill(1)
                  .map((el, index) => (
                    // <ReviewStar
                    //   key={index}

                    // />
                    <AntDesign
                      name="star"
                      size={24}
                      color="#FFD600"
                      key={index}
                    />
                  ))}
                {new Array(
                  typeof Number(props.el?.contents.split("#$%&")[0]) ===
                  "string"
                    ? 0
                    : Number(5 - props.el?.contents.split("#$%&")[0])
                )
                  .fill(1)
                  .map((el, index) => (
                    <AntDesign
                      name="staro"
                      size={24}
                      color="#FFD600"
                      key={index}
                    />
                  ))}
              </Star>
            </TopMiddleWrapper>
            <Photos>
              {props.el?.contents.split("#$%&")[2] !== "" && (
                <AddPhotoButton onPress={props.onPressEnlargePicture}>
                  {props.IsLarge ? (
                    <BigAddPhoto
                      source={{
                        uri: `https://storage.googleapis.com/${
                          props.el?.contents.split("#$%&")[2]
                        }`
                      }}
                    />
                  ) : (
                    <AddPhoto
                      source={{
                        uri: `https://storage.googleapis.com/${
                          props.el?.contents.split("#$%&")[2]
                        }`
                      }}
                    />
                  )}
                </AddPhotoButton>
              )}
            </Photos>
          </InnerTopWrapper>
          <BottomWrapper>
            {!props.IsLarge && (
              <>
                <ContentTitle>식당이용 후기</ContentTitle>
                <ReviewContent>
                  {props.el?.contents.split("#$%&")[1]}
                </ReviewContent>
              </>
            )}
          </BottomWrapper>
        </ReviewWrapper>
      </InnerWrapper>
    </ScrollView>
  );
};

export default ReviewListUIItem;
