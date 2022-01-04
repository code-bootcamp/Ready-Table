import React from "react";

import {
  ColumDate,
  ColumHeaderDate,
  ColumHeaderPersonnel,
  ColumHeaderUser,
  ColumPersonnel,
  ColumUser,
  MainTitle,
  Row,
  RowTitle,
  TableTop,
  TableWrpper,
  Wrapper
} from "./Reservation.styles";

const ReservationUI = () => {
  return (
    <Wrapper>
      <MainTitle>마이다이닝</MainTitle>
      <TableTop />
      <TableWrpper>
        <RowTitle>
          <ColumHeaderDate>일정</ColumHeaderDate>
          <ColumHeaderPersonnel>인원</ColumHeaderPersonnel>
          <ColumHeaderUser>예약자(User)</ColumHeaderUser>
        </RowTitle>
        <Row>
          <ColumDate>2021.01.03</ColumDate>
          <ColumPersonnel>2명</ColumPersonnel>
          <ColumUser>홍길동</ColumUser>
        </Row>
      </TableWrpper>
    </Wrapper>
  );
};

export default ReservationUI;
