import styled from "@emotion/styled";
import Select from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const DetailText = styled(ReactQuill)`
  height: 190px;
  width: 1000px;
  padding-bottom: 40px;
  margin-bottom: 10px;
  /* border: 2px solid salmon; */
  /* text-indent: 18px; */
  border: 1px solid #dd4124;
  /* border: 1px; */
  outline: none;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 32px 0px 64px 72px;
  background-color: white;
`;

export const Name = styled.div`
  /* color: white; */
  margin-right: 28px;
  margin-top: 15px;
  margin-bottom: 60px;
  font-weight: 900;
`;

export const NameWrite = styled.div`
  /* color: white; */
  font-weight: 900;
  margin-right: 28px;
  height: 240px;
`;

export const Title = styled.div`
  font-family: NotoSans-Bold;
  margin-bottom: 32px;

  font-style: normal;
  font-size: 20px;
`;

export const InnerWrapper = styled.div`
  width: 1400px;
  background-color: white;
  display: flex;
  flex-direction: row;
`;

export const LeftWrapper = styled.div`
  width: 170px;
  /* height: 100%; */
  /* border: solid; */
  display: flex;
  flex-direction: column;

  align-items: flex-end;
`;
export const RightWrapper = styled.div`
  width: 990px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const NameWrapper = styled.div`
  box-sizing: border-box;
  margin-bottom: 30px;
  width: 1000px;
  border: none;
`;

export const NameInput = styled.input`
  box-sizing: border-box;
  width: 1000px;
  height: 54px;
  text-indent: 18px;
  border: 1px solid #dd4124;
  /* border: 1px; */
  outline: none;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 228px;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const PriceWrapper = styled.div`
  box-sizing: border-box;
  margin-bottom: 30px;
`;

export const PriceInput = styled.input`
  box-sizing: border-box;
  width: 1000px;
  height: 54px;
  text-indent: 18px;
  border: 1px solid #dd4124;
  outline: none;
`;

export const CategoryWrapper = styled.div`
  margin-bottom: 50px;
`;

export const MyBox = styled(Box)`
  /* text-indent: 18px; */
  border: 1px solid white;
  /* border: 1px; */
  outline: none;
`;

export const MyFormControl = styled(FormControl)`
  border: 1px solid white;
  /* border: 1px; */
  outline: none;
`;

export const MyInputLabel = styled(InputLabel)`
  /* border: 1px; */
  outline: none;
  color: #dd4124;
`;

export const MySelect = styled(Select)`
  border: 1px solid white;
  /* border: 1px; */
  outline: none;
`;

export const MyMenuItem = styled(MenuItem)`
  /* border: 1px; */
  outline: none;
`;

export const Tagdiv = styled.div`
  background-color: blue;
`;

export const ImgWrapper = styled.div`
  display: flex;
`;

export const UploadImage = styled.div`
  /* border: 1px solid red; */
  margin-left: 40px;
  display: flex;
  flex-direction: column;
`;

export const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageArea = styled.div``;

export const ButtonWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`;

export const UploadButton = styled.button`
  border: none;
  width: 339px;
  height: 48px;
  color: white;
  background-color: #dd4124;
  /* border-radius: 8px; */
  font-size: 18px;
  /* margin-top: 30px;/ */
`;
