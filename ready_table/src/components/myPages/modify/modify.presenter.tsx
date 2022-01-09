import React from "react";

import {
  ScrollView,
  ModifyContainer,
  ModifyTitle,
  ModifyContents,
  ModifyHeader,
  ModifyImage,
  ModifyBody,
  ModifyFooter,
  UserInfoRightWrapper,
  LogoutButton,
  LogoutWrapper
} from "./modify.styles";

interface IProps {
  modifyName: any;
}

const ModifyUI = (props: any) => {
  return (
    <ScrollView>
      <ModifyContainer>
        <ModifyHeader>
          <ModifyImage>{/* 이미지 업로드 컴포넌트 */}</ModifyImage>
          <ModifyTitle>닉네임</ModifyTitle>
          <ModifyContents>{props.data?.fetchUserLoggedIn.name}</ModifyContents>
        </ModifyHeader>
        <ModifyBody>
          <ModifyTitle>이름(실명을 입력해주세요)</ModifyTitle>
          <ModifyContents>김땡떙</ModifyContents>

          <ModifyTitle>휴대폰 번호</ModifyTitle>
          <ModifyContents>010-9999-9999</ModifyContents>

          <ModifyTitle>이메일</ModifyTitle>
          <ModifyContents>test@test.com</ModifyContents>

          <ModifyTitle>비밀번호</ModifyTitle>
          <ModifyContents>********</ModifyContents>
        </ModifyBody>
        <ModifyFooter>
          <ModifyTitle>생일</ModifyTitle>
          <ModifyContents>선택안함</ModifyContents>
          <ModifyTitle>성별</ModifyTitle>
          <ModifyContents>선택안함</ModifyContents>
        </ModifyFooter>
      </ModifyContainer>
      <LogoutWrapper>
        <UserInfoRightWrapper onPress={props.onPressLogout}>
          <LogoutButton>{"로그아웃"}</LogoutButton>
        </UserInfoRightWrapper>
      </LogoutWrapper>
    </ScrollView>
  );
};

export default ModifyUI;
