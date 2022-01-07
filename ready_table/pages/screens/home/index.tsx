import React from "react";
// import ReviewList from "../../../src/components/comment/review/list/ReviewList.container";
import HomeContainer from "../../../src/components/home/home.container";
import Login from "../../../src/components/commons/login";
import MainLogin from "../../../src/components/login/login.container";
const HomeScreen = () => {
  return (
    <>
      <HomeContainer />
      {/* <ReviewList /> */}
      {/* <Login /> */}
      <MainLogin />
    </>
  );
};

export default HomeScreen;
