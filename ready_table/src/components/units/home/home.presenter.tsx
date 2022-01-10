import React, { useState, useCallback, useRef, useEffect } from "react";
import { Text, View, Dimensions, SafeAreaView } from "react-native";
import {
  HomeView,
  CarouselWrapper,
  DestinationContainer,
  BestPickTitle,
  BestItemWrapper,
  ImageCotainer,
  TextWrapper
  // BestItemButton,
  // ImageCotainer,
  // TextWrapper
} from "./home.styles";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS, FETCH_USED_ITEMS_OF_THE_BEST } from "./home.queires";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Image } from "react-native";
import MainBanner from "../../commons/mainbanner";
import { TouchableOpacity } from "react-native-gesture-handler";
import CategoryList from "./category";
import Carousel from "./carousel";

const HomeUI = props => {
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
      </HomeView>
    </ScrollView>
  );
};

export default HomeUI;
