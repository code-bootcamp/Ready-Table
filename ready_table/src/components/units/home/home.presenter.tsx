import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  HomeView,
  CarouselWrapper,
  DestinationContainer,
  BestPickTitle,
  BestItemWrapper,
  ImageCotainer,
  TextWrapper,
  FooterWrapper,
  FooterText,
  ListWrapper,
  ListContainer,
  ItemImageBackground
  // BestItemButton,
  // ImageCotainer,
  // TextWrapper
} from "./home.styles";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS, FETCH_USED_ITEMS_OF_THE_BEST } from "./home.queires";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text } from "react-native";
import MainBanner from "../../commons/mainbanner";
import { TouchableOpacity } from "react-native-gesture-handler";
import CategoryList from "./category";
import Carousel from "./carousel";
import {
  IQuery,
  IQueryFetchUseditemsArgs
} from "../../../commons/types/generated/types";

const HomeUI = props => {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: {
      page: 1
    }
  });
  console.log(data);
  return (
    <ScrollView>
      <HomeView>
        <MainBanner />
        <Carousel></Carousel>
        <CategoryList onPressCategory={props.onPressCategory}></CategoryList>
        <DestinationContainer
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        ></DestinationContainer>
        <BestPickTitle>BEST PICK</BestPickTitle>
        <TouchableOpacity>
          <ImageCotainer
            source={require("../../../../public/images/fastfood.png")}
          >
            <TextWrapper>
              <Text>아우어</Text>
              <Text>베이커리</Text>
              <Text>----------</Text>
              <Text>빨미까레가 </Text>
              <Text>맛있는</Text>
              <Text>⭐️4. 5</Text>
            </TextWrapper>
          </ImageCotainer>
        </TouchableOpacity>
        <Text> </Text>
        <ListWrapper>
          {data?.fetchUseditems.map((el, index) => (
            <ListContainer key={el._id}>
              <ItemImageBackground
                source={{ uri: el.images[0] }}
                resizeMode="cover"
              >
                <Text>
                  {el.name}
                  {"\n"}
                  {el.remarks}
                </Text>
              </ItemImageBackground>
            </ListContainer>
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
