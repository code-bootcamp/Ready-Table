import { useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { AsyncStorage } from "react-native";
import { GlobalContext } from "../../../../App";
import {
  IQuery,
  IQueryFetchUseditemsArgs
} from "../../../commons/types/generated/types";

import ReservationUI from "./reservation.presenter";
import { FETCH_USED_ITEMS } from "./reservation.queries";

const ReservationContainer = () => {
  const [productInfo, setProductInfo] = useState([]);
  const { setId } = useContext(GlobalContext);
  const navigation = useNavigation;
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: {
      isSoldout: true,
      search: "",
      page: 1
    }
  });

  const onLoadMore = () => {
    if (!data) {
      return;
    }

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        return {
          fetchUseditems: [
            ...prev.fetchUsediems,
            ...fetchMoreResult.fetchUseditems
          ]
        };
      }
    });
  };

  useEffect(() => {
    onLoadMore();
  }, [data?.fetchUseditems]);

  useEffect(() => {
    AsyncStorage.getItem("@carts", async (_: any, result: any) => {
      const favoritePr = await JSON.parse(result);
      setProductInfo(favoritePr);
    });
  }, [AsyncStorage.getItem("@carts")]);

  const onPressDetail = (el: any) => {
    setId(el.id);
    console.log(setId);
  };
  const deleteMyFavoritePr = (el: any) => () => {
    const afterDeleteMyFavoritePr = productInfo.filter(
      (favorite: any) => favorite.id !== el.id
    );
    AsyncStorage.setItem("@carts", JSON.stringify(afterDeleteMyFavoritePr));
  };

  return (
    <ReservationUI
      productInfo={productInfo}
      onPressDetail={onPressDetail}
      soldOutList={data?.fetchUseditems}
      deleteMyFavoritePr={deleteMyFavoritePr}
    />
  );
};

export default ReservationContainer;
