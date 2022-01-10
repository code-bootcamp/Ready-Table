import { useMutation, useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalContext } from "../../../../App";
import HomeUI from "./home.presenter";
import { FETCH_USED_ITEMS, FETCH_USED_ITEMS_OF_THE_BEST } from "./home.queires";

import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IQueryFetchUseditemsIPickedArgs
} from "../../../commons/types/generated/types";
const HomeContainer = () => {
  const { setId, setTagId } = useContext(GlobalContext);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: {
      page: 1
    }
  });
  const { data: bestData } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);
  const onPressDetail = (el: any) => {
    setId(el._id);
  };
  const onPressCategory = value => {
    setTagId(value);
  };
  return (
    <HomeUI
      data={data}
      onPressDetail={onPressDetail}
      onPressCategory={onPressCategory}
      bestData={bestData}
    />
  );
};

export default HomeContainer;
