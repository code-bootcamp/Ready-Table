import * as React from "react";
import { Controller } from "react-hook-form";
import { TouchableOpacity, View } from "react-native";
import Login from "../commons/login";
import {
  Wrapper,
  LogoWrapper,
  LogoText,
  UserInput,
  LoginButtonWrapper,
  LoginButton,
  SignUpWrapper,
  SignUp
} from "./login.styles";

const MainLoginUi = (props: any) => {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoText>READY TABLE</LogoText>
      </LogoWrapper>
      <Controller
        control={props.control}
        name="email"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <UserInput
            onBlur={onBlur}
            onChangeText={(data: string) => onChange(data)}
            value={value}
            placeholder="이메일을 입력해주세요"
          />
        )}
      />
      <Controller
        control={props.control}
        name="password"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <UserInput
            onBlur={onBlur}
            onChangeText={(el: any) => onChange(el)}
            value={value}
            placeholder="비밀번호를 입력해주세요"
            secureTextEntry={true} // 비밀번호 입력
          />
        )}
      />
      <View style={{ padding: "auto" }}>
        <LoginButtonWrapper onPress={props.handleSubmit(props.onAppLogin)}>
          <LoginButton>{"로그인"}</LoginButton>
        </LoginButtonWrapper>
        {/* <SocialLogin /> */}
        <Login></Login>
      </View>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("SignUp");
        }}
      >
        <SignUpWrapper>
          <SignUp>{"이메일로 회원가입"}</SignUp>
        </SignUpWrapper>
      </TouchableOpacity>
    </Wrapper>
  );
};
export default MainLoginUi;
