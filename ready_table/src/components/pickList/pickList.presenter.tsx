import React from "react";
import { Feather } from "@expo/vector-icons";

import {
  ScrollView,
  PickListContainer,
  ListCountWrapper,
  ListCount,
  ListCountContents,
  PickListWrapper,
  ListCountLeft,
  ListCountRight,
  ListCountRightImg,
  ListCountRightContents,
  PickListCard,
  PickListImageTest,
  PickListImage,
  PickListHeader,
  PickListTitle,
  PickListContentsWrapper,
  PickListRemark,
  PickListContents,
  PickListBookmark,
  PickListTag,
  RightArrow,
  PickListMemo
} from "./pickList.styles";

const PickListUI = (props: any) => {
  return (
    <ScrollView>
      <PickListContainer>
        <ListCountWrapper>
          <ListCountLeft>
            <ListCount>관심 레스토랑</ListCount>
            <ListCountContents>
              1{/* {props.pickCountData?.fetchUseditemsCountIPicked} */}
            </ListCountContents>
            <RightArrow
              source={require("../../../public/images/rightArrow.png")}
            />
          </ListCountLeft>
          <ListCountRight>
            <Feather name="calendar" style={{ color: "#eb4034" }} size={11} />
            <ListCountRightContents>예약하기</ListCountRightContents>
          </ListCountRight>
        </ListCountWrapper>
        <PickListWrapper>
          <PickListCard>
            <PickListImageTest></PickListImageTest>
            {/* <PickListImage source={{ uri: `` }} /> */}
            <PickListContentsWrapper>
              <PickListHeader>
                <PickListTitle>
                  어거스트힐
                  {/* {props.data2?.fetchUseditemsIPicked.name} */}
                </PickListTitle>
                {/* <PickListBookmark source={{ uri: `` }} /> */}
                <Feather
                  name="bookmark"
                  style={{ color: "#eb4034" }}
                  size={11}
                />
              </PickListHeader>
              <PickListRemark>
                구로역 스테이크 맛있는 소개팅 장소
              </PickListRemark>
              <PickListContents>
                <PickListTag>스테이크,립-구로</PickListTag>
              </PickListContents>
            </PickListContentsWrapper>
          </PickListCard>
          <PickListMemo placeholder=" 나만의 메모를 남겨보세요."></PickListMemo>
        </PickListWrapper>
      </PickListContainer>
    </ScrollView>
  );
};

export default PickListUI;
