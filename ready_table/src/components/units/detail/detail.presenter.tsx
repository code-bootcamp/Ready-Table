import React, { useEffect, useState } from "react";

import {
  AAA,
  CartButton,
  CartText,
  DataWrapper,
  LineWrapper,
  Mainimg,
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
      <LineWrapper>
        <Tableline></Tableline>
      </LineWrapper>
      {/* 이미지값 받는코드 */}

      {/* {props.data?.fetchUseditems[7].images
        ?.filter(el => el)
        .map(el => (
          <Photo
            key={el}
            source={{ uri: `https://storage.googleapis.com/${el}` }}
          />
        ))} */}

      {/* 맵으로 뿌려보기 or 인덱스값으로 데이터가져와보기 */}

      {/* {props.items?.fetchUseditems
        ?.filter((el: any) => el)
        .map(el => (
          <AAA>{el.name}</AAA>
        ))} */}

      <AAA>{props.items?.fetchUseditems[0].name}</AAA>
      <AAA>{props.items?.fetchUseditems[0].price}</AAA>
      <CartButton onPress={props.onPressCart}>
        <CartText>예약하기-</CartText>
      </CartButton>
    </Wrapper>
  );
};

export default DetailUI;
