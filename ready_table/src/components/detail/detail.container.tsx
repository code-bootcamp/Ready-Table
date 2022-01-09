import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, AsyncStorage } from "react-native";
import { GlobalContext } from "../../../App";
import {
  IQuery,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemsArgs,
  IUseditem
} from "../../commons/types/generated/types";

import DetailUI from "./detail.presenter";
import { FETCH_USED_ITEM, FETCH_USED_ITEMS } from "./detail.queires";
import { IProduct } from "./detail.types";

const DetailContainer = () => {
  const navigation = useNavigation();
  const { setId, setTagId } = useContext(GlobalContext);
  const { id } = useContext(GlobalContext);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: id }
  });
  const { data: items } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);
  // console.log(items, "gggg"); 데이터없을때는 로그인을하세요.

  const cartProduct: IProduct = {
    productName: data?.fetchUseditem.name,
    productContents: data?.fetchUseditem.contents,
    productPrice: data?.fetchUseditem.price,
    seller: data?.fetchUseditem.seller,
    id: data?.fetchUseditem._id,
    images: data?.fetchUseditem.images
  };

  const onPressCart = async () => {
    const a: any = await AsyncStorage.getItem("@carts");
    const products = JSON.parse(a) || [];

    let isExists = false;
    products.forEach((el: any) => {
      if (el.id === id) {
        isExists = true;
      }
    });

    // 상품이 늦게 받아와지는 이슈가 있음. 그래서 일단 안받아와졌으면 알람띄우고 리턴
    if (!data?.fetchUseditem.name || !data?.fetchUseditem.price) {
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

    products.push(cartProduct);
    AsyncStorage.setItem("@carts", JSON.stringify(products));
    navigation.navigate("예악내역");
    //이부분은 수정이 필요하다.
  };

  return <DetailUI data={data} items={items} onPressCart={onPressCart} />;
};

export default DetailContainer;
