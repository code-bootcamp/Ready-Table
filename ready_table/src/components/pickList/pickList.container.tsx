import React, { useState, useContext, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
// import { useNavigation} from "react-navigation-hooks"
import { GlobalContext } from "../../../App";

import PickListUI from "./pickList.presenter";

import {
  FETCH_USEDITEMS_I_PICKED,
  FETCH_USEDITEMS_COUNT_I_PICKED,
  USEDITEM_PICK,
  FETCH_USEDITEM
} from "./pickList.queries";
import {
  IQuery,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemsIPickedArgs
} from "../../commons/types/generated/types";

const PickListContainer = () => {
  const { id, setId }: any = useContext(GlobalContext);
  const [toggleUseditemPick] = useMutation(USEDITEM_PICK);
  const [IsPicked, setIsPicked] = useState(false);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: {
      useditemId: id
    }
  });
  const { data: data2 } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_I_PICKED, {
    variables: { search: "" }
  });

  const { data: pickCountData } = useQuery(FETCH_USEDITEMS_COUNT_I_PICKED);
  const newPicked = data2?.fetchUseditemsIPicked.map(el => el._id);

  //상품 찜하기
  const onPressPick = () => {
    toggleUseditemPick({
      variables: { useditemId: id },
      refetchQueries: [
        {
          query: FETCH_USEDITEM,
          variables: { useditemId: id }
        },
        {
          query: FETCH_USEDITEMS_I_PICKED,
          variables: { search: "" }
        }
      ]
    });
  };
  useEffect(() => {
    newPicked?.includes(data?.fetchUseditem._id)
      ? setIsPicked(false)
      : setIsPicked(true);
  }, [data2]);

  const onPressDetail = (el: any) => {
    setId(el._id);
  };
  console.log(data);

  return (
    <PickListUI
      data={data}
      data2={data2}
      pickCountData={pickCountData}
      onPressPick={onPressPick}
      onPressDetail={onPressDetail}
      IsPicked={IsPicked}
    />
  );
  console.log(data?.fetchUseditem);
};

export default PickListContainer;
