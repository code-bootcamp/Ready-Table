import React from "react";
import { Text, View } from "react-native";
import { FETCH_USED_ITEMS } from "./home.queires";

import { useQuery } from "@apollo/client";
import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";
import {
  IQuery,
  IQueryFetchUseditemsArgs
} from "../../../commons/types/generated/types";
const CategoryWrapper = styled.View`
  margin-top: 50px;
`;
const CategoryText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
`;
const ListWrapper = styled.ScrollView`
elevation :5
border-radius:4px;
border-width:0.5;
border-color:'#d6d7da'
margin:20px;
elevation:5;

/* flex-direction: row;
  flex-wrap: wrap;
  width: 100%; */
`;

const List = styled.TouchableOpacity``;
const ListName = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
`;

export const ListIamge = styled.Image`
  width: 100%
  height: 200px;
  border-top-left-radius: 10;
  border-top-right-radius: 10;
  border-bottom-left-radius: 10;
  border-bottom-right-radius: 10;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
const categoryDetail = ({ route }) => {
  const navigation = useNavigation();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, { variables: { search: route.params.id } });
  // console.log(route.params.id);
  console.log(data);
  return (
    <CategoryWrapper>
      <CategoryText>{route.params.id} 카테고리 항목입니다</CategoryText>
      <ListWrapper>
        {data?.fetchUseditems.map((el, index) => (
          <List
            key={el._id}
            onPress={() =>
              navigation.navigate("detail", {
                ustiemId: el._id
              })
            }
          >
            <ListIamge source={{ uri: el.images[0] }} resizeMode="cover" />
            <ListName> {String(el.name).split("-")[1]}</ListName>
            {/* {String(el.name).split("-")[1]} */}
          </List>
        ))}
      </ListWrapper>
    </CategoryWrapper>
  );
};

export default categoryDetail;
