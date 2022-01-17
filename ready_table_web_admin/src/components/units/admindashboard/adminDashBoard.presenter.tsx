import {
  Wrapper,
  Title,
  InnerWrapper,
  HeaderPart,
  ProductCountLabel,
  ProductCount,
  SalesCountLabel,
  SalesCount,
  TotalAmountLabel,
  TotalAmount,
  FooterPart,
  WrapperHeader,
  GraphTitle,
  WrapperFooter,
} from "./adminDashBoard.styles";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveTimeRange } from "@nivo/calendar";
import { AdminBarGraph, AdminCalendarGraph } from "./adminDashBoards.chardata";
export default function AdminDashboardUI(props) {
  return (
    <>
      <Wrapper>
        <Title>관리자 대쉬보드</Title>
        <InnerWrapper>
          <WrapperHeader>
            <HeaderPart>
              <ProductCountLabel>등록된 업체</ProductCountLabel>
              <ProductCount>912 개</ProductCount>
            </HeaderPart>
            <HeaderPart>
              <SalesCountLabel>가입 회원</SalesCountLabel>
              <SalesCount>132,795 명</SalesCount>
            </HeaderPart>
            <HeaderPart>
              <TotalAmountLabel>오늘의 예약건수</TotalAmountLabel>
              <TotalAmount>1058 건</TotalAmount>
            </HeaderPart>
          </WrapperHeader>
          <WrapperFooter>
            <FooterPart>
              <GraphTitle>오늘 예약 현황 ( 건 )</GraphTitle>
              <ResponsiveBar
                data={AdminBarGraph}
                keys={["등록된 업체", "신규 등록 업체"]}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 70, left: 60 }}
                padding={0.3}
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "set2" }}
                defs={[
                  {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "#38bcb2",
                    size: 4,
                    padding: 1,
                    stagger: true,
                  },
                  {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "#eed312",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                  },
                ]}
                fill={[]}
                borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "카테고리",
                  legendPosition: "middle",
                  legendOffset: 32,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "예약 (건)",
                  legendPosition: "middle",
                  legendOffset: -40,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                legends={[
                  {
                    dataFrom: "keys",
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={function (e) {
                  return (
                    e.id +
                    ": " +
                    e.formattedValue +
                    " in country: " +
                    e.indexValue
                  );
                }}
              />
            </FooterPart>
            <FooterPart>
              <GraphTitle>월별 회원수 ( 명 )</GraphTitle>
              <ResponsiveLine
                data={AdminCalendarGraph}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: "point" }}
                yScale={{
                  type: "linear",
                  min: "auto",
                  max: "auto",
                  stacked: true,
                  reverse: false,
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  orient: "bottom",
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "월",
                  legendOffset: 36,
                  legendPosition: "middle",
                }}
                axisLeft={{
                  orient: "left",
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "회원수",
                  legendOffset: -40,
                  legendPosition: "middle",
                }}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                  {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemBackground: "rgba(0, 0, 0, .03)",
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
              />
            </FooterPart>
          </WrapperFooter>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
