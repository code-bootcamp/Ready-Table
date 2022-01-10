import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import DetailUI from "./detail.presenter";

import { IProduct } from "./detail.types";
import { GlobalContext } from "../../../../App";
import { FETCH_USED_ITEMS } from "../home/home.queires";
import {
  IQuery,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemsArgs
} from "../../../commons/types/generated/types";
import { FETCH_USEDITEM } from "./detail.queries";

const DetailContainer = () => {
  const navigation = useNavigation();
  const { setId, setTagId } = useContext(GlobalContext);
  const { id } = useContext(GlobalContext);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: id }
  });
  const { data: items } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);
  // console.log(items, "gggg"); 데이터없을때는 로그인을하세요.

  const cartProduct: IProduct = {
    productName: items?.fetchUseditems[0].name,
    productContents: items?.fetchUseditems[0].contents,
    productPrice: items?.fetchUseditems[0].price,
    seller: items?.fetchUseditems[0].seller,
    id: items?.fetchUseditems[0]._id,
    images: items?.fetchUseditems[0].images
  };

  const onPressCart = async () => {
    const a: any = await AsyncStorage.getItem("@carts");
    const reservation = JSON.parse(a) || [];

    let isExists = false;
    reservation.forEach((el: any) => {
      if (el.id === id) {
        isExists = true;
      }
    });

    // 상품이 늦게 받아와지는 이슈가 있음. 그래서 일단 안받아와졌으면 알람띄우고 리턴
    if (!items?.fetchUseditems[0].name || !items?.fetchUseditems[0].price) {
      Alert.alert("", "예약내역이 아직 없습니다.", [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]);
      return;
    }

    if (isExists) {
      Alert.alert("", "예약이 완료된 식당입니다!", [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]);
      return;
    }

    reservation.push(cartProduct);
    AsyncStorage.setItem("@carts", JSON.stringify(reservation));
    console.log(a);
    // navigation.navigate("예악내역");
    //이부분은 수정이 필요하다.도와ㅏ줘요 네비게이션 마스터 핸솔!!
  };

  return <DetailUI data={data} items={items} onPressCart={onPressCart} />;
};

export default DetailContainer;
