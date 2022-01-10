import React, { useEffect, useState } from "react";

import {
  AAA,
  CartButton,
  CartText,
  DataWrapper,
  LineWrapper,
  Mainimg,
  NoticeText,
  NoticeWrpper,
  Photo,
  RemarksText,
  Tableline,
  TitleText,
  Wrapper
} from "./detail.styles";
import { IdetailProps } from "./detail.types";
const STORAGE_KEY = "@carts";

const DetailUI = (props: IdetailProps) => {
  // const [toDos, setToDos] = useState({});
  // const saveToDos = async toSave => {
  //   await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  // };
  // const loadToDos = async () => {
  //   const s = await AsyncStorage.getItem(STORAGE_KEY);
  //   setToDos(JSON.parse(s));
  // };
  // useEffect(() => {
  //   loadToDos();
  // }, []);

  return (
    <Wrapper>
      <DataWrapper>
        {/* <TitleText>{props.data?.fetchUseditem.name}</TitleText> */}

        <TitleText>{props.items?.fetchUseditems[0].name}</TitleText>
        {/* <RemarksText>{props.data?.fetchUseditem.remarks}</RemarksText> */}
        <RemarksText>{props.items?.fetchUseditems[0].remarks}</RemarksText>
      </DataWrapper>
      <NoticeWrpper>
        <NoticeText>[특별방역대책 후속조치에 따른 안내사항]</NoticeText>
        <NoticeText>
          - 영업시간 내 수도권 최대 4인까지 예약가능합니다
        </NoticeText>
        <NoticeText>
          - 매장 이용시 방역패스 인증이 필수이며, 모임인원 중 미접종자는 최대
          1명까지만 입장가능합니다.
        </NoticeText>
      </NoticeWrpper>
      <LineWrapper>
        <Tableline></Tableline>
      </LineWrapper>

      <AAA>{props.items?.fetchUseditems[0].name}</AAA>
      <AAA>{props.items?.fetchUseditems[0].price}</AAA>
      <CartButton onPress={props.onPressCart}>
        <CartText>예약하기-</CartText>
      </CartButton>
    </Wrapper>
  );
};

export default DetailUI;

{
  /* 이미지값 받는코드 */
}

{
  /* {props.data?.fetchUseditems[7].images
  ?.filter(el => el)
  .map(el => (
    <Photo
      key={el}
      source={{ uri: `https://storage.googleapis.com/${el}` }}
    />
  ))} */
}

{
  /* 맵으로 뿌려보기 or 인덱스값으로 데이터가져와보기 */
}

{
  /* {props.items?.fetchUseditems
  ?.filter((el: any) => el)
  .map(el => (
    <AAA>{el.name}</AAA>
  ))} */
}
