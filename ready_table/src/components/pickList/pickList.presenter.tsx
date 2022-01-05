import React from "react";
import { View, Text } from "react-native";
import { IPickListProps } from "./pickLikst.types";

import {
  ScrollView,
  PickListContainer,
  ListCountWrapper,
  ListCount,
  ListCountContents,
  PickListWrapper,
  PickListCard,
  PickListImage,
  PickListTitle,
  PickListContents,
  PickListBookmark
} from "./pickList.styles";

const PickListUI = (props: any) => {
  return (
    <ScrollView>
      <PickListContainer>
        <ListCountWrapper>
          <ListCount>관심 레스토랑</ListCount>
          {/* <ListCountContents>
            {props.pickCountData?.fetchUseditemsCountIPicked}
          </ListCountContents> */}
        </ListCountWrapper>
        <PickListWrapper>
          <PickListCard>
            {/* <PickListImage source={{ uri: `` }} /> */}
            <PickListTitle>
              {props.data2?.fetchUseditemsIPicked.name}
            </PickListTitle>
            <PickListContents></PickListContents>
            {/* <PickListBookmark source={{ uri: `` }} /> */}
          </PickListCard>
        </PickListWrapper>
      </PickListContainer>
    </ScrollView>
  );
};

export default PickListUI;
