import React, { useState, useCallback, useRef } from "react";
import { Text, View, Dimensions, SafeAreaView } from "react-native";
import {
  HomeView,
  MainBannerWrapper,
  Notification,
  Mainbanner,
  Searchicon,
  CarouselWrapper,
  DestinationWrapper,
  DestinationContainer,
  BestItemWarpper
} from "./home.styles";
import { ScrollView, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

interface ItemProps {
  title: string;
  text: string;
}
interface CustomCarouselProps {}
interface RenderItemProps {
  item: ItemProps;
  index: number;
}
const exampleItems = [
  {
    title: "Item 1",
    text: "Text 1"
  },
  {
    title: "Item 2",
    text: "Text 2"
  },
  {
    title: "Item 3",
    text: "Text 3"
  },
  {
    title: "Item 4",
    text: "Text 4"
  },
  {
    title: "Item 5",
    text: "Text 5"
  }
];
const HomeUI: React.FC<CustomCarouselProps> = props => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [carouselItems, setCarouselItems] = useState<ItemProps[]>(exampleItems);
  const ref = useRef(null);
  const renderItem = useCallback(({ item, index }: RenderItemProps) => {
    return (
      <View
        style={{
          backgroundColor: "floralwhite",
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }, []);
  return (
    <ScrollView>
      <HomeView>
        <MainBannerWrapper>
          <Notification
            source={require("../../../public/images/notification.png")}
          />
          <Mainbanner
            source={require("../../../public/images/mainbanner.png")}
          />
          <Searchicon source={require("../../../public/images/search.png")} />
        </MainBannerWrapper>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: "white", paddingTop: 50 }}
        >
          <CarouselWrapper
            style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
          >
            <Carousel
              layout={"default"}
              ref={ref}
              data={carouselItems}
              sliderWidth={300}
              itemWidth={300}
              renderItem={renderItem}
              onSnapToItem={(index: number) => setActiveIndex(index)}
            />
          </CarouselWrapper>
        </SafeAreaView>
        <DestinationWrapper>어디로 가세요?</DestinationWrapper>
        <DestinationContainer
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        >
          <Text>1번</Text>
          <Text>2번</Text>
          <Text>3번</Text>
          <Text>4번</Text>
          <Text>5번</Text>
        </DestinationContainer>
        <BestItemWarpper>BEST PICK</BestItemWarpper>
      </HomeView>
    </ScrollView>
  );
};

export default HomeUI;
