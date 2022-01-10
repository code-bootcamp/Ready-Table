import {
  HomeView,
  CarouselWrapper,
  DestinationContainer,
  BestPickTitle,
  BestItemWrapper
} from "./home.styles";
import Carousel from "react-native-snap-carousel";
import React, { useState, useCallback, useRef, useEffect } from "react";
import { Text, View, Dimensions, SafeAreaView } from "react-native";
import { FETCH_USED_ITEMS } from "./home.queires";

import { useQuery } from "@apollo/client";

interface ItemProps {
  title: string;
  text: string;
}
interface CustomCarouselProps {}
interface RenderItemProps {
  item: ItemProps;
  index: number;
}
import { useNavigation } from "@react-navigation/native";
import {
  IQuery,
  IQueryFetchUseditemsArgs
} from "../../../commons/types/generated/types";

const HomeUI: React.FC<CustomCarouselProps> = props => {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: {
      page: 1
    }
  });

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const ref = useRef(null);
  const navigation = useNavigation();
  const renderItem = useCallback(({ item, index }: RenderItemProps) => {
    return (
      <View
        style={{
          backgroundColor: "floralwhite",
          borderRadius: 5,
          height: 250,
          padding: 50
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.name}</Text>
        <Text>{item.remarks}</Text>
      </View>
    );
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingTop: 50 }}>
      <CarouselWrapper
        style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
      >
        <Carousel
          layout={"default"}
          ref={ref}
          // data={carouselItems}
          data={data?.fetchUseditems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
          onSnapToItem={(index: number) => setActiveIndex(index)}
        />
      </CarouselWrapper>
    </SafeAreaView>
  );
};

export default HomeUI;
