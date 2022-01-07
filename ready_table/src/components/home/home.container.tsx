import { useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalContext } from "../../../App";
import {
  IQuery,
  IQueryFetchBoardsArgs
} from "../../commons/types/generated/types";
import HomeUI from "./home.presenter";
import { FETCH_BOARDS, FETCH_USER_LOGGED_IN } from "./home.queires";

const HomeContainer = () => {
  const [startPage, setStartPage] = useState(1);
  // const { setId, setTagId } = useContext(GlobalContext);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: startPage } });

  return <HomeUI />;
};

export default HomeContainer;
