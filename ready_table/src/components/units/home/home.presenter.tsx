import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useContext
} from "react";
import {
  HomeView,
  DestinationContainer,
  BestPickTitle,
  BestItemWrapper,
  FooterWrapper,
  FooterText,
  ListWrapper,
  List,
  ListName,
  ListIamge,
  BestItemImage,
  BestItemName,
  BestItem
} from "./home.styles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import MainBanner from "../../commons/mainbanner";
import { TouchableOpacity } from "react-native-gesture-handler";
import CategoryList from "./category";
import Carousel from "./carousel";
import { Ionicons } from "@expo/vector-icons";
import { GlobalContext } from "../../../../App";

const HomeUI = props => {
  const navigation = useNavigation();
  const { id } = useContext(GlobalContext);
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
              onPress={() =>
                navigation.navigate("detail", {
                  useditemId: el._id
                })
              }
            >
              <BestItemImage source={{ uri: el.images[0] }} resizeMode="cover">
                <Ionicons
                  name="bookmark"
                  style={{ color: "#dd4124" }}
                  size={25}
                />
              </BestItemImage>
              <BestItemName>{el.name}</BestItemName>
              {/* {String(el.name).split("-")[1]} */}
            </BestItem>
          ))}
        </BestItemWrapper>
        <CategoryList></CategoryList>
        <ListWrapper>
          {props.data?.fetchUseditems.map((el, index) => (
            <List
              key={el._id}
              onPress={() =>
                navigation.navigate("detail", {
                  id: props.onPressDetail(el)
                })
              }
            >
              <ListIamge source={{ uri: el.images[0] }} resizeMode="cover" />
              <ListName>{String(el.name).split("-")[1]}</ListName>
              {/* {String(el.name).split("-")[1]} */}
            </List>
          ))}
        </ListWrapper>
        <FooterWrapper>
          <FooterText>
            {` (주) 레디테이블
              \n 대표 : 김태희
              \n 주소 : 서울특별시 구로구 구로동 188-25 지밸리비즈플라자 12층 1272호
              \n 사업자 등록번호 : 127-11-1272
              \n 통신판매업 신고번호 : 1374-서울경기-1272호
              \n 개인정보담당: service@readytable.co.kr
              \n  서비스   이용약관   개인정보   처리방침   위치정보   이용약관   입점문의
              `}
          </FooterText>
        </FooterWrapper>
      </HomeView>
    </ScrollView>
  );
};

export default HomeUI;
