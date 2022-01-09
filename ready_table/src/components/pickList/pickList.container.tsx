import React, { useState, useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";
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
  // const { setId }: any = useContext(GlobalContext);
  // const { data } = useQuery<
  //   Pick<IQuery, "fetchUseditem">,
  //   IQueryFetchUseditemArgs
  // >(FETCH_USEDITEM, {
  //   variables: {
  //     useditemId: props.item
  //   }
  // });
  const { data: data2 } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_I_PICKED, {
    variables: { search: "" }
  });
  // const [toggleUseditemPick] = useMutation(USEDITEM_PICK);
  // const [IsPicked, setIsPicked] = useState(false);
  // const newPicked = data2?.fetchUseditemsIPicked.map(el => el._id);

  const { data: pickCountData } = useQuery(FETCH_USEDITEMS_COUNT_I_PICKED);

  // const onPressPIckTest = () => {};

  //상품 찜하기
  // const onPressPick = () => {
  //   toggleUseditemPick({
  //     variables: { useditemId: Id },
  //     refetchQueries: [
  //       {
  //         query: FETCH_USEDITEM,
  //         variables: { useditemId: router.query.useditemId }
  //       },
  //       {
  //         query: FETCH_USEDITEMS_I_PICKED,
  //         variables: { search: "", page: 1 }
  //       }
  //     ]
  //   });

  //   newPicked?.includes(data?.fetchUseditem._id)
  //     ? setIsPicked(false)
  //     : setIsPicked(true);
  // };

  // const onPressDetail = (el: any) => {
  //   setId(el._id);
  // };

  return (
    <PickListUI
      // data={data}
      data2={data2}
      pickCountData={pickCountData}
      // onPressPick={onPressPick}
      // onPressDetail={onPressDetail}
    />
  );
};

export default PickListContainer;
