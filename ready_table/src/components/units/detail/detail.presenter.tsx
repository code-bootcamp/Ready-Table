import React from "react";
import { ScrollView } from "react-native";
import ReservationContainer from "../reservation/reservation.container";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import {
  ContentsText,
  DataWrapper,
  IconText,
  IconTextWrapper,
  IconWrapper,
  LineBar,
  MenuText,
  NotiText1,
  NotiText2,
  NotiText3,
  NotiWrapper,
  RemarksText,
  TimeBox,
  TimeText,
  TimeTitleText,
  TimeWrapper,
  TitleText,
  Wrapper
} from "./detail.styles";
import { IdetailProps } from "./detail.types";
const STORAGE_KEY = "@carts";

const DetailUI = (props: IdetailProps) => {
  return (
    <Wrapper>
      <NotiWrapper>
        <NotiText1>[특별방역대책 후속조치에 따른 안내사항]</NotiText1>
        <NotiText2>-접종자 기준 4인이상은 식당을 이용할 수 없습니다</NotiText2>
        <NotiText3>
          -방역패스는 필수이며, 미접종자는 1명까지 입장가능합니다.
        </NotiText3>
      </NotiWrapper>
      <LineBar></LineBar>
      <DataWrapper>
        {/* <TitleText>{props.data?.fetchUseditem.name}</TitleText> */}
        <TitleText>{props.items?.fetchUseditems[0].name}</TitleText>
        {/* <RemarksText>{props.data?.fetchUseditem.remarks}</RemarksText> */}
        <RemarksText>{props.items?.fetchUseditems[0].remarks}</RemarksText>
        <MenuText>가격대</MenuText>
        <ContentsText>{props.items?.fetchUseditems[0].contents}</ContentsText>
        <ContentsText>안심카츠 : 13000원</ContentsText>
        <ContentsText>등심카츠 : 11000원</ContentsText>
      </DataWrapper>
      <LineBar></LineBar>
      <TimeTitleText>예약가능 시간</TimeTitleText>
      <TimeWrapper>
        <TimeBox onPress={props.onPressCart}>
          <TimeText>오전 11:00</TimeText>
        </TimeBox>
        <TimeBox onPress={props.onPressCart}>
          <TimeText>오후 12:00</TimeText>
        </TimeBox>
        <TimeBox onPress={props.onPressCart}>
          <TimeText>오후 01:00</TimeText>
        </TimeBox>
      </TimeWrapper>
      <LineBar></LineBar>
      <IconWrapper>
        <IconTextWrapper>
          <MaterialIcons name="restaurant" size={23} color="black" />
          <IconText>점심예약</IconText>
        </IconTextWrapper>
        <IconTextWrapper>
          <AntDesign name="team" size={30} color="black" />
          <IconText>2인이상</IconText>
        </IconTextWrapper>
        <IconTextWrapper>
          <MaterialIcons name="local-parking" size={30} color="black" />
          <IconText>주차가능</IconText>
        </IconTextWrapper>
        <IconTextWrapper>
          <MaterialIcons name="family-restroom" size={30} color="black" />
          <IconText>가족룸</IconText>
        </IconTextWrapper>
      </IconWrapper>
    </Wrapper>
  );
};

export default DetailUI;

/* {props.data?.fetchUseditems[7].images
  ?.filter(el => el)
  .map(el => (
    <Photo
      key={el}
      source={{ uri: `https://storage.googleapis.com/${el}` }}
    />
  ))} */

/* 맵으로 뿌려보기 or 인덱스값으로 데이터가져와보기 */

/* {props.items?.fetchUseditems
  ?.filter((el: any) => el)
  .map(el => (
    <AAA>{el.name}</AAA>
  ))} */

/* <AAA>{props.items?.fetchUseditems[0].name}</AAA>
<AAA>{props.items?.fetchUseditems[0].price}</AAA>
<CartButton onPress={props.onPressCart}>
  <CartText>예약하기-</CartText>
</CartButton>
</Wrapper> */
