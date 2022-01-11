import { useQuery } from "@apollo/client";
import React from "react";
import { gql } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../myPageMain/myPage.queries";
import MyProfileUI from "./myProfile.presenter";

const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($page: Int) {
    fetchPointTransactionsOfLoading(page: $page) {
      _id
      impUid
      balance
      createdAt
      amount
    }
  }
`;

const MyProfile = () => {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: pointData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING, {
    variables: { page: 1 }
  });
  return <MyProfileUI data={data} pointData={pointData} />;
};

export default MyProfile;
