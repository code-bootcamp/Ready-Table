import React from "react";
import { Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";

const CategofyMainWrapper = styled.ScrollView`
  margin-top: 22px;
  width: 100%;
  height: 102px;
`;

const CategoryIconWrapper = styled.TouchableOpacity`
  width: 67px;
  height: 46px;
  background-color: #f1eef6;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-radius: 100%; */
`;
const CategoryIcon = styled.Image`
  width: 26px;
  height: 26px;
`;

const CategoryText = styled.Text`
  width: 38px;
  height: 11px;
  font-size: 8px;
  font-weight: bold;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  line-height: 11px;
  color: #4d4d72;
`;

const CategoryList = props => {
  const navigation = useNavigation();

  const categories = [
    "전체",
    "한식",
    "양식",
    "중식",
    "분식",
    "채식",
    "패스트푸드",
    "도시락"
  ];

  return (
    <CategofyMainWrapper horizontal showsHorizontalScrollIndicator={false}>
      <CategoryIconWrapper
        onPress={() =>
          navigation.navigate("detail", {
            // id: props.onPressCategory("배게")
          })
        }
      >
        <CategoryIcon
          source={require("../../../../public/images/fastfood.png")}
        />
        <CategoryText>배게</CategoryText>
      </CategoryIconWrapper>
      <CategoryIconWrapper
        onPress={() =>
          navigation.navigate("detail", {
            // id: props.onPressCategory("배게")
          })
        }
      >
        <CategoryIcon
          source={require("../../../../public/images/fastfood.png")}
        />
        <CategoryText>배게</CategoryText>
      </CategoryIconWrapper>
      <CategoryIconWrapper
        onPress={() =>
          navigation.navigate("detail", {
            // id: props.onPressCategory("배게")
          })
        }
      >
        <CategoryIcon
          source={require("../../../../public/images/fastfood.png")}
        />
        <CategoryText>배게</CategoryText>
      </CategoryIconWrapper>
      <CategoryIconWrapper
        onPress={() =>
          navigation.navigate("detail", {
            // id: props.onPressCategory("배게")
          })
        }
      >
        <CategoryIcon
          source={require("../../../../public/images/fastfood.png")}
        />
        <CategoryText>배게</CategoryText>
      </CategoryIconWrapper>
      <CategoryIconWrapper
        onPress={() =>
          navigation.navigate("detail", {
            // id: props.onPressCategory("배게")
          })
        }
      >
        <CategoryIcon
          source={require("../../../../public/images/fastfood.png")}
        />
        <CategoryText>배게</CategoryText>
      </CategoryIconWrapper>
      <CategoryIconWrapper
        onPress={() =>
          navigation.navigate("detail", {
            // id: props.onPressCategory("배게")
          })
        }
      >
        <CategoryIcon
          source={require("../../../../public/images/fastfood.png")}
        />
        <CategoryText>배게</CategoryText>
      </CategoryIconWrapper>
      <CategoryIconWrapper
        onPress={() =>
          navigation.navigate("detail", {
            // id: props.onPressCategory("배게")
          })
        }
      >
        <CategoryIcon
          source={require("../../../../public/images/fastfood.png")}
        />
        <CategoryText>배게</CategoryText>
      </CategoryIconWrapper>
    </CategofyMainWrapper>
  );
};

export default CategoryList;
