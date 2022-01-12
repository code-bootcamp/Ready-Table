import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  HomeView,
  CarouselWrapper,
  DestinationContainer,
  BestPickTitle,
  BestItemWrapper,
  ImageCotainer,
  FooterWrapper,
  FooterText,
  ListWrapper,
  List,
  ListName,
  ListIamge,
  BestItemImage,
  BestItemButton,
  BestItemName,
  BestItem
  // BestItemButton,
  // ImageCotainer,
  // TextWrapper
} from "./home.styles";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS, FETCH_USED_ITEMS_OF_THE_BEST } from "./home.queires";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import MainBanner from "../../commons/mainbanner";
import { TouchableOpacity } from "react-native-gesture-handler";
import CategoryList from "./category";
import Carousel from "./carousel";
import {
  IQuery,
  IQueryFetchUseditemsArgs
} from "../../../commons/types/generated/types";
import BestItems from "./bestItmes";
import { Restaurant } from "../search/seatch.styles";

const HomeUI = props => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <MainBanner />
      <HomeView>
        <Carousel></Carousel>
        <DestinationContainer
          horizontal
          showsHorizontalScrollIndicator={false}
        ></DestinationContainer>
        <BestPickTitle>BEST PICK</BestPickTitle>
        <BestItemWrapper horizontal showsHorizontalScrollIndicator={false}>
          {props.bestData?.fetchUseditemsOfTheBest.map((el, index) => (
            <BestItem
              key={el._id}
              // onPress={() =>
              //   navigation.navigate("detail", {
              //     // id: props.onPressCategory()
              //   })
              // }
            >
              <BestItemImage
                source={{ uri: el.images[0] }}
                resizeMode="cover"
              />
              <BestItemName>{el.name}</BestItemName>
            </BestItem>
          ))}
        </BestItemWrapper>
        <CategoryList onPressCategory={props.onPressCategory}></CategoryList>

        <ListWrapper>
          {props.data?.fetchUseditems.map((el, index) => (
            <List
              key={el._id}
              // onPress={() =>
              //   navigation.navigate("detail", {
              //     // ustiemId: el._id
              //   })
              // }
            >
              <ListIamge source={{ uri: el.images[0] }} resizeMode="cover" />
              <ListName>{el.name}</ListName>
            </List>
          ))}
        </ListWrapper>
        <FooterWrapper>
          <FooterText>
            {` (주) 레디테이블
              \n 대표 : 홍길동
              \n 주소 : 서울특별시 구로구 구로동 188-25 지밸리비즈플라자 12층 1272호
              \n 사업자 등록번호 : 111-11-11111
              \n 통신판매업 신고번호 : 1111-서울경기-1111호
              \n 개인정보담당: service@readytable.co.kr
              \n 서비스 이용약관 개인정보 처리방침 위치정보 이용약관 입점문의
              `}
          </FooterText>
        </FooterWrapper>
      </HomeView>
    </ScrollView>
  );
};

export default HomeUI;
