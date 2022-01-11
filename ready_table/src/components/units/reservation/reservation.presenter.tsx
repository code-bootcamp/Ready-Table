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
            {(!props.productInfo || props.productInfo?.length === 0) && (
              <NonReserWrapper>
                <NonReserText>예약된 내역이 없습니다.</NonReserText>
              </NonReserWrapper>
            )}
            {props.productInfo?.map(el => (
              <Row>
                <ColumDate>{el.productName}</ColumDate>
                <ColumPersonnel>{el.remarks}</ColumPersonnel>
                {/* <ColumPersonnel>{el.place}수정필요</ColumPersonnel> */}
                {/* <ColumUser>2022.02.15 오후12:30 4명</ColumUser> */}
                <ColumUser>{el.creatAt}</ColumUser>
              </Row>
            ))}
          </TableWrpper>
          <TouchableOpacity>
            <Fontisto name="trash" size={15} color="#EB4034" />
          </TouchableOpacity>
        </ReserWrapper>
      </Wrapper>
    </ScrollView>
  );
};

// 고민..
// 장바구니(예약)에 내가 저장한 값을 어떻게 넣는가?
// View에 onClick 같은 기능은 어떻게 구현하는가?

export default ReservationUI;
