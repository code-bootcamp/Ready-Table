import React from "react";
// import { useNavigation } from "@react-navigation/native";
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
// const navigation = useNavigation();

const PickListUI = (props: any) => {
  console.log(props.data2);
  console.log(props.pickCountData);
  return (
    <ScrollView>
      <PickListContainer>
        <ListCountWrapper>
          <ListCountLeft>
            <ListCount>관심 레스토랑</ListCount>
            <ListCountContents>
              {props.pickCountData?.fetchUseditemsCountIPicked}
            </ListCountContents>
            <RightArrow
              source={require("../../../../public/images/rightArrow.png")}
            />
          </ListCountLeft>
          <ListCountRight>
            <Feather name="calendar" style={{ color: "#eb4034" }} size={11} />
            <ListCountRightContents>예약하기</ListCountRightContents>
          </ListCountRight>
        </ListCountWrapper>
        {props.data2?.fetchUseditemsIPicked.map(el => (
          <PickListCard
            key={el._id}
            // onPress={() => {
            //   navigation.navigate("datail", {
            //     id: props.onPressDetail(el)
            //   });
            // }}
          >
            <PickListImageTest></PickListImageTest>
            {/* <PickListImage source={{ uri: `https://storage.googleapis.com/${el.images[0]}` }} /> */}
            <PickListContentsWrapper>
              <PickListHeader>
                <PickListTitle>{el.name}</PickListTitle>
                {/* <PickListBookmark source={{ uri: `` }} /> */}
                <Feather
                  name="bookmark"
                  style={{ color: "#eb4034" }}
                  size={11}
                />
              </PickListHeader>
              <PickListRemark>{el.remarks}</PickListRemark>
              <PickListContents>
                <PickListTag>{el.contents}</PickListTag>
              </PickListContents>
            </PickListContentsWrapper>
          </PickListCard>
        ))}
        <PickListWrapper>
          <PickListMemo placeholder=" 나만의 메모를 남겨보세요."></PickListMemo>
        </PickListWrapper>
      </PickListContainer>
    </ScrollView>
  );
};

export default PickListUI;
