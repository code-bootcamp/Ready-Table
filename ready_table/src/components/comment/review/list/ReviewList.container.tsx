import { useQuery } from "@apollo/client";
import React, { useContext, useState } from "react";
// import { GlobalContext } from "../../../../../App";
import ReviewListUI from "./ReviewList.prsenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./ReviewList.queries";

const ReviewList = (props: any) => {
  // const { UserInfo } = useContext(GlobalContext);
  const [contents, setContents] = useState("");
  const { data: review } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: props.useditemId }
  });

  //project72 comments. c참고하고하기..

  return <ReviewListUI />;
};
export default ReviewList;
