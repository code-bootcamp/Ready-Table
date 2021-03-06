import {
  Wrapper,
  Line,
  TopWrapper,
  Avatar,
  Name,
  Phrase,
  BottomWrapper,
  InnerWrapper,
  InnerWrapperRegister,
  InnerWrapperProduct,
  InnerWrapperSales,
  InnerWrapperDashboard,
  InnerWrapperModify,
  SideMenuButtonModify,
  SideMenuDashboardIcon,
  SideMenuIcon,
  SideMenuButton,
  SideMenuButtonRegister,
  SideMenuButtonProduct,
  SideMenuButtonSales,
  SideMenuButtonDashboard,
} from "./sidebar.styles";

export default function SidebarUI(props) {
  return (
    <>
      <Wrapper>
        <TopWrapper>
          <Avatar
            src={
              props.data?.fetchUserLoggedIn.picture
                ? `https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`
                : "/images/user.png"
            }
          />
          <Name>
            {props.data?.fetchUserLoggedIn.name[0] === "#"
              ? props.data?.fetchUserLoggedIn.name.slice(
                  1,
                  props.data?.fetchUserLoggedIn.name.length
                )
              : props.data?.fetchUserLoggedIn.name}
            님
          </Name>
          <Phrase>
            {props.data?.fetchUserLoggedIn.name[0] === "#"
              ? "관리자 페이지에 오신 걸 환영합니다."
              : "사업자 페이지에 오신 걸 환영합니다."}
          </Phrase>
          <Line />
        </TopWrapper>
        <BottomWrapper>
          {props.data?.fetchUserLoggedIn.name[0] === "#" ? (
            // 관리자인 경우
            <>
              <InnerWrapperDashboard isActive={props.isActive}>
                {props.isActive === "/dashboard" ? (
                  <SideMenuDashboardIcon src="/images/bar-chart.png" />
                ) : (
                  <SideMenuDashboardIcon src="/images/bar-chart.png" />
                )}
                <SideMenuButtonDashboard
                  isActive={props.isActive}
                  onClick={props.onClickMoveToDashboard}
                >
                  대시보드
                </SideMenuButtonDashboard>
              </InnerWrapperDashboard>
              <InnerWrapperModify isActive={props.isActive}>
                {props.isActive === "/profilemodify" ? (
                  <SideMenuIcon src="/images/edit.png" />
                ) : (
                  <SideMenuIcon src="/images/edit.png" />
                )}
                <SideMenuButtonModify
                  isActive={props.isActive}
                  onClick={props.onClickMoveToModify}
                >
                  내 정보 수정
                </SideMenuButtonModify>
              </InnerWrapperModify>
            </>
          ) : (
            // 사장님인 경우
            <>
              <InnerWrapperDashboard isActive={props.isActive}>
                {props.isActive === "/dashboard" ? (
                  <SideMenuDashboardIcon src="/images/bar-chart.png" />
                ) : (
                  <SideMenuDashboardIcon src="/images/bar-chart.png" />
                )}
                <SideMenuButtonDashboard
                  isActive={props.isActive}
                  onClick={props.onClickMoveToDashboard}
                >
                  대시보드
                </SideMenuButtonDashboard>
              </InnerWrapperDashboard>
              <InnerWrapperRegister isActive={props.isActive}>
                {props.isActive === "/register" ? (
                  <SideMenuIcon src="/images/edit.png" />
                ) : (
                  <SideMenuIcon src="/images/edit.png" />
                )}
                <SideMenuButtonRegister
                  isActive={props.isActive}
                  onClick={props.onClickMoveToRegister}
                >
                  식당 정보 수정
                </SideMenuButtonRegister>
              </InnerWrapperRegister>
              {/* <InnerWrapperProduct isActive={props.isActive}>
                {props.isActive === "/productstable" ? (
                  <SideMenuIcon src="/images/next.png" />
                ) : (
                  <SideMenuIcon src="/images/next.png" />
                )}
                <SideMenuButtonProduct
                  isActive={props.isActive}
                  onClick={props.onClickMoveToProductstable}
                >
                  리뷰 현황
                </SideMenuButtonProduct>
              </InnerWrapperProduct> */}

              {/* <InnerWrapperSales isActive={props.isActive}>
                {props.isActive === "/salestable" ? (
                  <SideMenuIcon src="/images/next.png" />
                ) : (
                  <SideMenuIcon src="/images/next.png" />
                )}
                <SideMenuButtonSales
                  isActive={props.isActive}
                  onClick={props.onClickMoveToSalestable}
                >
                  예약 현황
                </SideMenuButtonSales>
              </InnerWrapperSales> */}
              <InnerWrapperModify isActive={props.isActive}>
                {props.isActive === "/profilemodify" ? (
                  <SideMenuIcon src="/images/edit2.png" />
                ) : (
                  <SideMenuIcon src="/images/edit2.png" />
                )}
                <SideMenuButtonModify
                  isActive={props.isActive}
                  onClick={props.onClickMoveToModify}
                >
                  내 정보 수정
                </SideMenuButtonModify>
              </InnerWrapperModify>
            </>
          )}
          {props.accessToken && (
            <InnerWrapper>
              <SideMenuIcon src="/images/logout.png" />
              <SideMenuButton onClick={props.onClickLogout}>
                로그아웃
              </SideMenuButton>
            </InnerWrapper>
          )}
        </BottomWrapper>
      </Wrapper>
    </>
  );
}
123;
