import ProfileUploadUI from "./profileUpload.presenter";
import { useRef, useState } from "react";

export default function ProfileUpload(props) {
  const fileRef = useRef(null);
  const [fileUrl, setFileUrl] = useState("");

  function onClickUploadImage() {
    fileRef.current?.click();
  }

  function onChangeImage(event) {
    const file = event.target.files[0];
    if (!file) {
      alert("파일이 없습니다.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("5MB 미만 파일만 업로드 가능합니다.");
      return;
    }
    if (!file.type.includes("jpeg") && !file.type.includes("png")) {
      alert("jpeg 또는 png 확장자만 업로드 가능합니다.");
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data: any) => {
      setFileUrl(data.target.result);
      props.onChangeFile(file);
    };
  }
  return (
    <ProfileUploadUI
      fileRef={fileRef}
      fileUrl={fileUrl}
      defaultPicture={props.defaultPicture}
      onClickUploadImage={onClickUploadImage}
      onChangeImage={onChangeImage}
    />
  );
}
