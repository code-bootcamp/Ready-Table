import ProfileUpload from "../../commons/profileUpload/profileUpload.container";
import {
  Wrapper,
  ModifyTitle,
  ModifyWrapper,
  LeftWrapper,
  ImageTitle,
  ImageLabel,
  UserName,
  ImageModifyButton,
  RightWrapper,
  Header,
  NameWrapper,
  Title,
  InputWrapper,
  Input,
  ButtonWrapper,
  ModifyButton,
  Label,
} from "./modify.styles";

export default function ModifyUI(props) {
  return (
    <Wrapper>
      <ModifyTitle>내 정보 수정</ModifyTitle>
      <ModifyWrapper>
        <LeftWrapper>
          <ImageTitle>프로필 사진 변경</ImageTitle>
          <ImageLabel>변경 할 사진</ImageLabel>
          <ProfileUpload
            onChange={props.onChangeFile}
            defulatPicture={props.data?.fetchUserLoggedIn.picture}
          />
          <UserName>{props.data?.fetchUserLoggedIn.name}님</UserName>
          <ImageModifyButton onClick={props.onClickUpdateUserPicture}>
            프로필 사진 변경하기
          </ImageModifyButton>
        </LeftWrapper>
        <RightWrapper>
          <Header>
            <NameWrapper>
              <Title>닉네임 변경</Title>
              <InputWrapper>
                <Label>변경할 닉네임</Label>
                <Input type="text" onChange={props.onChangeName} />
              </InputWrapper>
              <ButtonWrapper>
                <ModifyButton onClick={props.onClickUpdateUserName}>
                  닉네임 변경하기
                </ModifyButton>
              </ButtonWrapper>
            </NameWrapper>
          </Header>
          <Header>
            <Title>비밀번호 변경</Title>
            <InputWrapper>
              <Label>새 비밀번호</Label>
              <Input type="password" onChange={props.onChangePassword} />
            </InputWrapper>
            <InputWrapper>
              <Label>새 비밀번호 확인</Label>
              <Input type="password" onChange={props.onChangeCheckPassword} />
            </InputWrapper>
            <ButtonWrapper>
              <ModifyButton onClick={props.onClickRestPassword}>
                비밀번호 변경하기
              </ModifyButton>
            </ButtonWrapper>
          </Header>
        </RightWrapper>
      </ModifyWrapper>
    </Wrapper>
  );
}
