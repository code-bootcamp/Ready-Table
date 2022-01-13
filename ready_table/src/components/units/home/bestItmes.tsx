import React, { useState, useCallback, useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "@emotion/native";
export const BestItemContainer = styled.TouchableOpacity`
  padding-top: 50px;
  width: 100%
  height: 317px;
`;
export const BestItemImage = styled.Image`
  width: 30px;
  height: 30px;
`;

const BestItems = props => {
  const navigation = useNavigation();

  return (
    <View>
      {props.bestData?.fetchUseditemsOfTheBest.map((el, index) => (
        <BestItemContainer
          key={el._id}
          onPress={() =>
            navigation.navigate("detail", {
              useditemId: el._id
            })
          }
        >
          <BestItemImage source={{ uri: el.images[0] }} />
        </BestItemContainer>
      ))}
    </View>
  );
};

export default BestItems;
