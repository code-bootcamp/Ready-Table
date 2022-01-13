import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import DetailUI from "./detail.presenter";

import { GlobalContext } from "../../../../App";
import { FETCH_USED_ITEMS } from "../home/home.queires";
import {
  IQuery,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemsArgs
} from "../../../commons/types/generated/types";
import { FETCH_USEDITEM } from "./detail.queries";
import { IProduct } from "./detail.types";
const STORAGE_KEY = "@carts";
const DetailContainer = () => {
  const navigation = useNavigation();

  const { id } = useContext(GlobalContext);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: id }
  });
  // 데이터없을때는 로그인을하세요.

  const cartProduct: IProduct = {
    productName: data?.fetchUseditem.name,
    productContents: data?.fetchUseditem.contents,
    productPrice: data?.fetchUseditem.price,
    seller: data?.fetchUseditem.seller,
    id: data?.fetchUseditem._id,
    images: data?.fetchUseditem.images,
    remarks: data?.fetchUseditem.remarks,
    createdAt: data?.fetchUseditem.createdAt
  };
  // console.log(cartProduct, "cart");
  const onPressCart = async () => {
    const a: any = await AsyncStorage.getItem("@carts");
    const reservation = JSON.parse(a) || [];

    console.log(a);
    let isExists = false;
    reservation.forEach((el: any) => {
      if (el._id === id) {
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

    reservation.push(cartProduct);
    AsyncStorage.setItem("@carts", JSON.stringify(reservation));
    Alert.alert("", "예약을 하시겠습니까?");
    // navigation.navigate("reservation");
  };

  return <DetailUI data={data} onPressCart={onPressCart} />;
};

export default DetailContainer;
