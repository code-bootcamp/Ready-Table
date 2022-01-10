import React from "react";
import { Fontisto } from "@expo/vector-icons";
import {
  AAAImage,
  ColumDate,
  ColumPersonnel,
  ColumUser,
  MainTitle,
  NonReserText,
  NonReserWrapper,
  ReserWrapper,
  Row,
  TableTop,
  TableWrpper,
  Wrapper
} from "./reservation.styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { IReservationProps } from "./reservation.types";
import { useNavigation } from "@react-navigation/native";

const ReservationUI = (props: IReservationProps) => {
  const navigation = useNavigation();
  const soldOutList = props.soldOutList?.map((el: any) => el._id);
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Wrapper>
        <TableTop>
          <MainTitle>나의예약</MainTitle>
        </TableTop>
        <ReserWrapper>
          <AAAImage></AAAImage>
          <TableWrpper>
            {/* {(!props.productInfo || props.productInfo?.length === 0) && ( */}
            <NonReserWrapper>
              {/* <NonReserText>예약된 내역이 없습니다.</NonReserText> */}
            </NonReserWrapper>
            {/* )} */}
            {/* {props.productInfo?.map(el => ( */}
            <Row>
              <ColumDate>비스트로 앤트로</ColumDate>
              {/* <ColumDate>{el.productName}</ColumDate> */}
              <ColumPersonnel>구로G벨리 지하2층</ColumPersonnel>
              {/* <ColumPersonnel>{el.place}수정필요</ColumPersonnel> */}
              <ColumUser>2022.02.15 오후12:30 4명</ColumUser>
              {/* <ColumUser>{el.creatAt}수정필요..</ColumUser> */}
            </Row>
            {/* ))} */}
          </TableWrpper>
          <TouchableOpacity>
            <Fontisto name="trash" size={15} color="#EB4034" />
          </TouchableOpacity>
        </ReserWrapper>
      </Wrapper>
    </ScrollView>
  );
};

export default ReservationUI;
