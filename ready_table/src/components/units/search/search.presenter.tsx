import React from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  SearchPageView,
  Search,
  SeachIcon,
  SearchBar,
  SearchBarLine,
  FilterView1,
  Row,
  FilterWrapper,
  FilterFont,
  Row1,
  RestaurantList,
  RestaurantWrapper,
  Restaurant,
  RestaurantImage,
  RestaurantName
} from "./seatch.styles";

const SearchUI = props => {
  const navigation = useNavigation();
  return (
    <ScrollView
      onMomentumScrollBegin={props.onLoadMore}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "white" }}
    >
      <SearchPageView>
        <Search>
          <SeachIcon
            source={require("../../../../public/images/search02.png")}
          />
          <SearchBar onChangeText={props.onChangeSearch} />
        </Search>
        <SearchBarLine />

        <FilterView1>
          <Row>
            <FilterWrapper onPress={props.searchKoreaThema}>
              <FilterFont>한식</FilterFont>
            </FilterWrapper>

            <FilterWrapper onPress={props.searchWesternThema}>
              <FilterFont>양식</FilterFont>
            </FilterWrapper>

            <FilterWrapper onPress={props.searchFastFoodThema}>
              <FilterFont>패스트푸드</FilterFont>
            </FilterWrapper>
          </Row>
          <Row1>
            <FilterWrapper onPress={props.searchChinaThema}>
              <FilterFont>중식</FilterFont>
            </FilterWrapper>

            <FilterWrapper onPress={props.searchSnackThema}>
              <FilterFont>분식</FilterFont>
            </FilterWrapper>

            <FilterWrapper onPress={props.searchJapanThema}>
              <FilterFont>일식</FilterFont>
            </FilterWrapper>

            <FilterWrapper onPress={props.searchLunchBoxThema}>
              <FilterFont>도시락</FilterFont>
            </FilterWrapper>
          </Row1>
        </FilterView1>

        <RestaurantList>
          {props.dataRes?.map((el: any) => (
            <RestaurantWrapper
              key={el._id}
              onPress={() => {
                navigation.navigate("식당 상세보기", {
                  id: props.onPressDetail(el)
                });
              }}
            >
              {/* <Restaurant>
                <RestaurantImage
                  source={{
                    uri: el.images[0]
                  }}
                />
                <RestaurantName>
                  {String(el.name.split("#")[1]).length > 60
                    ? `${String(el.name.split("#")[1]).substr(0, 61)}...`
                    : el.name.split("#")}
                </RestaurantName>
              </Restaurant> */}
            </RestaurantWrapper>
          ))}

          {!props.dataRes &&
            props.data?.fetchUseditems.map((el: any) => (
              <RestaurantWrapper
                key={el._id}
                onPress={() => {
                  navigation.navigate("식당상세보기", {
                    id: props.onPressDetail(el)
                  });
                }}
              >
                <Restaurant>
                  <RestaurantImage
                    source={{
                      uri: el.images[0]
                    }}
                  />
                  <RestaurantName>
                    {String(el.name.split("#")[1]).length > 60
                      ? `${String(el.name.split("#")[1]).substr(0, 61)}...`
                      : el.name.split("#")[1]}
                  </RestaurantName>
                </Restaurant>
              </RestaurantWrapper>
            ))}
        </RestaurantList>
      </SearchPageView>
    </ScrollView>
  );
};

export default SearchUI;
