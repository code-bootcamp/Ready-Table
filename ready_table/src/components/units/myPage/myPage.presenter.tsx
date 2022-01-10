import React from "react";

import {
  ScrollView,
  MyPageContainer,
  MyPageHeader,
  MyInfoWrapper,
  MyInfo,
  MyProfileWrapper,
  MyProfile,
  MyPageBody,
  MyPageBodyTitle,
  MyPageContentsWrapper,
  MyPageBodyContents,
  RightArrow,
  UnderBar,
  UserInfoRightWrapper,
  LogoutButton
} from "./myPage.styles";

import { AntDesign } from "@expo/vector-icons";

const MyPageUI = (props: any) => {
  return (
    <ScrollView>
      <MyPageContainer>
        <MyPageHeader>
          <MyInfoWrapper>
            <MyInfo>정보관리</MyInfo>
          </MyInfoWrapper>
          <MyProfileWrapper>
            <MyProfile>프로필</MyProfile>
          </MyProfileWrapper>
        </MyPageHeader>
        <MyPageBody>
          <MyPageBodyTitle>설정</MyPageBodyTitle>
          <MyPageContentsWrapper>
            <MyPageBodyContents>내 정보 수정</MyPageBodyContents>
            <AntDesign name="right" style={{ color: "black" }} size={8} />
          </MyPageContentsWrapper>
          <MyPageContentsWrapper>
            <MyPageBodyContents>내 취향 선택</MyPageBodyContents>
            <RightArrow
              source={require("../../../../public/images/rightArrow.png")}
            />
          </MyPageContentsWrapper>
          <UserInfoRightWrapper onPress={props.onPressLogout}>
            <LogoutButton>{"로그아웃"}</LogoutButton>
          </UserInfoRightWrapper>
        </MyPageBody>
        <UnderBar></UnderBar>
        <MyPageBody>
          <MyPageBodyTitle>고객센터</MyPageBodyTitle>
          <MyPageContentsWrapper>
            <MyPageBodyContents>1:1문의</MyPageBodyContents>
            <AntDesign name="right" style={{ color: "black" }} size={8} />
          </MyPageContentsWrapper>
          <MyPageContentsWrapper>
            <MyPageBodyContents>개선제안하기</MyPageBodyContents>
            <AntDesign name="right" style={{ color: "black" }} size={8} />
          </MyPageContentsWrapper>
          <MyPageContentsWrapper>
            <MyPageBodyContents>공지사항 및 이용약관</MyPageBodyContents>
            <RightArrow
              source={require("../../../../public/images/rightArrow.png")}
            />
          </MyPageContentsWrapper>
        </MyPageBody>
      </MyPageContainer>
    </ScrollView>
  );
};

export default MyPageUI;
