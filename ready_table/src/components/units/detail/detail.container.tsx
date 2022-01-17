import { useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
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
import { FETCH_USED_ITEM_QUESTIONS } from "./reviewlist/reviewlist.queries";
const STORAGE_KEY = "@carts";
const DetailContainer = () => {
  const navigation = useNavigation();

  const { id, setId } = useContext(GlobalContext);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: id }
  });
  const [starttime, setStartTime] = useState("");
  const [endtime, setEndTime] = useState("");
  // 데이터없을때는 로그인을하세요.
  const { data: review } = useQuery(FETCH_USED_ITEM_QUESTIONS);

  const [personnel, SetPersonnel] = useState([]);
  const cartProduct: IProduct = {
    productName: data?.fetchUseditem.name,
    productContents: data?.fetchUseditem.contents,
    productPrice: data?.fetchUseditem.price,
    seller: data?.fetchUseditem.seller,
    id: data?.fetchUseditem._id,
    images: data?.fetchUseditem.images,

    remarks: data?.fetchUseditem.remarks
    // createdAt: "12:00"
  };
  // console.log(cartProduct, "cart");

  const onPressStartTime = (e: any) => {
    setStartTime(e.target.value);
  };
  const onPressEndTime = (e: any) => {
    setEndTime(e.target.value);
  };
  const onPressCart = async () => {
    const a: any = await AsyncStorage.getItem("@carts");
    const reservation = JSON.parse(a) || [];

    let isExists = false;
    reservation.forEach((el: any) => {
      if (el._id === id) {
        isExists = true;
      }
    });
    console.log(a, "예약");

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

    Alert.alert("Alert Title", "예약을 하시겠습니까?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]);

    // navigation.navigate("reservation");
    console.log(setStartTime);
  };

  return <DetailUI data={data} onPressCart={onPressCart} />;
};

export default DetailContainer;
