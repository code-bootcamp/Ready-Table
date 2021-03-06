import ProfileModifyUI from "./modify.presenter";
import { UPLOAD_FILE } from "../../commons/profileUpload/profileUpload.queries";
import {
  FETCH_USER_LOGGEDIN,
  RESORT_USER_PASSWORD,
  UPDATE_USER_INPUT,
} from "./modify.queries";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
export default function ProfileModify() {
  const [resetUserPassword] = useMutation(RESORT_USER_PASSWORD);
  const [updateUser] = useMutation(UPDATE_USER_INPUT);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const { data } = useQuery(FETCH_USER_LOGGEDIN);

  const [myPassword, setMyPassword] = useState("");
  const [myName, setMyName] = useState("");
  const [files, setFiles] = useState(null);

  const [myCheckPassword, setMyCheckPassword] = useState("");
  function onChangePassword(event) {
    setMyPassword(event.target.value);
  }

  function onChangeName(event) {
    setMyName(event.target.value);
  }

  function onChangeCheckPassword(event) {
    setMyCheckPassword(event.target.value);
  }

  function onChangeFile(file) {
    setFiles(file);
  }

  async function onClickResetPassword() {
    if (myPassword !== myCheckPassword) {
      alert("확인 비밀번호가 같지 않습니다.");
      return;
    }
    try {
      await resetUserPassword({
        variables: { password: myPassword },
      });
      alert("비밀번호가 수정 되었습니다.");
    } catch (error) {
      console.log(error.message);
    }
  }

  async function onClickUpdateUserName() {
    if (/[!?@#$%^&*():;+-=~{}<>]/.test(myName)) {
      alert("특수부호를 입력할 수 없습니다.");
      return;
    }
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            name: myName,
          },
        },
      });
      alert("이름이 변경되었습니다.");
    } catch (error) {
      console.log(error);
    }
  }

  async function onClickUpdateUserPicture() {
    try {
      const result = await uploadFile({
        variables: { file: files },
      });

      const myPicture = result.data?.uploadFile.url;

      await updateUser({
        variables: {
          updateUserInput: { picture: myPicture },
        },
      });
      alert("프로필 사진이 변경되었습니다.");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <ProfileModifyUI
      onChangePassword={onChangePassword}
      onChangeCheckPassword={onChangeCheckPassword}
      onChangeName={onChangeName}
      onClickResetPassword={onClickResetPassword}
      onClickUpdateUserName={onClickUpdateUserName}
      onChangeFile={onChangeFile}
      onClickUpdateUserPicture={onClickUpdateUserPicture}
      data={data}
    />
  );
}
