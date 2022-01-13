import React from "react";
import { Fontisto } from "@expo/vector-icons";
import {
  ContentsText,
  DataAt,
  DataName,
  DataWrapper,
  ImgWrapper,
  ListTitleWrapper,
  NonReserText,
  NonReserWrapper,
  ReserImg,
  ReserWrapper,
  TitleText,
  Wrapper
} from "./reservation.styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { IReservationProps } from "./reservation.types";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { PickListImage, PickListImageTest } from "../pickList/pickList.styles";

const ReservationUI = (props: IReservationProps) => {
  const navigation = useNavigation();
  const soldOutList = props.soldOutList?.map((el: any) => el._id);

  return (
    <ScrollView>
      <Wrapper>
        <ListTitleWrapper>
          <TitleText>오늘예약한 식당리스트입니다</TitleText>
          <ContentsText>시간 내에 미방문시 자동취소됩니다.</ContentsText>
        </ListTitleWrapper>
        {(!props.productInfo || props.productInfo?.length === 0) && (
          <NonReserWrapper>
            <NonReserText>예약된 내역이 없습니다.</NonReserText>
          </NonReserWrapper>
        )}
        {props.productInfo?.map(el => (
          <ReserWrapper key={el._id}>
            <ImgWrapper>
              {el.images[0] ? (
                <ReserImg
                  source={{
                    uri: `https://storage.googleapis.com/${el.images[0]}`
                  }}
                />
              ) : (
                <ReserImg
                  source={require("../../../../public/images/brunch.jpg")}
                />
              )}
            </ImgWrapper>
            <DataWrapper>
              <DataName>{el.productName}</DataName>
              <DataAt>{el.creatAt}</DataAt>
              <TouchableOpacity onPress={props.deleteMyFavoritePr(el)}>
                <Text>예약취소 </Text>
              </TouchableOpacity>
            </DataWrapper>
          </ReserWrapper>
        ))}
      </Wrapper>
    </ScrollView>
  );
};
export default ReservationUI;

{
  /* <ScrollView style={{ backgroundColor: "white" }}>
<Wrapper>
  <TableTop>
    <MainTitle>나의예약</MainTitle>
  </TableTop>
  <ReserWrapper>
    <TableWrpper>
      {(!props.productInfo || props.productInfo?.length === 0) && (
        <NonReserWrapper>
          <NonReserText>예약된 내역이 없습니다.</NonReserText>
        </NonReserWrapper>
      )}
      {props.productInfo?.map(el => (
        <Row>
          key={el._id}
          {el.images[0] ? (
            <PickListImage
              source={{
                uri: `https://storage.googleapis.com/${el.images[0]}`
              }}
            />
          ) : (
            <PickListImageTest></PickListImageTest>
          )}
          <RowView>
            <ColumDate>{el.productName}</ColumDate>
            <ColumPersonnel>{el.remarks}</ColumPersonnel>
            {/* <ColumPersonnel>{el.place}수정필요</ColumPersonnel> */
}
{
  /* <ColumUser>2022.02.15 오후12:30 4명</ColumUser> */
}
//             <ColumUser>{el.creatAt}</ColumUser>
//           </RowView>
//           <TouchableOpacity onPress={props.deleteMyFavoritePr(el)}>
//             <Text>
//               <Fontisto name="trash" size={15} color="#EB4034" />
//             </Text>
//           </TouchableOpacity>
//         </Row>

//     </TableWrpper>
//   </ReserWrapper>
// </Wrapper>
// </ScrollView>
// ); */}
