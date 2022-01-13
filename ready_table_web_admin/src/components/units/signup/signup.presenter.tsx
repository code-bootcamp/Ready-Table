import {
  Wrapper,
  SignupWrapper,
  Logo,
  MainTitleWrapper,
  Line,
  TitleText,
  InputWrapper,
  MainInput,
  Error,
  MainLabel,
  AdminOptionWrapper,
  OptionWrapper,
  AdminOption,
  OptionLabel,
  MainButton,
} from "./signup.styles";

export default function SignupUI(props) {
  return (
    <>
      <Wrapper>
        <SignupWrapper>
          <Logo src="" />
          <MainTitleWrapper>
            <Line />
            <TitleText>회원가입</TitleText>
            <Line />
          </MainTitleWrapper>
          <InputWrapper>
            <MainLabel>이메일</MainLabel>
            <MainInput type="text" onChange={props.onChangeEmail}></MainInput>
            <Error>{props.emailError}</Error>
          </InputWrapper>
          <InputWrapper>
            <MainLabel>이름</MainLabel>
            <MainInput type="text" onChange={props.onChangeName}></MainInput>
            <Error>{props.nameError}</Error>
          </InputWrapper>
          <InputWrapper>
            <MainLabel>비밀번호</MainLabel>
            <MainInput
              type="password"
              onChange={props.onChangePassword}
            ></MainInput>
            <Error>{props.passwordError}</Error>
          </InputWrapper>
          <InputWrapper>
            <MainLabel>비밀번호 확인</MainLabel>
            <MainInput
              type="password"
              onChange={props.onChangePassword}
            ></MainInput>
            <Error>{props.passwordError}</Error>
          </InputWrapper>
          <AdminOptionWrapper>
            <OptionWrapper>
              <AdminOption
                name="optionradio"
                type="radio"
                onClick={props.onClickIsNotSuper}
              />
              <OptionLabel>사장님</OptionLabel>
            </OptionWrapper>
            <OptionWrapper>
              <AdminOption
                name="optionradio"
                type="radio"
                onClick={props.onClickIsSuper}
              />
              <OptionLabel>관리자</OptionLabel>
            </OptionWrapper>
          </AdminOptionWrapper>
          <MainButton onClick={props.onClickSignup}>회원가입</MainButton>
        </SignupWrapper>
      </Wrapper>
    </>
  );
}
