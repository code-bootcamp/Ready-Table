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

export const ListWrapper = styled.Pressable`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const List = styled.TouchableOpacity``;
export const ListName = styled.Text`
  font-weight: bold;
  font-size: 15px;
  margin-left: 10px;
`;

export const ListIamge = styled.Image`
  width: 175px;
  height: 100px;
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
  );
};

export default categoryDetail;
