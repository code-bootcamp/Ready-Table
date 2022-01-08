import React, { useContext } from "react";
import { FETCH_USEDITEM } from "./detail.queries";
import { GlobalContext } from "../../../App";
import DetailUI from "./detail.presenter";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs
} from "../../commons/types/generated/types";

const DetailContainer = () => {
  const { id } = useContext(GlobalContext);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: {
      useditemId: id
    }
  });
  return <DetailUI data={data} />;
};

export default DetailContainer;
