import { useRef, useState } from "react";
import UploadUI from "./upload.presenter";

export default function Upload(props) {
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
      alert("5MB이상 파일은 업로드 할 수 없습니다.");
      return;
    }
    if (!file.type.includes("jpeg") && !file.type.includes("png")) {
      alert("jpeg 또는 png 확장자만 업로드 가능합니다.");
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data: any) => {
      setFileUrl(data.target?.result);
      props.onChangeFile(file);
    };
  }
  return (
    <UploadUI
      fileRef={fileRef}
      fileUrl={fileUrl}
      defaultPicture={props.defaultPicture}
      onClickUploadImage={onClickUploadImage}
      onChangeImage={onChangeImage}
    />
  );
}
