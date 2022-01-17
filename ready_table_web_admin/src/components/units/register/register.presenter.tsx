import * as S from "./register.styles";

import Select from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";

import Box from "@mui/material/Box";

import ReactQuil01 from "./register.quill";

import DropZone01 from "../../commons/dropzone/Dropzone.container";
import Uploads from "../../commons/upload/upload.container";

export default function RegisterUI(props) {
  return (
    <S.Wrapper>
      <S.Title>음식점 정보 등록</S.Title>
      <form
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickUpdateProduct : props.onClickUploadProudct
        )}
      >
        <S.InnerWrapper>
          <S.LeftWrapper>
            <S.Name>상호명</S.Name>
            <S.NameWrite>업장설명</S.NameWrite>
            <S.Name>가격대</S.Name>
            <S.Name>카테고리</S.Name>
            <S.Name>이미지첨부</S.Name>
          </S.LeftWrapper>
          <S.RightWrapper>
            <S.NameWrapper>
              <S.NameInput
                type="text"
                onChange={props.onChangeMyName}
                placeholder="상호 명을 입력해주세요."
                defaultValue={props.fetchData?.fetchUseditem.name.split("#")[1]}
              />
            </S.NameWrapper>
            <S.ContentWrapper>
              <ReactQuil01
                onChange={props.onChangeMyContent}
                isEdit={props.isEdit}
                defaultValue={props.fetchData?.fetchUseditem.contents}
              />
            </S.ContentWrapper>
            <S.PriceWrapper>
              <S.PriceInput
                type="number"
                onChange={props.onChangeMyPrice}
                placeholder="상품 가격을 입력해주세요."
                defaultValue={props.fetchData?.fetchUseditem.price}
              />
            </S.PriceWrapper>
            <S.CategoryWrapper>
              <S.MyBox>
                <S.MyFormControl fullWidth>
                  {!props.isEdit ? (
                    <S.MyInputLabel id="demo-simple-select-label">
                      카테고리
                    </S.MyInputLabel>
                  ) : (
                    <S.MyInputLabel id="demo-simple-select-label">
                      {props.fetchData?.fetchUseditem.tags}
                    </S.MyInputLabel>
                  )}

                  <S.MySelect
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.age}
                    label="Age"
                    onChange={props.handleChange}
                  >
                    <S.MyMenuItem value={"한식"}>한식</S.MyMenuItem>
                    <S.MyMenuItem value={"양식"}>양식</S.MyMenuItem>
                    <S.MyMenuItem value={"일식"}>일식</S.MyMenuItem>
                    <S.MyMenuItem value={"분식"}>분식</S.MyMenuItem>
                    <S.MyMenuItem value={"패스트푸드"}>패스트푸드</S.MyMenuItem>
                    <S.MyMenuItem value={"도시락"}>도시락</S.MyMenuItem>
                    <S.MyMenuItem value={"중식"}>중식</S.MyMenuItem>
                  </S.MySelect>
                </S.MyFormControl>
              </S.MyBox>
              <S.Tagdiv>{props.tag?.length ? `#${props.tag}` : ""}</S.Tagdiv>
              {/* </div> */}
            </S.CategoryWrapper>
            <S.ImgWrapper>
              <S.UploadImage>
                <S.ImagesWrapper>
                  {new Array(3).fill(1).map((el, index) => (
                    <Uploads
                      onChangeFiles={props.onChangeFiles}
                      defaultFileUrl={
                        props.fetchData?.fetchUseditem.images?.[index]
                      }
                      key={`${el}_${index}`}
                      index={index}
                      type="submit"
                    />
                  ))}
                </S.ImagesWrapper>
                <S.ImageArea>
                  <DropZone01
                    onChangeFiles={props.onChangeFiles}
                    defaultFileUrl={props.fetchData?.fetchUseditem.images}
                    data={props.fetchData}
                    isEdit={props.isEdit}
                  />
                </S.ImageArea>
              </S.UploadImage>
            </S.ImgWrapper>
          </S.RightWrapper>
        </S.InnerWrapper>
        <S.ButtonWrapper>
          <S.UploadButton onClick={props.onClickUploadProudct}>
            정보 수정하기
          </S.UploadButton>
        </S.ButtonWrapper>
      </form>
    </S.Wrapper>
  );
}
